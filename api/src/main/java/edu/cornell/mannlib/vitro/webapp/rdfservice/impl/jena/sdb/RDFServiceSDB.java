/* $This file is distributed under the terms of the license in /doc/license.txt$ */

package edu.cornell.mannlib.vitro.webapp.rdfservice.impl.jena.sdb;

import java.io.IOException;
import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

import javax.sql.DataSource;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;

import org.apache.jena.datatypes.RDFDatatype;
import org.apache.jena.datatypes.TypeMapper;
import org.apache.jena.datatypes.xsd.XSDDatatype;
import org.apache.jena.graph.Node;
import org.apache.jena.graph.NodeFactory;
import org.apache.jena.graph.Triple;
import org.apache.jena.query.Dataset;
import org.apache.jena.query.Query;
import org.apache.jena.query.QueryExecution;
import org.apache.jena.query.QueryExecutionFactory;
import org.apache.jena.rdf.model.Model;
import org.apache.jena.rdf.model.ModelFactory;
import org.apache.jena.rdf.model.RDFNode;
import org.apache.jena.sdb.SDBFactory;
import org.apache.jena.sdb.Store;
import org.apache.jena.sdb.StoreDesc;
import org.apache.jena.sdb.layout2.ValueType;
import org.apache.jena.sdb.sql.SDBConnection;

import edu.cornell.mannlib.vitro.webapp.dao.jena.DatasetWrapper;
import edu.cornell.mannlib.vitro.webapp.dao.jena.StaticDatasetFactory;
import edu.cornell.mannlib.vitro.webapp.dao.jena.event.BulkUpdateEvent;
import edu.cornell.mannlib.vitro.webapp.rdfservice.ChangeListener;
import edu.cornell.mannlib.vitro.webapp.rdfservice.ChangeSet;
import edu.cornell.mannlib.vitro.webapp.rdfservice.RDFService;
import edu.cornell.mannlib.vitro.webapp.rdfservice.RDFServiceException;
import edu.cornell.mannlib.vitro.webapp.rdfservice.impl.jena.RDFServiceJena;
import org.apache.jena.sdb.store.LayoutType;

public class RDFServiceSDB extends RDFServiceJena implements RDFService {

    private final static Log log = LogFactory.getLog(RDFServiceSDB.class);
    
    private DataSource ds;
    private StoreDesc storeDesc;
    private Connection conn;
    private StaticDatasetFactory staticDatasetFactory;
    
    public RDFServiceSDB(DataSource dataSource, StoreDesc storeDesc) {
        this.ds = dataSource;
        this.storeDesc = storeDesc;
    }
    
    public RDFServiceSDB(Connection conn, StoreDesc storeDesc) {
        this.conn = conn;
        this.storeDesc = storeDesc;
        this.staticDatasetFactory = new StaticDatasetFactory(getDataset(
                new SDBConnection(conn)));
    }
    
    @Override
    protected DatasetWrapper getDatasetWrapper() {
        try {
            if (staticDatasetFactory != null) {
                return staticDatasetFactory.getDatasetWrapper();
            }
            SDBConnection sdbConn = new SDBConnection(ds.getConnection());
            return new DatasetWrapper(getDataset(sdbConn), sdbConn);
        } catch (SQLException sqle) {
            log.error(sqle, sqle);
            throw new RuntimeException(sqle);
        }     
    }
       
    @Override
    public boolean changeSetUpdate(ChangeSet changeSet)
            throws RDFServiceException {
             
        if (changeSet.getPreconditionQuery() != null 
                && !isPreconditionSatisfied(
                        changeSet.getPreconditionQuery(), 
                                changeSet.getPreconditionQueryType())) {
            return false;
        }
            
        SDBConnection sdbConn = getSDBConnection();        
        Dataset dataset = getDataset(sdbConn);
        try {
            insureThatInputStreamsAreResettable(changeSet);
        } catch (IOException e) {
            throw new RuntimeException(e);
        }

        try {
            beginTransaction(sdbConn);
        	notifyListenersOfPreChangeEvents(changeSet);
        	applyChangeSetToModel(changeSet, dataset);
            commitTransaction(sdbConn);
            notifyListenersOfChanges(changeSet);
            notifyListenersOfPostChangeEvents(changeSet);            
            return true;
        } catch (Exception e) {
            log.error(e, e);
            abortTransaction(sdbConn);
            throw new RDFServiceException(e);
        } finally {
            close(sdbConn);
        }
    }
    
	private SDBConnection getSDBConnection() throws RDFServiceException  {
		try {
			Connection c = (conn != null) ? conn : ds.getConnection();
			return new SDBConnection(c);
		} catch (SQLException sqle) {
			log.error(sqle, sqle);
			throw new RDFServiceException(sqle);
		}        
    }

    private void close(SDBConnection sdbConn) {
        if (!sdbConn.getSqlConnection().equals(conn)) {
            sdbConn.close();
        }
    }
    
    private Dataset getDataset(SDBConnection sdbConn) {
        Store store = SDBFactory.connectStore(sdbConn, storeDesc);
        store.getLoader().setUseThreading(false);
        return SDBFactory.connectDataset(store);
    }
    
	private void beginTransaction(SDBConnection sdbConn) {
		if (sdbConn.getTransactionHandler().transactionsSupported()) {
		    sdbConn.getTransactionHandler().begin();
		}
	}

	private void commitTransaction(SDBConnection sdbConn) {
		if (sdbConn.getTransactionHandler().transactionsSupported()) {
			sdbConn.getTransactionHandler().commit();
		}
	}
	
	private void abortTransaction(SDBConnection sdbConn) {
		if (sdbConn.getTransactionHandler().transactionsSupported()) {
			sdbConn.getTransactionHandler().abort();
		}
	}
	    
    @Override
    protected QueryExecution createQueryExecution(String queryString, Query q, Dataset d) {
        return QueryExecutionFactory.create(q, d);

        // This used to execute against the default model if the query included an OPTIONAL
        // However, in recent Jena this turns out to be much slower than executing against the dataset directly
    }

    @Override
    public Model getTriples(RDFNode subject, RDFNode predicate, RDFNode object, long limit, long offset) throws RDFServiceException {
        if (subject != null || predicate != null || object != null) {
            return super.getTriples(subject, predicate, object, limit, offset);
        }

        if (LayoutType.LayoutTripleNodesHash.equals(storeDesc.getLayout())) {
            Model triples = ModelFactory.createDefaultModel();

            SDBConnection sdbConn = getSDBConnection();
            try {
                Statement stmt = sdbConn.getSqlConnection().createStatement();
                ResultSet rs = stmt.executeQuery("SELECT \n" +
                        "N1.lex      AS s_lex,\n" +
                        "N1.lang     AS s_lang,\n" +
                        "N1.datatype AS s_datatype,\n" +
                        "N1.type     AS s_type,\n" +
                        "N2.lex      AS p_lex,\n" +
                        "N2.lang     AS p_lang,\n" +
                        "N2.datatype AS p_datatype,\n" +
                        "N2.type     AS p_type,\n" +
                        "N3.lex      AS o_lex,\n" +
                        "N3.lang     AS o_lang,\n" +
                        "N3.datatype AS o_datatype,\n" +
                        "N3.type     AS o_type\n" +
                        "FROM\n" +
                        "(SELECT DISTINCT s,p,o FROM Quads ORDER BY s,p,o " +
                        (limit > 0 ? "LIMIT " + limit : "") +
                        (offset > 0 ? " OFFSET " + offset : "") + ") Q\n" +
                        "LEFT OUTER JOIN\n" +
                        "\tNodes AS N1\n" +
                        "ON ( Q.s = N1.hash )\n" +
                        "LEFT OUTER JOIN\n" +
                        "\tNodes AS N2\n" +
                        "ON ( Q.p = N2.hash )\n" +
                        "LEFT OUTER JOIN\n" +
                        "\tNodes AS N3\n" +
                        "ON ( Q.o = N3.hash )");

                while (rs.next()) {
                    Node subjectNode = makeNode(
                        rs.getString("s_lex"),
                        rs.getString("s_lang"),
                        rs.getString("s_datatype"),
                        rs.getInt("s_type"));

                    Node predicateNode = makeNode(
                            rs.getString("p_lex"),
                            rs.getString("p_lang"),
                            rs.getString("p_datatype"),
                            rs.getInt("p_type"));

                    Node objectNode = makeNode(
                            rs.getString("o_lex"),
                            rs.getString("o_lang"),
                            rs.getString("o_datatype"),
                            rs.getInt("o_type"));

                    triples.add(
                        triples.asStatement(Triple.create(subjectNode, predicateNode, objectNode))
                    );
                }

            } catch (SQLException sqle) {
                throw new RDFServiceException("Unable to retrieve triples", sqle);
            }finally {
                close(sdbConn);
            }

            return triples;
        }

        return null;
    }

    @Override
    public void close() {
        if (conn != null) {
            try {
                conn.close();
            } catch (SQLException e) {
                log.error(e,e);
            }
        }
    }

    private static Node makeNode(String lex, String datatype, String lang, int vType) {
        switch(vType) {
            case 1:
                return NodeFactory.createBlankNode(lex);
            case 2:
                return NodeFactory.createURI(lex);
            case 3:
                return NodeFactory.createLiteral(lex, lang);
            case 4:
                return NodeFactory.createLiteral(lex, XSDDatatype.XSDstring);
            case 5:
                return NodeFactory.createLiteral(lex, XSDDatatype.XSDinteger);
            case 6:
                return NodeFactory.createLiteral(lex, XSDDatatype.XSDdouble);
            case 7:
                return NodeFactory.createLiteral(lex, XSDDatatype.XSDdateTime);
            case 8:
                RDFDatatype dt = TypeMapper.getInstance().getSafeTypeByName(datatype);
                return NodeFactory.createLiteral(lex, dt);
            default:
                log.warn("Unrecognized: (" + lex + ", " + lang + ", " + vType + ")");
                return NodeFactory.createLiteral("UNRECOGNIZED");
        }
    }
}
