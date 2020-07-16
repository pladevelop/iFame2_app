// ifameApp Controllers
//
// created : 2/5/2015
// author  : NJ
//
/// <reference path="../lib/ionic/js/ionic.bundle.js" />
//
//var ifameApp = angular.module('ifameApp');

ifameApp.controller('loginController', [
        '$scope', '$state', '$ionicLoading', '$q', 'appConstants', 'appGlobals',
        'loginFactory', 'sharedFactory', 'sessionFactory', 'ifamedbFactory', 'policyFactory', 'teamFactory',
        function($scope, $state, $ionicLoading, $q, appConstants, appGlobals,
            loginFactory, sharedFactory, sessionFactory, ifamedbFactory, policyFactory, teamFactory) {
            //
            var msgTitle = "Login";
            // 
            $scope.user = {};
            $scope.ip = '';
            $scope.apirul = '';
            $scope.version = '';
            // do initialize
            init();
            //
            // private function
            function init() {
                // default login value
                $scope.user.userId = '';
                $scope.user.userPwd = '';
                $scope.ip = appConstants.IPADDR;
                $scope.apiurl = appConstants.BASEURL;
                $scope.version = appConstants.APPVER;
                // clear session info for login
                sessionFactory.ClearLoginToken();
            };
            //
            function loadData2Local() {
                // get policies from webapi and load to sqlite
                // var promise = policyFactory.getPolAll();
                // promise.success(function(data, status, headers, config, statusText) {
                //         if (angular.isUndefined(data) || data === null) {
                //             //alert('data read=null');
                //             appGlobals.PolPayAndTerm = [];
                //         } else {
                //             //alert('data read='+data.length);
                //             ifamedbFactory.loadPolicyData(data);
                //             appGlobals.PolPayAndTerm = data;
                //         };
                //     })
                //     .error(function(data, status, headers, config, statusText) {
                //         sharedFactory.showMsg("loadData", "error status=" + status + "<br />" +
                //             "message=" + data + "<br />" +
                //             "statusText=" + statusText);
                //     });
                // return promise;
                // will get policies and get agetn info
                var agCode = appGlobals.usrLogin.usrId;
                var agGroup = appGlobals.usrLogin.usrGroup;
                //var promise1 = policyFactory.getPolAll(agCode, agGroup);
                var promise2 = teamFactory.getUserAgent(agCode, agGroup);
                //
                return $q.all([promise2]).then(function(results) {
                    return {
                        //polall: results[0].data,
                        usragt: results[0].data
                    };
                });
            };
            //
            function savePolicy2Local(data) {
                if (angular.isUndefined(data) || data === null) {
                    appGlobals.PolPayAndTerm = [];
                } else {
                    ifamedbFactory.loadPolicyData(data);
                    appGlobals.PolPayAndTerm = data;
                };
            };
            //
            function saveAgentInfo2Local(data) {
                appGlobals.usrAgentInfo = data;
                //alert('agentinfo='+JSON.stringify(data));
            };
            //
            function showHomeAgent() {
                var promise = loadData2Local();
                promise.then(function(data) {
                    //savePolicy2Local(data.polall);
                    saveAgentInfo2Local(data.usragt);
                    // redirect
                    $ionicLoading.hide();
                    appGlobals.usrHome = "home";
                    $state.go("menu." + appGlobals.usrHome);
                }, function(error) {
                    $ionicLoading.hide();
                    sharedFactory.showMsg("loadData", "Error Loading Policies");
                });
            };
            //
            function showHomeBOffice() {
                $ionicLoading.hide();
                alert('Invalid User Group->' + appGlobals.usrLogin.usrGroup);
            };
            //
            function showHomeCustomer() {
                $ionicLoading.hide();
                alert('Invalid User Group->' + appGlobals.usrLogin.usrGroup);
            };
            //
            function showHomeAdmin() {
                $ionicLoading.hide();
                appGlobals.PolPayAndTerm = [];
                appGlobals.usrAgentInfo = {};
                appGlobals.usrHome = "homeadmin";
                $state.go("menu." + appGlobals.usrHome);
            };
            // login ajax call to webapi
            $scope.login = function(inpUser, inpPassword) {
                // show loading
                $ionicLoading.show();
                // clear login token
                sessionFactory.ClearLoginToken();
                // validate login
                //alert('before login');
                var promise = loginFactory.login(inpUser, inpPassword, appConstants.IPADDR, appConstants.APPNAME);
                promise.success(function(data, status, headers, config, statusText) {
                        var usrGroup = sessionFactory.SetLoginToken(data);
                        switch (usrGroup) {
                            case "AGENT":
                            case "LEADR":
                                showHomeAgent();
                                break;
                            case "ADMIN":
                            case "SUPER":
                                showHomeAdmin();
                                break;
                            case "CUSTM":
                                showHomeCustomer();
                                break;
                            default:
                                sharedFactory.showMsg("Login", "Not support this Group->" + usrGroup);
                                break;
                        };
                    })
                    .error(function(data, status, headers, config, statusText) {
                        $ionicLoading.hide();
                        sharedFactory.showMsg(msgTitle, "error status=" + status + "<br />" +
                            "message=" + data + "<br />" +
                            "statusText=" + statusText);
                    });
            };
        }
    ])
    //
    .controller('devinfoController', [
        '$scope', 'sharedFactory',
        function($scope, sharedFactory) {
            // declaration
            $scope.appInfos = [];
            $scope.apiInfos = [];
            $scope.usrInfos = [];
            $scope.devInfos = [];
            $scope.browserInfos = [];
            // do initialize
            init();
            // private function
            function init() {
                $scope.appInfos = sharedFactory.getDevInfo_AppInfos();
                $scope.apiInfos = sharedFactory.getDevInfo_ApiInfos();
                $scope.usrInfos = sharedFactory.getDevInfo_UsrInfos();
                $scope.devInfos = sharedFactory.getDevInfo_DevInfos();
                $scope.browserInfos = sharedFactory.getDevInfo_BrowserInfos();
            };
        }
    ])
    //
    .controller('sidemenuController', [
        '$scope', '$state', 'sharedFactory', 'sessionFactory', '$timeout', '$ionicHistory', 'appGlobals',
        function($scope, $state, sharedFactory, sessionFactory, $timeout, $ionicHistory, appGlobals) {
            // declaration
            $scope.sideMenus = [];
            $scope.headerInfoL = '';
            $scope.headerInfoR = '';
            // initialize
            init();
            // private function
            function init() {
                $scope.headerInfoL = appGlobals.headerInfoL;
                $scope.headerInfoR = appGlobals.headerInfoR;
                $scope.sideMenus = sharedFactory.getSideMenus();
            };
            //
            $scope.logout = function() {
                // clear login info
                sessionFactory.ClearLoginToken();
                // clear cache
                $timeout(function() {
                        $ionicHistory.clearCache();
                        $ionicHistory.clearHistory();
                    }, 1500);
                //$ionicHistory.nextViewOptins({disableBack: true});
                $state.go("login");
                //$location.url('/', true);
            };
        }
    ]);
//