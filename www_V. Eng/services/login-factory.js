// Factory - loginFactory
//
// created : 2/5/2015
// author  : NJ
//
/// <reference path="../lib/ionic/js/ionic.bundle.js" />
//
ifameApp.factory('loginFactory', [
    'appConstants', 'appGlobals','httpFactory',
    function(appConstants, appGlobals, httpFactory) {
        var factory = {};
        //
        factory.login = function(userId, userPwd, userIp, userApp) {
            var action = 'webqry/login/';
            var data = {
                'usrid': userId,
                'usrpwd': userPwd,
                'usrip': userIp,
                'usrapp': userApp
            };
            //alert('url=' + urlLogin);
            //alert('/' + userId + '/' + userPwd + '/' + userIp + '/' + userApp + '/');
            //alert('data :'+JSON.stringify(data));
            //var promise = $http({
            //    url: appConstants.BASEURL + "login/login/",
            //    method: "POST",
            //    //headers: { 'Content-Type': 'application/json' },
            //    data: data
            //});
            //var promise = httpFactory.apiPost(action, data);
            var promise = httpFactory.apiPostTimeout(action,data, 15);
            return promise;
        };
        return factory;
    }
]);