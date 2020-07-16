    
ifameApp.controller('st5onhandController', [
  '$scope', '$ionicLoading', '$stateParams', 'sharedFactory', '$ionicScrollDelegate', 'appGlobals', 'st5Factory', 'appConstants',
 function ($scope, $ionicLoading, $stateParams, sharedFactory, $ionicScrollDelegate, appGlobals, st5Factory, appConstants) {
     var msgTitle = "Temp Receipt";
     // declaration
     $scope.agCode = "";
     $scope.agGroup = "";
     $scope.trSts = "";
     $scope.st5Actives = [];
     $scope.listlength = 0;
     //
     init();
     //
     function init() {
         if (appGlobals.usrLogin.usrGroup == 'ADMIN' || appGlobals.usrLogin.usrGroup == 'SUPER') {
             $scope.agCode = $stateParams.agCode;
             $scope.agGroup = $stateParams.agGroup;
         } else {
             $scope.agCode = appGlobals.usrLogin.usrId;
             $scope.agGroup = appGlobals.usrLogin.usrGroup;
         }
        // $scope.agCode = appGlobals.usrLogin.usrId;
        // $scope.agGroup = appGlobals.usrLogin.usrGroup,
         $scope.trSts = "A";
         $scope.listlength = 20;

         $ionicLoading.show();
         var promise = st5Factory.getst5Actives($scope.agCode, $scope.agGroup, $scope.trSts);
         promise.success(function (data, status, headers, config, statusText) {
             //alert('OK' + JSON.stringify(data));
             if (angular.isUndefined(data) || data === null) {
                 $scope.st5Actives = [];
                 $ionicLoading.hide();
                 sharedFactory.showMsg(msgTitle, "No Temp Receipt Status Actives");
             } else {
                 $scope.st5Actives = data;
                 $ionicLoading.hide();
             }
         })
             .error(function (data, status, headers, config, statusText) {
                 sharedFactory.showMsg(msgTitle, "error status=" + status + "<br />" +
                     "message=" + data + "<br />" +
                     "statusText=" + statusText);
                 $ionicLoading.hide();
             });
     };
     //
     $scope.loadMore = function () {
         if (!$scope.st5Actives) {
             $scope.$broadcast('scroll.infiniteScrollComplete');
             return;
         }
         if ($scope.listlength < $scope.st5Actives.length)
             $scope.listlength += 10;
         $scope.$broadcast('scroll.infiniteScrollComplete');
     };
     //
     $scope.$on('$stateChangeSuccess', function () {
         $scope.loadMore();
     });
 }
])

    .controller('st5usedController', [
  '$scope', '$ionicLoading', '$stateParams', 'sharedFactory', 'appGlobals', 'st5Factory', 'appConstants',
 function ($scope, $ionicLoading, $stateParams, sharedFactory, appGlobals, st5Factory, appConstants) {
     var msgTitle = "Temp Receipt";
      
     // declaration
     $scope.agCode = "";
     $scope.agGroup = "";
     $scope.trSts = "";
     $scope.st5Useds = [];
     $scope.listlength = 0;
     //
     init();
     //
     function init() {
         if (appGlobals.usrLogin.usrGroup  == 'ADMIN' || appGlobals.usrLogin.usrGroup == 'SUPER' ) {
             $scope.agCode = $stateParams.agCode;
             $scope.agGroup = $stateParams.agGroup;
         } else {
             $scope.agCode = appGlobals.usrLogin.usrId;
             $scope.agGroup = appGlobals.usrLogin.usrGroup;
         }

        // $scope.agCode = appGlobals.usrLogin.usrId;
        // $scope.agGroup = appGlobals.usrLogin.usrGroup;
         $scope.trSts = "U";
         $scope.listlength = 20;
         $ionicLoading.show();
         var promise = st5Factory.getst5Used($scope.agCode, $scope.agGroup, $scope.trSts);
         promise.success(function (data, status, headers, config, statusText) {
             //alert('OK' + JSON.stringify(data));
             if (angular.isUndefined(data) || data === null) {
                 $scope.st5Useds = [];
                 $ionicLoading.hide();
                 sharedFactory.showMsg(msgTitle, "No Temp Receipt Status Used");
             } else {
                 $scope.st5Useds = data;
                 $ionicLoading.hide();
             }
         })
             .error(function (data, status, headers, config, statusText) {
                 sharedFactory.showMsg(msgTitle, "error status=" + status + "<br />" +
                     "message=" + data + "<br />" +
                     "statusText=" + statusText);
                 $ionicLoading.hide();
             });
               
        
     };
     //
     $scope.loadMore = function () {
         if (!$scope.st5Useds) {
             $scope.$broadcast('scroll.infiniteScrollComplete');
             return;
         }
         if ($scope.listlength < $scope.st5Useds.length)
             $scope.listlength += 10;
         $scope.$broadcast('scroll.infiniteScrollComplete');
     };
     //
     $scope.$on('$stateChangeSuccess', function () {
         $scope.loadMore();
     });
 }
    ])

     .controller('st5pendingController', [
  '$scope', '$ionicLoading', '$stateParams', 'sharedFactory', 'appGlobals', 'st5Factory', 'appConstants',
 function ($scope, $ionicLoading, $stateParams, sharedFactory, appGlobals, st5Factory, appConstants) {
     var msgTitle = "Temp Receipt Verify";

     // declaration
     $scope.agCode = "";
     $scope.agGroup = "";
     $scope.st5Pendings = [];
     $scope.listlength = 0;
     //
     init();
     //
     function init() {
         if (appGlobals.usrLogin.usrGroup == 'ADMIN' || appGlobals.usrLogin.usrGroup == 'SUPER') {
             $scope.agCode = $stateParams.agCode;
             $scope.agGroup = $stateParams.agGroup;
         } else {
             $scope.agCode = appGlobals.usrLogin.usrId;
             $scope.agGroup = appGlobals.usrLogin.usrGroup;
         }
         // $scope.agCode = appGlobals.usrLogin.usrId;
         // $scope.agGroup = appGlobals.usrLogin.usrGroup,
         $scope.trSts = "A";
         $scope.listlength = 20;
         $ionicLoading.show();
         var promise = st5Factory.getst5Pending($scope.agCode, $scope.agGroup, $scope.trSts);
         promise.success(function (data, status, headers, config, statusText) {
             //alert('OK' + JSON.stringify(data));
             if (angular.isUndefined(data) || data === null) {
                 $scope.st5Pendings = [];
                 $ionicLoading.hide();
                 sharedFactory.showMsg(msgTitle, "No Temp Receipt Status Pending");
             } else {
                 $scope.st5Pendings = data;
                 $ionicLoading.hide();
                 //alert('OK' + JSON.stringify($scope.st5Pendings));
             }
         })
             .error(function (data, status, headers, config, statusText) {
                 sharedFactory.showMsg(msgTitle, "error status=" + status + "<br />" +
                     "message=" + data + "<br />" +
                     "statusText=" + statusText);
                 $ionicLoading.hide();
             });


     };
     //
     $scope.loadMore = function () {
         if (!$scope.st5Pendings) {
             $scope.$broadcast('scroll.infiniteScrollComplete');
             return;
         }
         if ($scope.listlength < $scope.st5Pendings.length)
             $scope.listlength += 10;
         $scope.$broadcast('scroll.infiniteScrollComplete');
     };
     //
     $scope.$on('$stateChangeSuccess', function () {
         $scope.loadMore();
     });
 }
     ])

.controller('st5detailController', [
        '$scope', '$ionicLoading', '$stateParams', 'st5Factory', 'sharedFactory', 'appGlobals', 'appConstants',
        function ($scope, $ionicLoading, $stateParams, st5Factory, sharedFactory, appGlobals, appConstants) {
            msgTitle = "Detail Msg.";
            //
            $scope.TRNO = $stateParams.trno;
            $scope.trSts = $stateParams.sts;
            //detail trid
            //$scope.st5detail = st5Factory.getst5Detail();

            //
            $scope.dspItems = {};
            $scope.st5detail = {};
            $scope.invdetail = {};
            $scope.verdetail = {};
            $scope.data = {};

            // initialize 
            if ( $scope.trSts == 'A' || $scope.trSts == 'U'  ){
                showST5Info();
                } else {
                showVERInfo();
            }
            

            $scope.readST5 = false;
            $scope.readINV = false;

            function showST5Info() {
                    $ionicLoading.show();
                    var promise = st5Factory.getst5Detail($scope.TRNO);
                    promise.success(function (data, status, headers, config, statusText) {
                        // alert('OK' + JSON.stringify(data));
                        if (angular.isUndefined(data) || data === null) {
                            $ionicLoading.hide();
                            sharedFactory.showMsg(msgTitle, "Temp Receipt not found!");
                        } else {
                            $scope.st5detail = st5Factory.setST5Info(data);
                            $ionicLoading.hide();
                        };
                        $scope.dspItems = $scope.st5detail;
                    })
                        .error(function (data, status, headers, config, statusText) {
                            sharedFactory.showMsg(msgTitle, "error status=" + status + "<br />" +
                                "message=" + data + "<br />" +
                                "statusText=" + statusText);
                            $ionicLoading.hide();
                            $scope.dspItems = {};
                        });
            };
            //
            function showINVInfo() {
                if ($scope.trSts == 'A' || $scope.trSts == 'V') {
                    sharedFactory.showMsg(msgTitle, "Invoice not found!");
                } else {
                    $ionicLoading.show();
                    var promise = st5Factory.getinvDetail($scope.TRNO);
                        promise.success(function (data, status, headers, config, statusText) {
                        //alert('OK' + JSON.stringify(data));
                            if (angular.isUndefined(data) || data === null) {
                                $ionicLoading.hide();
                                sharedFactory.showMsg(msgTitle, "Invoice not found!");
                        } else {
                                $scope.invdetail = st5Factory.setINVInfo(data);
                                $ionicLoading.hide();
                        };
                        $scope.dspItems = $scope.invdetail;
                    })
                        .error(function (data, status, headers, config, statusText) {
                            sharedFactory.showMsg(msgTitle, "error status=" + status + "<br />" +
                                "message=" + data + "<br />" +
                                "statusText=" + statusText);
                            $ionicLoading.hide();
                            $scope.dspItems = {};
                        });
                    }

            };
            //
            function showVERInfo() {
                if ($scope.trSts == 'U') {
                    sharedFactory.showMsg(msgTitle, "TR Verify Complete!");
                } else {
                    $ionicLoading.show();
                    var promise = st5Factory.getverDetail($scope.TRNO);
                    promise.success(function (data, status, headers, config, statusText) {
                        //alert('OK' + JSON.stringify(data));
                        if (angular.isUndefined(data) || data === null) {
                            $ionicLoading.hide();
                            sharedFactory.showMsg(msgTitle, "Verify not found!");
                        } else {
                            $scope.verdetail = st5Factory.setVERInfo(data);
                            $ionicLoading.hide();
                        };
                        $scope.dspItems = $scope.verdetail;
                    })
                    .error(function (data, status, headers, config, statusText) {
                        sharedFactory.showMsg(msgTitle, "error status=" + status + "<br />" +
                            "message=" + data + "<br />" +
                            "statusText=" + statusText);
                        $ionicLoading.hide();
                        $scope.dspItems = {};
                    });
                }
            };
            //
            $scope.ST5Info = function () {
                showST5Info();
            };
            //
            $scope.INVInfo = function () {
                showINVInfo();
            };

            $scope.VERInfo = function () {
                showVERInfo();
            };
            //

        }])

 
.controller('st5agqreryController', [
        '$scope', '$ionicLoading', 'appGlobals', 'sharedFactory', 'teamFactory', '$state',
        function ($scope, $ionicLoading, appGlobals, sharedFactory, teamFactory, $state) {
            var msgTitle = "Agent Query";
            //
            $scope.searchAgent = "";
            $scope.usrId = "";
            $scope.usrGroup = "";
            //
            $scope.listlength = 0;
            //
            init();
            //
            function init() {
                $scope.listlength = 20;
                //
                $scope.searchAgent = "A9";
                //
                $scope.usrId = appGlobals.usrLogin.usrId;
                $scope.usrGroup = appGlobals.usrLogin.usrGroup;
                // load agents active or hold using admin id/group
                $ionicLoading.show();
                var promise = teamFactory.getAgentActiveOrHold($scope.usrId, $scope.usrGroup);
                promise.success(function (data, status, headers, config, statusText) {
                    //alert('OK' + JSON.stringify(data));
                    if (angular.isUndefined(data) || data === null) {
                        $scope.agents = [];
                        $ionicLoading.hide();
                        sharedFactory.showMsg(msgTitle, "No Agents Data!");
                    } else {
                        $scope.agents = data;
                        $ionicLoading.hide();
                    }
                })
                    .error(function (data, status, headers, config, statusText) {
                        sharedFactory.showMsg(msgTitle, "error status=" + status + "<br />" +
                            "message=" + data + "<br />" +
                            "statusText=" + statusText);
                        $ionicLoading.hide();
                    });

            };
            $scope.loadMore = function () {
                if (!$scope.agents) {
                    $scope.$broadcast('scroll.infiniteScrollComplete');
                    return;
                }
                if ($scope.listlength < $scope.agents.length)
                    $scope.listlength += 10;
                $scope.$broadcast('scroll.infiniteScrollComplete');
            };
            //
            $scope.$on('$stateChangeSuccess', function () {
                $scope.loadMore();
            });
            //
            $scope.showAgentUnder = function (agCode) {
                var data = {
                    agCode: agCode
                };
                $state.go("menu.st5agqueryunder", data);
            };
        }
])

.controller('st5agqueryunderController', [
        '$scope', 'appGlobals', 'sharedFactory', 'teamFactory', '$state', '$timeout', '$stateParams',
        function ($scope, appGlobals, sharedFactory, teamFactory, $state, $timeout, $stateParams) {
            var msgTitle = "Agent Query Under";
            //
            $scope.agCode = "";
            //
            $scope.agGroup = "";
            $scope.agtinfo = {};
            //
            $scope.agents = [];
            $scope.level1 = {};
            $scope.level2 = {};
            $scope.level3 = {};
            $scope.level4 = {};
            $scope.level5 = {};
            $scope.curlevel = 0;
            $scope.curagent = "";
            //
            $scope.listlength = 0;
            //
            init();
            //
            function init() {
                $scope.listlength = 20;
                $scope.curlevel = 1;
                // get agCode from param
                $scope.agCode = $stateParams.agCode;
                // get agentdetail from agCode
                // ** wait for get agent detail **
                //var promise = teamFactory.getUserAgent($scope.agCode, "");
                var promise = teamFactory.getAgentDetail($scope.agCode);
                promise.success(function (data, status, headers, config, statusText) {
                    if (angular.isUndefined(data) || data === null) {
                        //$scope.policies = [];
                        sharedFactory.showMsg(msgTitle, "No found Agent Detail!");
                    } else {
                        //
                        $scope.agGroup = (data.AGTLNKRK == "-" ? "AGENT" : "LEADR");
                        $scope.agtinfo = data;
                        //
                        showLevel($scope.curlevel,
                            $scope.agCode,
                            $scope.agtinfo.SERVAGTNM + ' ' + $scope.agtinfo.SERVAGTSN,
                            $scope.agtinfo.AGSTTUS,
                            $scope.agtinfo.AGTRANK,
                            $scope.agtinfo.AGTLNKRK
                        );
                    };
                })
                    .error(function (data, status, headers, config, statusText) {
                        sharedFactory.showMsg(msgTitle, "error status=" + status + "<br />" +
                            "message=" + data + "<br />" +
                            "statusText=" + statusText);
                    });
                //
            };
            //
            function setLevel(agCode, agName, agStatus, agRank, agLnkrk) {
                return {
                    code: agCode,
                    name: agName,
                    status: agStatus,
                    rank: agRank,
                    lnkrk: agLnkrk,
                    show: true
                };
            };

            function resetLevel() {
                return {
                    code: "",
                    name: "",
                    status: "",
                    rank: "",
                    lnkrk: "",
                    show: false
                };
            };
            //
            function showLevel(level, agCode, agName, agStatus, agRank, agLnkrk) {
                switch (level) {
                    case 1:
                        $scope.level1 = setLevel(agCode, agName, agStatus, agRank, agLnkrk);
                        $scope.level2 = resetLevel();
                        $scope.level3 = resetLevel();
                        $scope.level4 = resetLevel();
                        $scope.level5 = resetLevel();
                        break;
                    case 2:
                        $scope.level2 = setLevel(agCode, agName, agStatus, agRank, agLnkrk);
                        $scope.level3 = resetLevel();
                        $scope.level4 = resetLevel();
                        $scope.level5 = resetLevel();
                        break;
                    case 3:
                        $scope.level3 = setLevel(agCode, agName, agStatus, agRank, agLnkrk);
                        $scope.level4 = resetLevel();
                        $scope.level5 = resetLevel();
                        break;
                    case 4:
                        $scope.level4 = setLevel(agCode, agName, agStatus, agRank, agLnkrk);
                        $scope.level5 = resetLevel();
                        break;
                    case 5:
                        $scope.level5 = setLevel(agCode, agName, agStatus, agRank, agLnkrk);
                        break;
                };
                // prepare to show
                var agGroup = (agLnkrk == "-" ? "AGENT" : "LEADR");
                $scope.curagent = agCode;
                //
                var promise = teamFactory.getAgentActiveOrHold(agCode, agGroup);
                promise.success(function (data, status, headers, config, statusText) {
                    //alert('OK' + JSON.stringify(data));
                    if (angular.isUndefined(data) || data === null) {
                        $scope.agents = [];
                        sharedFactory.showMsg(msgTitle, "No Agents Data!");
                    } else {
                        $scope.agents = data;
                    }
                })
                    .error(function (data, status, headers, config, statusText) {
                        sharedFactory.showMsg(msgTitle, "error status=" + status + "<br />" +
                            "message=" + data + "<br />" +
                            "statusText=" + statusText);
                    });
            };
            $scope.loadMore = function () {
                if (!$scope.agents) {
                    $scope.$broadcast('scroll.infiniteScrollComplete');
                    return;
                }
                if ($scope.listlength < $scope.agents.length)
                    $scope.listlength += 10;
                $scope.$broadcast('scroll.infiniteScrollComplete');
            };
            //
            $scope.$on('$stateChangeSuccess', function () {
                $scope.loadMore();
            });
            //
            $scope.changeLevel = function (no, obj) {
                //$scope.search = {};
                $scope.curlevel = no;
                showLevel(no, obj.code, obj.name, obj.status, obj.rank, obj.lnkrk);
            };
            //
            $scope.changeAgent = function (ag) {
                if ($scope.curlevel < 5) {
                    //$scope.search = {};
                    var isAgRank = (ag.AGTLNKCD == '-' ? true : false);
                    var isSelf = (ag.SERVAGTCD == $scope.curagent ? true : false);
                    if (isAgRank || isSelf) {
                        var params = {
                            agCode: ag.SERVAGTCD,
                            agLnkrk: ag.AGTLNKRK
                        };
                        $state.go("menu.st5agdetail", params);
                    } else {
                        $scope.curlevel += 1;
                        showLevel(
                            $scope.curlevel,
                            ag.SERVAGTCD,
                            ag.SERVAGTNM + ' ' + ag.SERVAGTSN,
                            ag.AGSTTUS,
                            ag.AGTRANK,
                            ag.AGTLNKRK
                        );
                    };
                } else {
                    sharedFactory.showMsg("Lowest Level already..!");
                };
            };
            //
        }
])

.controller('st5agdetailController', [
        '$scope', 'sharedFactory', 'teamFactory', 'appGlobals', '$q', '$stateParams', '$state',
        function ($scope, sharedFactory, teamFactory, appGlobals, $q, $stateParams, $state) {
            var msgTitle = "Temp Receipt";
            // declaration
            $scope.agCode = "";
            $scope.agLnkrk = "";
            $scope.agGroup = "";
            $scope.teams = {};
            $scope.agtinfo1 = {};
            $scope.agtinfo2 = {};
            $scope.agtinfo3 = [];
            //
            init();
            //
            function init() {
                $scope.agCode = $stateParams.agCode;
                $scope.agLnkrk = $stateParams.agLnkrk;
                $scope.agGroup = ($scope.agLnkrk == "-" ? "AGENT" : "LEADR");
                //    
                loadData($scope.agCode, $scope.agGroup)
                    .then(function (data) {
                        //$scope.teams = data.usrupl;
                        //$scope.agtinfo1 = data.usrinfo1;
                        $scope.agtinfo2 = data.usrinfo2;
                        //$scope.agtinfo3 = data.usrinfo3;
                    }, function (err) {
                        sharedFactory.showMsg(msgTitle, "Error Loading Data");
                    });
            };
            //
            function loadData(agCode, agGroup) {
                //var promise1 = teamFactory.getTeamUpline(agCode);
                //var promise2 = teamFactory.getUserAgent(agCode, agGroup);
                var promise3 = teamFactory.getAgentInfo(agCode);
                //var promise4 = teamFactory.getAgentTrainings(agCode);
                //
                return $q.all([promise3]).then(function (results) {
                    return {
                        //usrupl: results[0].data,
                        //usrinfo1: results[0].data,
                        usrinfo2: results[0].data,
                        //usrinfo3: results[3].data
                    };
                });
            };
            //
            $scope.showOnHand = function (agCode, agGroup) {
                var params = {
                    agCode: agCode,
                    agGroup: agGroup
                };
                if (agGroup == 'LEADR') {
                    $state.go("menu.st5onhand", params);
                } else {
                    sharedFactory.showMsg(msgTitle, "Not Group Leader");
                }
            };
            $scope.showUsed = function (agCode, agGroup) {
                var params = {
                    agCode: agCode,
                    agGroup: agGroup
                };
                if (agGroup == 'LEADR') {
                    $state.go("menu.st5used", params);
                } else {
                    sharedFactory.showMsg(msgTitle, "Not Group Leader");
                }
            };
            $scope.showPendingCheck = function (agCode, agGroup) {
                var params = {
                    agCode: agCode,
                    agGroup: agGroup
                };
                if (agGroup == 'LEADR') {
                    $state.go("menu.st5pending", params);
                } else {
                    sharedFactory.showMsg(msgTitle, "Not Group Leader");
                }
            };

        }
]);
 

