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
        $scope.styleInput = {
            color: '#3366ff'
        };
        // declaration
        $scope.userId = "";
        $scope.userGroup = "";
        $scope.user = {};
        $scope.dspMode = true;
        //
        init();
        //
        function init() {
            $scope.userId = appGlobals.usrLogin.usrId;
            $scope.userGroup = appGlobals.usrLogin.usrGroup;
            //
            var promise = userFactory.getUserInfo($scope.userId, $scope.userGroup);
            promise.success(function(data, status, headers, config, statusText) {
                    //alert('OK' + JSON.stringify(data));
                    if (angular.isUndefined(data) || data === null) {
                        $scope.user = [];
                        sharedFactory.showMsg(msgTitle, "Not found!");
                    } else {
                        $scope.user = data;
                    }
                })
                .error(function(data, status, headers, config, statusText) {
                    sharedFactory.showMsg(msgTitle, "error status=" + status + "<br />" +
                        "message=" + data + "<br />" +
                        "statusText=" + statusText);
                });
        };
        //
    }
]);