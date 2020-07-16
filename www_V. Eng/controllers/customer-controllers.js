// angular.module('ifameApp').controller Controllers
// polpendController : policyPending
//
// created : 2/5/2015
// author  : NJ
//
/// <reference path="../lib/ionic/js/ionic.bundle.js" />
//
//var angular.module('ifameApp').controller = angular.module('angular.module('ifameApp').controller');

ifameApp.controller('customerController', [
        '$scope', 'sharedFactory', 'teamFactory', 'appGlobals', '$filter', '$state','$stateParams', 
        function($scope, sharedFactory, teamFactory, appGlobals, $filter, $state, $stateParams) {
            var self = this;
            var msgTitle = "Customer";
            // declaration
            $scope.agCode = "";
            $scope.inpMonth = "";
            $scope.inpInforce = {};
            $scope.inpInclude = {};
            $scope.listlength = 0;
            //
            init();
            //
            function init() {
                $scope.agCode = appGlobals.usrLogin.usrId;
                $scope.inpMonth = angular.uppercase($filter('date')(new Date(), "MMM"));
                $scope.inpInforce = {
                    checked: true
                };
                $scope.inpInclude = {
                    checked: false
                };
            };
            //
            $scope.getbdlist = function(selMonth, selInforced, selIncluded) {
                var inf = (selInforced == true ? "Y" : "N");
                var inc = (selIncluded == true ? "Y" : "N");
                var data = {
                    selMonth: selMonth,
                    selInforced: inf,
                    selIncluded: inc
                };
                //alert('sel=' + JSON.stringify(data));
                $state.go("menu.custbdlist", data);
                //alert('search=' + selMonth + "Y" + "N");
                //$state.go("menu.custbdlist", {selMonth: "JUN", selInforced: "Y", selIncluded: "N"});
            };
        }
    ])
    .controller('custbdlistController', [
        '$scope', '$stateParams', 'customerFactory', 'sharedFactory', 'appGlobals', 'appConstants',
        function($scope, $stateParams, customerFactory, sharedFactory, appGlobals, appConstants) {
            var msgTitle = "Birthday List";
            //alert(msgTitle);
            //
            $scope.srcId = "custbdlist";
            $scope.agCode = "";
            $scope.selMonth = "";
            $scope.selInforced = "";
            $scope.selIncluded = "";
            $scope.selMM = "";
            //
            $scope.policies = [];
            $scope.listlength = 0;
            //
            init();
            //
            function init() {
                $scope.agCode = appGlobals.usrLogin.usrId;
                $scope.selMonth = $stateParams.selMonth;
                $scope.selInforced = $stateParams.selInforced;
                $scope.selIncluded = $stateParams.selIncluded;
                $scope.selMM = mmm2nn($scope.selMonth);
                $scope.listlength = 20;
                // get birthday data
                var promise = customerFactory.getCustBirthDay(
                    $scope.agCode, $scope.selMM, $scope.selInforced, $scope.selIncluded);
                promise.success(function(data, status, headers, config, statusText) {
                        //alert('OK' + JSON.stringify(data));
                        //alert('ok=' + data.length);
                        if (angular.isUndefined(data) || data === null) {
                            $scope.policies = [];
                            sharedFactory.showMsg(msgTitle, "No Birthday Data!");
                        } else {
                            $scope.policies = data;
                        }
                    })
                    .error(function(data, status, headers, config, statusText) {
                        sharedFactory.showMsg(msgTitle, "error status=" + status + "<br />" +
                            "message=" + data + "<br />" +
                            "statusText=" + statusText);
                    });
            };
            $scope.loadMore = function() {
                if (!$scope.policies) {
                    $scope.$broadcast('scroll.infiniteScrollComplete');
                    return;
                }
                if ($scope.listlength < $scope.policies.length)
                    $scope.listlength += 10;
                $scope.$broadcast('scroll.infiniteScrollComplete');
            };
            $scope.$on('$stateChangeSuccess', function() {
                $scope.loadMore();
            });
            //
            function mmm2nn(mmm) {
                var i = ("/JAN/FEB/MAR/APR/MAY/JUN/JUL/AUG/SEP/OCT/NOV/DEC").indexOf(mmm);
                var mon = Math.floor(i / 4) + 1;
                return (mon < 10 ? '0' + mon.toString() : mon.toString());
            };
            //

        }
    ]);