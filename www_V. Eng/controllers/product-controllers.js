// angular.module('ifameApp').controller Controllers
// polpendController : policyPending
//
// created : 2/5/2015
// author  : NJ
//
/// <reference path="../lib/ionic/js/ionic.bundle.js" />
//
//var angular.module('ifameApp').controller = angular.module('angular.module('ifameApp').controller');

ifameApp.controller('productController', [
    '$scope', 'sharedFactory', 'appGlobals', '$window', 'productFactory',
    function($scope, sharedFactory, appGlobals, $window, productFactory) {
        var msgTitle = "Product";
        // declaration
        $scope.products = [];
        $scope.listlength = 0;
        //
        init();
        //
        function init() {
            $scope.products = productFactory.getProducts();
        };
        //
        $scope.loadMore = function() {
            if (!$scope.products) {
                $scope.$broadcast('scroll.infiniteScrollComplete');
                return;
            }
            if ($scope.listlength < $scope.products.length)
                $scope.listlength += 10;
            $scope.$broadcast('scroll.infiniteScrollComplete');
        };
        $scope.$on('$stateChangeSuccess', function() {
            $scope.loadMore();
        });
        //
        $scope.openWeb = function(webUrl) {
            //alert('open pdf' + pdfUrl);
            //$window.open(webUrl, "_system", "location=yes");
            sharedFactory.openWeb(webUrl);
        };

    }
]);