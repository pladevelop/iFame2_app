// Factory - policyFactory
//
// created : 2/5/2015
// author  : NJ
//
/// <reference path="../lib/ionic/js/ionic.bundle.js" />
//
ifameApp.factory('httpFactory', [
    '$http', 'appConstants', 'appGlobals', '$q',
    function($http, appConstants, appGlobals, $q) {
        var factory = {};
        //
        factory.apiPost = function(action, data) {
            var req = {
                method: 'POST',
                url: appConstants.BASEURL + action,
                headers: {
                    'Authorization': appGlobals.usrAuthen
                },
                data: data
            };
            return $http(req);
        };
        //
        factory.apiGetText = function(url) {
            var req = {
                method: 'GET',
                url: url,
                crossDomain: true,
                headers: {
                    'Content-Type': 'text/plain',
                    'Access-Control-Allow-Origin': '*'
                },
            };
            return $http(req);
        };
        //
        factory.apiPostTimeout = function(action, data) {
            var timeout = $q.defer();
            var result = $q.defer();
            var timeOut = false;
            var secTimeout = 1;
            var secDelay = 3;
            //
            var req = {
                method: 'POST',
                url: appConstants.BASEURL + action,
                headers: {
                    'Authorization': appGlobals.usrAuthen
                },
                data: data,
                timeout: timeout.promise
            };
            //
            setTimeout(function() {
                timedOut = true;
                timeout.resolve();
            }, (1000 * secTimeout));
            //
            var promise = $http(req).success(function(data, status, headers, config) {
                result.resolve(data);
            }).error(function(data, status, headers, config) {
                if (timedOut) {
                    result.reject({
                        error: 'timeout',
                        message: 'Request took longer than ' + secTimeout + ' seconds.'
                    });
                } else {
                    result.reject(data);
                }
            });
            return promise; //result.promise;
        };
        //
        factory.agtapiPost = function(action, data) {
            var req = {
                method: 'POST',
                url: appConstants.AGTURL + action,
                headers: {
                    'Authorization': appGlobals.usrAuthen
                },
                data: data
            };
            return $http(req);
        };
        //
        return factory;
    }
]);