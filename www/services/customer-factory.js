// Factory - policyFactory
//
// created : 2/5/2015
// author  : NJ
//
/// <reference path="../lib/ionic/js/ionic.bundle.js" />
//
ifameApp.factory('customerFactory', [
    'appConstants', 'appGlobals', 'httpFactory',
    function(appConstants, appGlobals, httpFactory) {
        var factory = {};
        //
        factory.getCustBirthDay = function(agCode, selMonth, selInforced, selIncluded) {
            var action = 'webqry/getPolicyByBirthday/';
            var data = {
                UsrID: agCode,
                Month: selMonth,
                Inforce: selInforced,
                AgentUnder: selIncluded
            };
            //alert('get bd=' + JSON.stringify(data));
            var promise = httpFactory.apiPost(action, data);
            return promise;
        };
        //
        return factory;
    }
]);