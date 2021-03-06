/*
 * Copyright 2016 SimplifyOps, Inc. (http://simplifyops.com)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

//= require momentutil
//= require knockout.min
//= require knockout-mapping
//= require knockout-foreachprop
//= require historyKO
//= require nodeFiltersKO
//= require executionOptions

/*
 Manifest for "menu/jobs.gsp" page
 */
//TODO: refactor menu/jobs.gsp to move javascript here

function initJobNodeFilters(filterParams){
    var pageParams = loadJsonData('pageParams');
    var nodeSummary = new NodeSummary({baseUrl:appLinks.frameworkNodes});
    return new NodeFilters(
        appLinks.frameworkAdhoc,
        appLinks.scheduledExecutionCreate,
        appLinks.frameworkNodes,
        jQuery.extend(filterParams,{
            project: pageParams.project,
            paging:false,
            emptyMode: 'localnode',
            maxShown:50,
            nodesTitleSingular:message('Node'),
            nodesTitlePlural:message('Node.plural'),
            nodeSummary:nodeSummary
        }));
}