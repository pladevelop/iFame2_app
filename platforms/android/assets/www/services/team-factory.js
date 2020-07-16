// Factory - policyFactory
//
// created : 2/5/2015
// author  : NJ
//
/// <reference path="../lib/ionic/js/ionic.bundle.js" />
//
ifameApp.factory('teamFactory', [
    'appConstants', 'appGlobals', 'httpFactory',
    function(appConstants, appGlobals, httpFactory) {
        var factory = {};
        //
        factory.getTeamUpline = function(agCode) {
            var action = 'webqry/getAgtStrWithName/';
            var data = {
                AgCode: agCode
            };
            var promise = httpFactory.apiPost(action, data);
            return promise;
        };
        //
        factory.getUserAgent = function(agCode,agGroup) {
            var action = 'webqry/getUserAgent/';
            var data = {
                userId: agCode,
                userGroup: agGroup
            };
            var promise = httpFactory.apiPost(action, data);
            return promise;
        };
        //
        factory.getAgentDetail = function(agCode) {
            var action = 'webqry/getAgentDet/';
            var data = {
                agCode: agCode
            };
            var promise = httpFactory.apiPost(action, data);
            return promise;
        };
        //
        factory.getAgentActiveOrHold = function(agCode,agGroup) {
            var action = 'webqry/getAgentActiveOrHold/';
            var data = {
                usrId: agCode,
                usrGroup: agGroup
            };
            var promise = httpFactory.apiPost(action, data);
            return promise;
        };
        //---agent api
        factory.getAgentInfo = function(agCode) {
            var action = 'agent/getAgent/';
            var data = {
                agent_cd: agCode
            };
            var promise = httpFactory.agtapiPost(action, data);
            return promise;
        };
        //----agent api
        factory.getAgentTrainings = function(agCode) {
            var action = 'agent/getAgentTrainings/';
            var data = {
                agent_cd: agCode
            };
            var promise = httpFactory.agtapiPost(action, data);
            return promise;
        };
        factory.getSubmitPrem = function(agCode,agGroup) {
            var action = 'mis/getSubmitMonthSum/';
            var data = {
                usrId: agCode,
                usrGroup: agGroup
            };
            var promise = httpFactory.apiPost(action, data);
            return promise;
        };
        factory.getIssuePrem = function(agCode,agGroup) {
            var action = 'mis/getIssueMonthSum/';
            var data = {
                usrId: agCode,
                usrGroup: agGroup
            };
            var promise = httpFactory.apiPost(action, data);
            return promise;
        };
        factory.getDefaultSubmit = function() { 
            return {    
                    gb_amt_day: "0.00",
                    gb_amt_mth: "0.00",
                    gb_case_day: "0",
                    gb_case_mth: "0",
                    gb_type: "GB",
                    ob_amt_day: "0.00",
                    ob_amt_mth: "0.00",
                    ob_case_day: "0",
                    ob_case_mth: "0",
                    ob_type: "OB",
                    pa_amt_day: "0.00",
                    pa_amt_mth: "0.00",
                    pa_case_day: "0",
                    pa_case_mth: "0",
                    pa_type: "PA",
                    tt_amt_day: "0.00",
                    tt_amt_mth: "0.00",
                    tt_case_day: "0",
                    tt_case_mth: "0",
                    tt_type: "Total"
                }
           };

        factory.getDefaultIssue = function() { 
            return {    
                    ob_case: "0",
                    ob_casesum: "0.00",
                    ob_issafypamt: "0.00",
                    ob_issafypamtsum: "0.00",
                    ob_issamt: "0.00",
                    ob_issamtsum: "0.00",
                    ob_type: "OB",
                    pa_case: "0",
                    pa_casesum: "0.00",
                    pa_issafypamt: "0.00",
                    pa_issafypamtsum: "0.00",
                    pa_issamt: "0.00",
                    pa_issamtsum: "0.00",
                    pa_type: "PA",
                    tt_case: "0",
                    tt_casesum: "0.00",
                    tt_issafypamt: "0.00",
                    tt_issafypamtsum: "0.00",
                    tt_issamt: "0.00",
                    tt_issamtsum: "0.00",
                    tt_type: "Total"
                }
           };
 
        //
        return factory;
    }
]);