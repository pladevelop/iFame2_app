// angular.module('ifameApp').controller Controllers
// polpendController : policyPending
//
// created : 2/5/2015
// author  : NJ
//
/// <reference path="../lib/ionic/js/ionic.bundle.js" />
//
//var angular.module('ifameApp').controller = angular.module('angular.module('ifameApp').controller');

ifameApp.controller('trainingController', [
        '$scope', 'sharedFactory', 'appGlobals', '$window', 'trainingFactory', 
        function($scope, sharedFactory, appGlobals, $window, trainingFactory) {
            var msgTitle = "Training";
            // declaration
            $scope.trains = [];
            $scope.listlength = 0;
            //
            init();
            //
            function init() {
                $scope.listlength = 20;
                //$scope.trains = trainingFactory.getTrainMonths();
            //};
            var promise = trainingFactory.getTrainMonths();
                promise.success(function (data, status, headers, config, statusText) {
                    //alert('OK' + JSON.stringify(data));
                    if (angular.isUndefined(data) || data === null) {
                        $scope.trains  = [];
                        sharedFactory.showMsg(msgTitle, "No Data!");
                    } else {
                       $scope.trains  = data;
                    }
                })
                    .error(function (data, status, headers, config, statusText) {
                        sharedFactory.showMsg(msgTitle, "error status=" + status + "<br />" +
                            "message=" + data + "<br />" +
                            "statusText=" + statusText);
                    });
        };
        //
        $scope.loadMore = function() {
            if (!$scope.trains) {
                $scope.$broadcast('scroll.infiniteScrollComplete');
                return;
            }
            if ($scope.listlength < $scope.trains.length)
                $scope.listlength += 10;
            $scope.$broadcast('scroll.infiniteScrollComplete');
        };
        $scope.$on('$stateChangeSuccess', function() {
            $scope.loadMore();
        });
            //
            $scope.openPDF = function(pdfUrl) {
                //alert('open pdf' + pdfUrl);
                //$window.open(pdfUrl, "_system", "location=yes");
                sharedFactory.openPDF(pdfUrl);
            };

        }
    ])
    .controller('trainlicenseController', [
        '$scope', 'sharedFactory', 'appGlobals', '$window', 'trainingFactory',
        function($scope, sharedFactory, appGlobals, $window, trainingFactory) {
            var msgTitle = "License";
            // declaration
            $scope.items = [];
            $scope.listlength = 0;
            //
            init();
            //
            function init() {
                $scope.listlength = 20;
                $scope.items = trainingFactory.getTrainLicenses();
            };
            //
            $scope.openPDF = function(pdfUrl) {
                //alert('open pdf' + pdfUrl);
                //$window.open(pdfUrl, "_system", "location=yes");
                sharedFactory.openPDF(pdfUrl);
            };
        }
    ]);