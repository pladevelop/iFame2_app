// angular.module('ifameApp').controller Controllers
// polpendController : policyPending
//
// created : 2/5/2015
// author  : NJ
//
/// <reference path="../lib/ionic/js/ionic.bundle.js" />
//
//var angular.module('ifameApp').controller = angular.module('angular.module('ifameApp').controller');

ifameApp.controller('userprofileController', [
    '$scope', 'sharedFactory', 'userFactory', 'appGlobals', '$filter', '$state',
    function($scope, sharedFactory, userFactory, appGlobals, $filter, $state) {
        var self = this;
        var msgTitle = "My Profile";
        //
        $scope.styleInput = { color: '#3366ff'};
        $scope.dspMode = true;
        //
        $scope.user = {};
        // declaration
        //
        init();
        //
        function init() {
            $scope.user = appGlobals.usrAgentInfo;
        };
        //
    }
]);