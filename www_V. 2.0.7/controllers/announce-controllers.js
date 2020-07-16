// angular.module('ifameApp').controller Controllers
// polpendController : policyPending
//
// created : 2/5/2015
// author  : NJ
//
/// <reference path="../lib/ionic/js/ionic.bundle.js" />
//
//var angular.module('ifameApp').controller = angular.module('angular.module('ifameApp').controller');

ifameApp.controller('announceController', [
    '$scope', 'sharedFactory', 'announceFactory', '$window', 'datetimeFactory',
    function($scope, sharedFactory, announceFactory, $window, datetimeFactory) {
        var self = this;
        var msgTitle = "announcement";
        // declaration
        $scope.years = [];
        $scope.selYear = {};
        $scope.docs = [];
        $scope.listlength = 0;
        //
        init();
        //
        function init() {
            $scope.listlength = 20;
            //
            var y1 = parseInt(datetimeFactory.currentYearTh());
            var y2 = y1 - 10;
            while (y1 > y2) {
                $scope.years.push({id: y1.toString()});
                y1--;
            };
            $scope.selYear = $scope.years[0];
            // load announcement
            getAnnouncement($scope.selYear.id);
            //
        };
        //
        function getAnnouncement(yearId) {
            var promise = announceFactory.getAnnouncement(yearId);
            promise.success(function(data, status, headers, config, statusText) {
                    //alert('OK' + JSON.stringify(data));
                    if (angular.isUndefined(data) || data === null) {
                        $scope.docs = [];
                        sharedFactory.showMsg(msgTitle, "Not found Announcement!");
                    } else {
                        $scope.docs = data;
                        //alert('scope doc='+JSON.stringify($scope.docs));
                    }
                })
                .error(function(data, status, headers, config, statusText) {
                    sharedFactory.showMsg(msgTitle, "error status=" + status + "<br />" +
                        "message=" + data + "<br />" +
                        "statusText=" + statusText);
                });
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
        $scope.reload = function(selYear) {
            getAnnouncement(selYear.id);
        };
        //
        $scope.openPDF = function(pdfUrl) {
            //alert('open pdf' + pdfUrl);
            $window.open(pdfUrl, "_system", "location=yes");
        };
    }
]);