// ifameApp Controllers
//
// created : 2/5/2015
// author  : NJ
//
/// <reference path="../lib/ionic/js/ionic.bundle.js" />
//
//var ifameApp = angular.module('ifameApp');

ifameApp.controller('homeController', [
        '$scope', 'sharedFactory', 'sessionFactory', 'appGlobals', '$window', '$state',
        function($scope, sharedFactory, sessionFactory, appGlobals, $window, $state) {
            // declaration
            $scope.todayNews = '';
            $scope.menuGroups = [];
            $scope.agCode = "";
            $scope.agGroup = "";
            // do initialize
            init();
            // private function
            function init() {
                sessionFactory.validateLogin();
                //
                $scope.agCode = appGlobals.usrLogin.usrId;
                $scope.agGroup = appGlobals.usrLogin.usrGroup;
                // today news
                $scope.todayNews = sharedFactory.getTodayNews();
                // menu
                $scope.menuGroups = sharedFactory.getMainMenusAGT();
                //
            };
            // accordian list
            $scope.toggleGroup = function(group) {
                if ($scope.isGroupShown(group)) {
                    $scope.shownGroup = null;
                } else {
                    $scope.shownGroup = group;
                }
            };
            $scope.isGroupShown = function(group) {
                return $scope.shownGroup === group;
            };
            //
            $scope.openWeb = function() {
                //alert('open web');
                var webUrl = "http://www.philliplife.com/news/";
                $window.open(webUrl, "_system", "location=yes");
            };
            //
            $scope.gotoMenu = function(mnuLink, mnuParam) {
                switch (mnuParam) {
                    case "agcode":
                        var data = {
                            agCode: $scope.agCode
                        };
                        $state.go(mnuLink, data);
                        break;
                    default:
                        $state.go(mnuLink);
                        break;
                };
            };
        }
    ])
    .controller('homeadminController', [
        '$scope', 'sharedFactory', 'sessionFactory', 'appGlobals', '$window', '$state',
        function($scope, sharedFactory, sessionFactory, appGlobals, $window, $state) {
            // declaration
            //$scope.todayNews = '';
            $scope.menuGroups = [];
            //$scope.agCode = "";
            //$scope.agGroup = "";
            // do initialize
            init();
            // private function
            function init() {
                sessionFactory.validateLogin();
                //
                //$scope.agCode = appGlobals.usrLogin.usrId;
                //$scope.agGroup = appGlobals.usrLogin.usrGroup;
                // today news
                //$scope.todayNews = sharedFactory.getTodayNews();
                // menu
                $scope.menuGroups = sharedFactory.getMainMenusADM();
                //
            };
            // accordian list
            $scope.toggleGroup = function(group) {
                if ($scope.isGroupShown(group)) {
                    $scope.shownGroup = null;
                } else {
                    $scope.shownGroup = group;
                }
            };
            $scope.isGroupShown = function(group) {
                return $scope.shownGroup === group;
            };
            //
            $scope.gotoMenu = function(mnuLink) {
                //alert('You select ->' + mnuLink);
                $state.go(mnuLink);
            };
        }
    ])
    .controller('homeaboutController', [
        '$scope', 'appConstants',
        function($scope, appConstants) {
            // get app version
            $scope.appName = appConstants.APPNAME;
            $scope.appVersion = appConstants.APPVER;
        }
    ]);