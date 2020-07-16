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
        //
        return factory;
    }
]);