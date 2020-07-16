// angular.module('ifameApp').controller Controllers
// polpendController : policyPending
//
// created : 2/5/2015
// author  : NJ
//
/// <reference path="../lib/ionic/js/ionic.bundle.js" />
//
//var angular.module('ifameApp').controller = angular.module('angular.module('ifameApp').controller');

ifameApp.controller('teamController', [
        '$scope', 'sharedFactory', 'teamFactory', 'appGlobals', '$q', '$state',
        function($scope, sharedFactory, teamFactory, appGlobals, $q, $state) {
            var msgTitle = "Team";
            // declaration
            $scope.agCode = "";
            $scope.agGroup = "";
            $scope.teams = {};
            $scope.agtinfo1 = {};
            $scope.agtinfo2 = {};
            $scope.agtinfo3 = [];
            //
            init();
            //
            function init() {
                $scope.agCode = appGlobals.usrLogin.usrId;
                $scope.agGroup = appGlobals.usrLogin.usrGroup;
                //    
                loadData($scope.agCode, $scope.agGroup)
                    .then(function(data) {
                        $scope.teams = data.usrupl;
                        $scope.agtinfo1 = data.usrinfo1;
                        $scope.agtinfo2 = data.usrinfo2;
                        $scope.agtinfo3 = data.usrinfo3;
                    }, function(err) {
                        sharedFactory.showMsg(msgTitle, "Error Loading Data");
                    });
            };
            //
            function loadData(agCode, agGroup) {
                var promise1 = teamFactory.getTeamUpline(agCode);
                var promise2 = teamFactory.getUserAgent(agCode, agGroup);
                var promise3 = teamFactory.getAgentInfo(agCode);
                var promise4 = teamFactory.getAgentTrainings(agCode);
                //
                return $q.all([promise1, promise2, promise3, promise4]).then(function(results) {
                    return {
                        usrupl: results[0].data,
                        usrinfo1: results[1].data,
                        usrinfo2: results[2].data,
                        usrinfo3: results[3].data
                    };
                });

            };
        }
    ])
    .controller('teamunderController', [
        '$scope', 'appGlobals', 'sharedFactory', 'teamFactory', '$state', '$timeout', '$stateParams',
        function($scope, appGlobals, sharedFactory, teamFactory, $state, $timeout, $stateParams) {
            var msgTitle = "TeamUnder";
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
                promise.success(function(data, status, headers, config, statusText) {
                        if (angular.isUndefined(data) || data === null) {
                            //$scope.policies = [];
                            sharedFactory.showMsg(msgTitle, "No found Agent Detail!");
                        } else {
                            //
                            $scope.agGroup = (data.AGTLNKRK == "-"? "AGENT":"LEADR");
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
                    .error(function(data, status, headers, config, statusText) {
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
                promise.success(function(data, status, headers, config, statusText) {
                        //alert('OK' + JSON.stringify(data));
                        if (angular.isUndefined(data) || data === null) {
                            $scope.agents = [];
                            sharedFactory.showMsg(msgTitle, "No Agents Data!");
                        } else {
                            $scope.agents = data;
                        }
                    })
                    .error(function(data, status, headers, config, statusText) {
                        sharedFactory.showMsg(msgTitle, "error status=" + status + "<br />" +
                            "message=" + data + "<br />" +
                            "statusText=" + statusText);
                    });
            };
            $scope.loadMore = function() {
                if (!$scope.agents) {
                    $scope.$broadcast('scroll.infiniteScrollComplete');
                    return;
                }
                if ($scope.listlength < $scope.agents.length)
                    $scope.listlength += 10;
                $scope.$broadcast('scroll.infiniteScrollComplete');
            };
            //
            $scope.$on('$stateChangeSuccess', function() {
                $scope.loadMore();
            });
            //
            $scope.changeLevel = function(no, obj) {
                //$scope.search = {};
                $scope.curlevel = no;
                showLevel(no, obj.code, obj.name, obj.status, obj.rank, obj.lnkrk);
            };
            //
            $scope.changeAgent = function(ag) {
                if ($scope.curlevel < 5) {
                    //$scope.search = {};
                    var isAgRank = (ag.AGTLNKCD == '-' ? true : false);
                    var isSelf = (ag.SERVAGTCD == $scope.curagent ? true : false);
                    if (isAgRank || isSelf) {
                        var params = {
                            agCode: ag.SERVAGTCD,
                            agLnkrk: ag.AGTLNKRK
                        };
                        $state.go("menu.teamagent", params);
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
    .controller('teamagentController', [
        '$scope', 'sharedFactory', 'teamFactory', 'appGlobals', '$q', '$stateParams', '$state',
        function($scope, sharedFactory, teamFactory, appGlobals, $q, $stateParams, $state) {
            var msgTitle = "Team";
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
                    .then(function(data) {
                        //$scope.teams = data.usrupl;
                        //$scope.agtinfo1 = data.usrinfo1;
                        $scope.agtinfo2 = data.usrinfo2;
                        //$scope.agtinfo3 = data.usrinfo3;
                    }, function(err) {
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
                return $q.all([promise3]).then(function(results) {
                    return {
                        //usrupl: results[0].data,
                        //usrinfo1: results[0].data,
                        usrinfo2: results[0].data,
                        //usrinfo3: results[3].data
                    };
                });
            };
            //
            $scope.showPolPending = function(agCode, agGroup) {
                var params = {
                    agCode: agCode,
                    agGroup: agGroup
                };
                $state.go("menu.teamagpolpend", params);
            };
            $scope.showPolInforce = function(agCode, agGroup) {
                var params = {
                    agCode: agCode,
                    agGroup: agGroup
                };
                $state.go("menu.teamagpolinf", params);
            };

        }
    ])
    .controller('teamagpolpendController', [
        '$scope', 'sharedFactory', 'policyFactory', 'appConstants', 'appGlobals', '$stateParams',
        function($scope, sharedFactory, policyFactory, appConstants, appGlobals, $stateParams) {
            var msgTitle = "agpolpend";
            //alert('msgtitle='+msgTitle);
            // declaration
            $scope.srcId = "";
            $scope.agCode = "";
            $scope.agGroup = "";
            $scope.policies = [];
            // initialize 
            init();
            //
            function init() {
                $scope.srcId = msgTitle;
                $scope.agCode = $stateParams.agCode;
                $scope.agGroup = $stateParams.agGroup;
                //alert('src=' + $scope.srcId);
                var promise = policyFactory.getPolPending($scope.agCode, $scope.agGroup);
                promise.success(function(data, status, headers, config, statusText) {
                        //alert('OK' + JSON.stringify(data));
                        if (angular.isUndefined(data) || data === null) {
                            $scope.policies = [];
                            sharedFactory.showMsg(msgTitle, "No Pending Policies!");
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
        }
    ])
    .controller('teamagpolinfController', [
        '$scope', 'sharedFactory', 'policyFactory', 'appConstants', 'appGlobals', '$stateParams',
        function($scope, sharedFactory, policyFactory, appConstants, appGlobals, $stateParams) {
            var msgTitle = "agpolinf";
            //alert('msgtitle='+msgTitle);
            // declaration
            $scope.srcId = "";
            $scope.agCode = "";
            $scope.agGroup = "";
            $scope.policies = [];
            $scope.listlength = 0;
            //
            init();
            //
            function init() {
                $scope.srcId = msgTitle;
                $scope.agCode = $stateParams.agCode;
                $scope.agGroup = $stateParams.agGroup;
                $scope.listlength = 20;
                // method#1 - read from server
                var promise = policyFactory.getPolAll($scope.agCode, $scope.agGroup);
                promise.success(function(data, status, headers, config, statusText) {
                        //alert('OK' + JSON.stringify(data));
                        if (angular.isUndefined(data) || data === null) {
                            $scope.policies = [];
                            sharedFactory.showMsg(msgTitle, "Not found Policies!");
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
            //
            $scope.loadMore = function() {
                if (!$scope.policies) {
                    $scope.$broadcast('scroll.infiniteScrollComplete');
                    return;
                }
                if ($scope.listlength < $scope.policies.length)
                    $scope.listlength += 10;
                $scope.$broadcast('scroll.infiniteScrollComplete');
            };
            //
            $scope.$on('$stateChangeSuccess', function() {
                $scope.loadMore();
            });
        }
    ])
    .controller('teamallController', [
        '$scope', 'appGlobals', 'sharedFactory', 'teamFactory', '$state',
        function($scope, appGlobals, sharedFactory, teamFactory, $state) {
            var msgTitle = "TeamUnder";
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
                var promise = teamFactory.getAgentActiveOrHold($scope.usrId, $scope.usrGroup);
                promise.success(function(data, status, headers, config, statusText) {
                        //alert('OK' + JSON.stringify(data));
                        if (angular.isUndefined(data) || data === null) {
                            $scope.agents = [];
                            sharedFactory.showMsg(msgTitle, "No Agents Data!");
                        } else {
                            $scope.agents = data;
                        }
                    })
                    .error(function(data, status, headers, config, statusText) {
                        sharedFactory.showMsg(msgTitle, "error status=" + status + "<br />" +
                            "message=" + data + "<br />" +
                            "statusText=" + statusText);
                    });

            };
            $scope.loadMore = function() {
                if (!$scope.agents) {
                    $scope.$broadcast('scroll.infiniteScrollComplete');
                    return;
                }
                if ($scope.listlength < $scope.agents.length)
                    $scope.listlength += 10;
                $scope.$broadcast('scroll.infiniteScrollComplete');
            };
            //
            $scope.$on('$stateChangeSuccess', function() {
                $scope.loadMore();
            });
            //
            $scope.showAgentUnder = function(agCode) {
                var data = {
                    agCode: agCode
                };
                $state.go("menu.teamunder", data);
            };
        }
    ]);

//
//
//
//
//
//