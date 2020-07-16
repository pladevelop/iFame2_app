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
    '$scope', 'sharedFactory', 'appGlobals', 'downloadFactory', '$stateParams','$window','$state',
    function($scope, sharedFactory, appGlobals, downloadFactory, $stateParams, $window, $state) {
        var msgTitle = "Download-Reports";
        // declaration
        $scope.docs = [];
        $scope.agCode = "";
        $scope.agGroup = "";
        $scope.path ="";
        //
        init();
        //
        function init() {
            if (appGlobals.usrLogin.usrGroup  == 'ADMIN'  ) {
                 $scope.agCode = $stateParams.agCode;
                 $scope.agGroup = $stateParams.agGroup;
            } else {
                 $scope.agCode = appGlobals.usrLogin.usrId;
                 $scope.agGroup = appGlobals.usrLogin.usrGroup;
            }

            $scope.docs = downloadFactory.getReportsAG();
        };
        //
        $scope.openPDF = function() {
            // initialize 
            if (appGlobals.usrLogin.usrGroup  == 'ADMIN'  ) {
                 $state.go("menu.rptagquery");  
            } else {
                 var promise = downloadFactory.getAgtStatement($scope.agCode);
                promise.success(function(data, status, headers, config, statusText) {
                         //alert('OK' + JSON.stringify(data));
                        if (angular.isUndefined(data) || data === null) {
                            $scope.path = "";
                            sharedFactory.showMsg(msgTitle, "No Report!");
                        } else {
                            $scope.path = data;
                            sharedFactory.openPDF($scope.path);
                        }
                    })
                    .error(function(data, status, headers, config, statusText) {
                        sharedFactory.showMsg(msgTitle, "error status=" + status + "<br />" +
                            "message=" + data + "<br />" +
                            "statusText=" + statusText);
                    });
            }
            
            
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
            //$window.open(pdfUrl, "_system", "location=yes");
            sharedFactory.openPDF(pdfUrl);
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
            //$scope.docs = downloadFactory.getOBFormUW();

            var promise = downloadFactory.getOBFormUW();
                promise.success(function (data, status, headers, config, statusText) {
                    //alert('OK' + JSON.stringify(data));
                    if (angular.isUndefined(data) || data === null) {
                        $scope.docs  = [];
                        sharedFactory.showMsg(msgTitle, "No Data!");
                    } else {
                       $scope.docs  = data;
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
            //var downloadUrl = "http://centerapi.philliplife.com/salesrwd/download/UW/Life/";
            //alert('open pdf' + pdfUrl);
            //$window.open(pdfUrl, "_system", "location=yes");
            //sharedFactory.openPDF(downloadUrl + pdfUrl);
            sharedFactory.openPDF(pdfUrl);
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
            //$scope.docs = downloadFactory.getTKFormUW();
            var promise = downloadFactory.getTKFormUW();
                promise.success(function (data, status, headers, config, statusText) {
                    //alert('OK' + JSON.stringify(data));
                    if (angular.isUndefined(data) || data === null) {
                        $scope.docs  = [];
                        sharedFactory.showMsg(msgTitle, "No Data!");
                    } else {
                       $scope.docs  = data;
                    }
                })
                    .error(function (data, status, headers, config, statusText) {
                        sharedFactory.showMsg(msgTitle, "error status=" + status + "<br />" +
                            "message=" + data + "<br />" +
                            "statusText=" + statusText);
                    });

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
            //var downloadUrl = "http://centerapi.philliplife.com/salesrwd/download/UW/Tk/";
            //alert('open pdf' + pdfUrl);
            //$window.open(pdfUrl, "_system", "location=yes");
            //sharedFactory.openPDF(downloadUrl + pdfUrl);
            sharedFactory.openPDF(pdfUrl);
        };
    }
]) 

.controller('rptagqreryController', [
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
                $state.go("menu.rptagqueryunder", data);
            };
        }
])

.controller('rptagqueryunderController', [
        '$scope', 'appGlobals', 'sharedFactory', 'teamFactory', '$state', '$timeout', '$stateParams','downloadFactory', '$window',
        function ($scope, appGlobals, sharedFactory, teamFactory, $state, $timeout, $stateParams, downloadFactory, $window) {
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
                        //$state.go("menu.rptagdetail", params);
                        var promise = downloadFactory.getAgtStatement(ag.SERVAGTCD);
                        promise.success(function(data, status, headers, config, statusText) {
                         //alert('OK' + JSON.stringify(data));
                        if (angular.isUndefined(data) || data === null) {
                            $scope.path = "";
                            sharedFactory.showMsg(msgTitle, "No Report!");
                        } else {
                            $scope.path = data;
                            sharedFactory.openPDF($scope.path);
                        }
                    })
                    .error(function(data, status, headers, config, statusText) {
                        sharedFactory.showMsg(msgTitle, "error status=" + status + "<br />" +
                            "message=" + data + "<br />" +
                            "statusText=" + statusText);
                    });
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
]);







