<#-- $This file is distributed under the terms of the license in LICENSE$ -->

<#-- List individuals in the requested class. -->

<#import "lib-list.ftl" as l>

<#include "individualList-checkForData.ftl">

${stylesheets.add('<link rel="stylesheet" href="${urls.base}/css/browseIndex.css" />')}

<section class="individualList">
    <h2>${title!} 
        <#if rdfUrl?has_content>
            <span class="rdfLink"><a class="icon-rdf" href="${rdfUrl}" title="${i18n().view_list_in_rdf(title)}">${i18n().rdf}</a></span>
        </#if>
    </h2>
    <#if subtitle?has_content>
        <h4>${subtitle}</h4>
    </#if>
    
    <#if (!noData)>
        <#if errorMessage?has_content>
            <p>${errorMessage}</p>
        <#else>
            <#assign pagination>
                <#if (pages?has_content && pages?size > 1)>
                    ${i18n().pages}:
                    <ul class="pagination">
                        <#list pages as page>
                            <#if page.selected>
                                <li class="selectedNavPage">${page.text}</li>
                            <#else>
                                <#-- RY Ideally the urls would be generated by the controller; see search-pagedResults.ftl -->
                                <li><a href="${urls.base}/individuallist?${page.param}&vclassId=${vclassId?url}" title="page text">${page.text}</a></li>
                            </#if>
                        </#list>
                    </ul>
                </#if>
            </#assign>
            
            ${pagination}
            
            <ul>
                <#list individuals as individual>
                    <li>       
                        <@shortView uri=individual.uri viewContext="index" />
                    </li>
                </#list>
            </ul>
            
            ${pagination}
        </#if>
    <#else>
        ${noDataNotification}
    </#if>
</section> <!-- .individualList -->