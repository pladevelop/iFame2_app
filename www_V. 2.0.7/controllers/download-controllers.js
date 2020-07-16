// angular.module('ifameApp').controller Controllers
// polpendController : policyPending
//
// created : 2/5/2015
// author  : NJ
//
/// <reference path="../lib/ionic/js/ionic.bundle.js" />
//
//var angular.module('ifameApp').controller = angular.module('angular.module('ifameApp').controller');

ifameApp.controller('downloadreportController', [
    '$scope', 'sharedFactory', 'appGlobals', 'downloadFactory', '$window',
    function($scope, sharedFactory, appGlobals, downloadFactory, $window) {
        var msgTitle = "Download-Reports";
        // declaration
        $scope.docs = [];
        //
        init();
        //
        function init() {
            $scope.docs = downloadFactory.getReportsAG();
        };
        //
        $scope.openPDF = function(pdfUrl) {
            //alert('open pdf' + pdfUrl);
            $window.open(pdfUrl, "_system", "location=yes");
        };
    }
])
.controller('downloadmanualController', [
    '$scope', 'sharedFactory', 'appGlobals', 'downloadFactory', '$window',
    function($scope, sharedFactory, appGlobals, downloadFactory, $window) {
        var msgTitle = "Download-Manuals";
        // declaration
        $scope.mkdocs = [];
        $scope.uwdocs = [];
        $scope.agdocs = [];
        //
        init();
        //
        function init() {
            $scope.mkdocs = downloadFactory.getManualsMK();
            $scope.uwdocs = downloadFactory.getManualsUW();
            $scope.agdocs = downloadFactory.getManualsAG();
        };
        //
        $scope.openPDF = function(pdfUrl) {
            //alert('open pdf' + pdfUrl);
            $window.open(pdfUrl, "_system", "location=yes");
        };
    }
])
.controller('downloadformobController', [
    '$scope', 'sharedFactory', 'appGlobals', 'downloadFactory', '$window',
    function($scope, sharedFactory, appGlobals, downloadFactory, $window) {
        var msgTitle = "Download-Forms";
        // declaration
        $scope.listlength = 0;
        $scope.docs = [];
        //
        init();
        //
        function init() {
            $scope.listlength = 20;
            $scope.docs = downloadFactory.getOBFormUW();
            // downloadFactory.getob().success(function(data){
            //     $scope.docs = data;
            // }).error(function(data,status,headers,config,statusText){
            //     alert('error '+statusText);
            // });
            //alert($scope.docs.length);
            //
            // var promise = downloadFactory.getOBFormUW();
            // promise.success(function(data, status, headers, config, statusText) {
            //         //alert('OK' + JSON.stringify(data));
            //         if (angular.isUndefined(data) || data === null) {
            //             $scope.docs = [];
            //             sharedFactory.showMsg(msgTitle, "Not found data!");
            //         } else {
            //             $scope.docs = data;
            //             //alert('scope doc='+JSON.stringify($scope.docs));
            //         }
            //     })
            //     .error(function(data, status, headers, config, statusText) {
            //         sharedFactory.showMsg(msgTitle, "error status=" + status + "<br />" +
            //             "message=" + data + "<br />" +
            //             "statusText=" + statusText);
            //     });
        };
        //
        $scope.loadMore = function() {
            if (!$scope.docs) {
                $scope.$broadcast('scroll.infiniteScrollComplete');
                return;
            }
            if ($scope.listlength < $scope.docs.length)
                $scope.listlength += 10;
            $scope.$broadcast('scroll.infiniteScrollComplete');
        };
        $scope.$on('$stateChangeSuccess', function() {
            $scope.loadMore();
        });
        //
        $scope.openPDF = function(pdfUrl) {
            //alert('open pdf' + pdfUrl);
            $window.open(pdfUrl, "_system", "location=yes");
        };
    }
])
.controller('downloadformtkController', [
    '$scope', 'sharedFactory', 'appGlobals', 'downloadFactory', '$window',
    function($scope, sharedFactory, appGlobals, downloadFactory, $window) {
        var msgTitle = "Download-Forms";
        // declaration
        $scope.listlength = 0;
        $scope.docs = [];
        //
        init();
        //
        function init() {
            $scope.listlength = 20;
            $scope.docs = downloadFactory.getTKFormUW();
            //
            // var promise = downloadFactory.getTKFormUW();
            // promise.success(function(data, status, headers, config, statusText) {
            //         //alert('OK' + JSON.stringify(data));
            //         if (angular.isUndefined(data) || data === null) {
            //             $scope.docs = [];
            //             sharedFactory.showMsg(msgTitle, "Not found data!");
            //         } else {
            //             $scope.docs = data;
            //             //alert('scope doc='+JSON.stringify($scope.docs));
            //         }
            //     })
            //     .error(function(data, status, headers, config, statusText) {
            //         sharedFactory.showMsg(msgTitle, "error status=" + status + "<br />" +
            //             "message=" + data + "<br />" +
            //             "statusText=" + statusText);
            //     });
        };
        //
        $scope.loadMore = function() {
            if (!$scope.docs) {
                $scope.$broadcast('scroll.infiniteScrollComplete');
                return;
            }
            if ($scope.listlength < $scope.docs.length)
                $scope.listlength += 10;
            $scope.$broadcast('scroll.infiniteScrollComplete');
        };
        $scope.$on('$stateChangeSuccess', function() {
            $scope.loadMore();
        });
        //
        $scope.openPDF = function(pdfUrl) {
            //alert('open pdf' + pdfUrl);
            $window.open(pdfUrl, "_system", "location=yes");
        };
    }
]);








