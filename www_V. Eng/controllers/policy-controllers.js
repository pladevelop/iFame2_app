// angular.module('ifameApp').controller Controllers
// polpendController : policyPending
//
// created : 2/5/2015
// author  : NJ
//
/// <reference path="../lib/ionic/js/ionic.bundle.js" />
//
//var angular.module('ifameApp').controller = angular.module('angular.module('ifameApp').controller');

ifameApp.controller('polpendController', [
        '$scope', 'sharedFactory', 'policyFactory', 'appConstants', 'appGlobals',
        function($scope, sharedFactory, policyFactory, appConstants, appGlobals) {
            var msgTitle = appConstants.SRC_POLPEND;
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
                $scope.srcId = appConstants.SRC_POLPEND;
                //$stateParams.agCode;
                $scope.agGroup = appGlobals.usrLogin.usrGroup; //$stateParams.agGroup;
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
    .controller('polinforceController', [
        '$scope', 'policyFactory', '$ionicScrollDelegate', '$ionicHistory', 'appConstants', 'appGlobals', '$stateParams',
        function($scope, policyFactory, $ionicScrollDelegate, $ionicHistory, appConstants, appGlobals, $stateParams) {
            // $scope.$on('$ionicView.afterLeave', function() {
            //     $ionicHistory.clearCache();
            // });
            // $scope.$on('$ionicView.beforeEnter', function() {
            //     //$ionicHistory.clearCache();
            // });
            // $scope.$on('$ionicView.beforeLeave', function() {
            //     $ionicHistory.clearCache();
            // });
            // $scope.$on('$ionicView.afterEnter', function() {
            //     $ionicHistory.clearCache();
            // });
            // $scope.pets = PetService.all();

            // $scope.scrollBottom = function() {
            //     $ionicScrollDelegate.scrollBottom(true);
            // };
            //------sample using friends object------
            // $scope.friends = Friends.all();
            // $scope.listlength = 20;
            // $scope.loadMore = function() {
            //     if (!$scope.friends) {
            //         $scope.$broadcast('scroll.infiniteScrollComplete');
            //         return;
            //     }
            //     if ($scope.listlength < $scope.friends.length)
            //         $scope.listlength += 10;
            //     $scope.$broadcast('scroll.infiniteScrollComplete');
            // };
            //------end sample using friends----------------
            var msgTitle = "PolInforce";
            //
            $scope.srcId = "";
            $scope.userId = "";
            $scope.userGroup = "";
            $scope.polId = "";
            $scope.insuredNm = "";
            $scope.insuredSn = "";
            //
            $scope.policies = [];
            $scope.listlength = 0;
            //
            init();
            //
            function init() {
                // get state param
                $scope.userId = appGlobals.usrLogin.usrId;
                $scope.userGroup = appGlobals.usrLogin.usrGroup;
                $scope.polId = $stateParams.polId;
                $scope.insuredNm = $stateParams.insuredNm;
                $scope.insuredSn = $stateParams.insuredSn;
                //
                $scope.srcId = appConstants.SRC_POLINFORCE;
                $scope.listlength = 20;
                // method#1 - read from server
                var promise = policyFactory.getPolAll($scope.userId, $scope.userGroup,
                    $scope.polId, $scope.insuredNm, $scope.insuredSn);
                promise.success(function(data, status, headers, config, statusText) {
                        if (angular.isUndefined(data) || data === null) {
                            $scope.policies = [];
                            sharedFactory.showMsg(msgTitle, "No Policy Data!");
                        } else {
                            $scope.policies = data;
                        }
                    })
                    .error(function(data, status, headers, config, statusText) {
                        sharedFactory.showMsg(msgTitle, "error status=" + status + "<br />" +
                            "message=" + data + "<br />" +
                            "statusText=" + statusText);
                    });
                // method#2 -read from global variable
                //$scope.policies = appGlobals.PolPayAndTerm;
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
    //
    .controller('poloverdueController', [
        '$scope', 'policyFactory', 'appGlobals', 'sharedFactory', 'appConstants',
        function($scope, policyFactory, appGlobals, sharedFactory, appConstants) {
            var msgTitle = appGlobals.SRC_POLOVERDUE;
            // declaration
            $scope.agCode = "";
            $scope.srcId = "";
            $scope.policies = [];
            $scope.listlength = 0;
            // initialize 
            init();
            //
            function init() {
                $scope.srcId = appConstants.SRC_POLOVERDUE;
                $scope.agCode = appGlobals.usrLogin.usrId;
                $scope.listlength = 20;
                var promise = policyFactory.getPolOverdue($scope.agCode);
                promise.success(function(data, status, headers, config, statusText) {
                        //alert('OK' + JSON.stringify(data));
                        if (angular.isUndefined(data) || data === null) {
                            $scope.policies = [];
                            sharedFactory.showMsg(msgTitle, "No Overdue Policies!");
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
            $scope.$on('$stateChangeSuccess', function() {
                $scope.loadMore();
            });
        }
    ])
    //
    .controller('polnextdueController', [
        '$scope', 'policyFactory', 'appGlobals', 'sharedFactory', 'appConstants',
        function($scope, policyFactory, appGlobals, sharedFactory, appConstants) {
            var msgTitle = appGlobals.SRC_POLNEXTDUE;
            // declaration
            $scope.agCode = "";
            $scope.paidToDate = "";
            $scope.includeDownline = "";
            $scope.srcId = "";
            $scope.policies = [];
            $scope.listlength = 0;
            // initialize 
            init();
            //
            function init() {
                $scope.srcId = appConstants.SRC_POLNEXTDUE;
                $scope.agCode = appGlobals.usrLogin.usrId;
                $scope.paidToDate = "";
                $scope.includeDownline = "Y";
                //
                $scope.listlength = 20;
                //
                var promise = policyFactory.getPolNextDue($scope.agCode, $scope.paidToDate, $scope.includeDownline);
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
            $scope.$on('$stateChangeSuccess', function() {
                $scope.loadMore();
            });
        }
    ])
    //
    .controller('poldetailController', [
        '$scope', '$stateParams', 'policyFactory', 'sharedFactory', 'appGlobals', 'appConstants',
        function($scope, $stateParams, policyFactory, sharedFactory, appGlobals, appConstants) {
            var self = this;
            var msgTitle = 'poldetail';
            // declaration
            $scope.searchPolId = $stateParams.polId;
            $scope.polType = $stateParams.polType;
            $scope.srcId = $stateParams.srcId;
            $scope.isPolPend = ($scope.srcId == appConstants.SRC_POLPEND ? true : false);
            //
            $scope.policy = {};
            $scope.coverages = [];
            $scope.coverage  = {};
            $scope.payments = [];
            $scope.claims = [];
            $scope.memos = [];
            //
            $scope.readPolicy = false;
            $scope.readCoverages = false;
            $scope.readCoverage  = false;
            $scope.readPayments = false;
            $scope.readClaims = false;
            $scope.readMemos = false;
            //
            $scope.dspItems = {};
            // initialize 
            showPolicyInfo();
            //
            function showPolicyInfo() {
                if ($scope.readPolicy == false) {
                    $scope.readPolicy = true;
                    var promise = policyFactory.getPolDetails($scope.searchPolId);
                    promise.success(function(data, status, headers, config, statusText) {
                            //alert('OK' + JSON.stringify(data));
                            if (angular.isUndefined(data) || data === null) {
                                sharedFactory.showMsg(msgTitle, "Policy detail not found!");
                            } else {
                                $scope.policy = policyFactory.setPolicyInfo(data);
                            };
                            $scope.dspItems = $scope.policy;
                        })
                        .error(function(data, status, headers, config, statusText) {
                            sharedFactory.showMsg(msgTitle, "error status=" + status + "<br />" +
                                "message=" + data + "<br />" +
                                "statusText=" + statusText);
                            $scope.dspItems = {};
                        });
                } else {
                    // otherwise
                    $scope.dspItems = $scope.policy;
                };
            };

            function showCoveragesInfo() {
                if ($scope.polType == 'OB' || $scope.polType == 'IB') {
                    if ($scope.readCoverages == false) {
                        $scope.readCoverages = true;
                        var promise = policyFactory.getCvgDet($scope.searchPolId);
                        promise.success(function(data, status, headers, config, statusText) {
                            //alert('OK' + JSON.stringify(data));
                            if (angular.isUndefined(data) || data === null) {
                                sharedFactory.showMsg(msgTitle, "Coverage detail not found!");
                            } else {
                                $scope.coverages = policyFactory.setCoveragesInfo(data);
                            };
                            $scope.dspItems = $scope.coverages;
                        })
                        .error(function(data, status, headers, config, statusText) {
                            sharedFactory.showMsg(msgTitle, "error status=" + status + "<br />" +
                                "message=" + data + "<br />" +
                                "statusText=" + statusText);
                            $scope.dspItems = {};
                        });
                    } else {
                        // otherwise
                        $scope.dspItems = $scope.coverages;
                    };
                } else {//PA get detail for PA
                    if ($scope.readCoverage == false) {
                        $scope.readCoverage = true;
                        var promise = policyFactory.getCvgDetPA($scope.searchPolId);
                        promise.success(function (data, status, headers, config, statusText) {
                            //alert('OK' + JSON.stringify(data));
                            if (angular.isUndefined(data) || data === null) {
                                sharedFactory.showMsg(msgTitle, "Coverage detail not found!");
                            } else {
                                $scope.coverage = policyFactory.setCoverageInfo(data);
                            };
                            $scope.dspItems = $scope.coverage;
                        })
                        .error(function (data, status, headers, config, statusText) {
                            sharedFactory.showMsg(msgTitle, "error status=" + status + "<br />" +
                                "message=" + data + "<br />" +
                                "statusText=" + statusText);
                            $scope.dspItems = {};
                        });
                    } else {
                        // otherwise
                        $scope.dspItems = $scope.coverage;
                    };
                }
                
            };

            function showPaymentsInfo() {
                if ($scope.readPayments == false) {
                    $scope.readPayments = true;
                    var promise = policyFactory.getPolPayments($scope.searchPolId);
                    promise.success(function(data, status, headers, config, statusText) {
                            //alert('OK length=' + data.length);
                            if (angular.isUndefined(data) || data === null) {
                                sharedFactory.showMsg(msgTitle, "Payments detail not found!");
                            } else {
                                $scope.payments = policyFactory.setPaymentsInfo(data);
                            };
                            $scope.dspItems = $scope.payments;
                        })
                        .error(function(data, status, headers, config, statusText) {
                            sharedFactory.showMsg(msgTitle, "error status=" + status + "<br />" +
                                "message=" + data + "<br />" +
                                "statusText=" + statusText);
                            $scope.dspItems = {};
                        });
                } else {
                    // otherwise
                    $scope.dspItems = $scope.payments;
                };
            };

            function showClaimsInfo() {
                if ($scope.readClaims == false) {
                    $scope.readClaims = true;
                    var promise = policyFactory.getPolClaims($scope.searchPolId);
                    promise.success(function(data, status, headers, config, statusText) {
                            //alert('OK length=' + data.length);
                            if (angular.isUndefined(data) || data === null) {
                                sharedFactory.showMsg(msgTitle, "Claims detail not found!");
                            } else {
                                $scope.claims = policyFactory.setClaimsInfo(data);
                            };
                            $scope.dspItems = $scope.claims;
                        })
                        .error(function(data, status, headers, config, statusText) {
                            sharedFactory.showMsg(msgTitle, "error status=" + status + "<br />" +
                                "message=" + data + "<br />" +
                                "statusText=" + statusText);
                            $scope.dspItems = {};
                        });
                } else {
                    // otherwise
                    $scope.dspItems = $scope.claims;
                };
            };

            function showMemosInfo(polId) {
                if ($scope.readMemos == false) {
                    $scope.readMemos = true;
                    var agCode = appGlobals.usrLogin.usrId;
                    var promise = policyFactory.getPolMemos(agCode, polId);
                    promise.success(function(data, status, headers, config, statusText) {
                            //alert('OK length=' + data.length);
                            if (angular.isUndefined(data) || data === null) {
                                sharedFactory.showMsg(msgTitle, "Memo/CTOF detail not found!");
                            } else {
                                $scope.memos = policyFactory.setMemosInfo(data);
                            };
                            $scope.dspItems = $scope.memos;
                        })
                        .error(function(data, status, headers, config, statusText) {
                            sharedFactory.showMsg(msgTitle, "error status=" + status + "<br />" +
                                "message=" + data + "<br />" +
                                "statusText=" + statusText);
                            $scope.dspItems = {};
                        });
                } else {
                    // otherwise
                    $scope.dspItems = $scope.memos;
                };
            };
            //
            $scope.PolicyInfo = function() {
                showPolicyInfo();
            };
            $scope.CoveragesInfo = function() {
                showCoveragesInfo();
            };
            $scope.PaymentsInfo = function() {
                showPaymentsInfo();
            };
            $scope.ClaimsInfo = function() {
                showClaimsInfo();
            };
            $scope.MemosInfo = function(polId) {
                    showMemosInfo(polId);
                }
                //
        }
    ])
    .controller('polmemoController', [
        '$scope', 'policyFactory', 'appGlobals', 'sharedFactory', '$window',
        function($scope, policyFactory, appGlobals, sharedFactory, $window) {
            var msgTitle = "PolMemo"
                // declaration
            $scope.agCode = "";
            $scope.agGroup = "";
            $scope.policies = [];
            $scope.listlength = 0;
            // initialize 
            init();
            //
            function init() {
                $scope.agCode = appGlobals.usrLogin.usrId;
                $scope.agGroup = appGlobals.usrLogin.usrGroup;
                $scope.listlength = 20;
                //alert('agcode='+$scope.agCode);
                var promise = policyFactory.getAgtMemos($scope.agCode, $scope.agGroup);
                promise.success(function(data, status, headers, config, statusText) {
                        //alert('OK' + JSON.stringify(data));
                        if (angular.isUndefined(data) || data === null) {
                            $scope.policies = [];
                            sharedFactory.showMsg(msgTitle, "Not found Memo Policies!");
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
    .controller('polqueryController', [
        '$scope', 'policyFactory', 'appGlobals', 'sharedFactory', '$state',
        function($scope, policyFactory, appGlobals, sharedFactory, $state) {
            var msgTitle = "PolQuery"
                // declaration
            $scope.polId = "";
            $scope.insuredNm = "";
            $scope.insuredSn = "";
            // initialize 
            init();
            //
            function init() {
                //
            };
            //
            $scope.showPolicies = function(polId, insuredNm, insuredSn) {
                var data = {
                    polId: polId,
                    insuredNm: insuredNm,
                    insuredSn: insuredSn
                };
                $state.go("menu.policyinforce", data)
            };
        }
    ]);