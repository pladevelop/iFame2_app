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
            $scope.trains = trainingFactory.getTrainMonths();
        };
        //
        //
        $scope.openPDF = function(pdfUrl) {
            //alert('open pdf' + pdfUrl);
            $window.open(pdfUrl, "_system", "location=yes");
        };
    }
])
.controller('trainlicenseController',[
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
        //
        $scope.openPDF = function(pdfUrl) {
            //alert('open pdf' + pdfUrl);
            $window.open(pdfUrl, "_system", "location=yes");
        };
    }
]);
