// Factory - policyFactory
//
// created : 2/5/2015
// author  : NJ
//
/// <reference path="../lib/ionic/js/ionic.bundle.js" />
//
ifameApp.factory('userFactory', [
    'appConstants', 'appGlobals', 'httpFactory',
    function(appConstants, appGlobals, httpFactory) {
        var factory = {};
        //
        factory.getUserInfo = function(userId, userGroup) {
            var action = 'webqry/getUserInfo/';
            var data = {
                userId: userId,
                userGroup: userGroup
            };
            //alert('get bd=' + JSON.stringify(data));
            var promise = httpFactory.apiPost(action, data);
            return promise;
        };
        //
        return factory;
    }
]);