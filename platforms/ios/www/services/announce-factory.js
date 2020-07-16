// Factory - policyFactory
//
// created : 2/5/2015
// author  : NJ
//
/// <reference path="../lib/ionic/js/ionic.bundle.js" />
//
ifameApp.factory('announceFactory', [
    'appConstants', 'appGlobals', 'httpFactory',
    function(appConstants, appGlobals, httpFactory) {
        var self = this;
        var factory = {};
        //
        factory.getAnnouncement = function(selYear) {
            var action = 'webqry/getNotice/';
            var data = {
                Type: "0",
                Year: selYear
            };
            var promise = httpFactory.apiPost(action, data);
            return promise;
        };
        //
        return factory;
    }
]);