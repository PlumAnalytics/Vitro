/* $This file is distributed under the terms of the license in /doc/license.txt$ */

package edu.cornell.mannlib.vitro.webapp.auth.requestedAction.propstmt;

import com.hp.hpl.jena.ontology.OntModel;

import edu.cornell.mannlib.vitro.webapp.beans.DataPropertyStatement;

/**
 * Should we allow the user to edit this DataPropertyStatement in this model?
 */
public class EditDataPropertyStatement extends
		AbstractDataPropertyStatementAction {
	public EditDataPropertyStatement(OntModel ontModel, String subjectUri,
			String predicateUri) {
		super(ontModel, subjectUri, predicateUri);
	}

	public EditDataPropertyStatement(OntModel ontModel,
			DataPropertyStatement dps) {
		super(ontModel, dps);
	}
}