// ifameApp Controllers
//
// created : 2/5/2015
// author  : NJ
//
/// <reference path="../lib/ionic/js/ionic.bundle.js" />
//
//var ifameApp = angular.module('ifameApp');

ifameApp.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider, $httpProvider, $cordovaInAppBrowserProvider) {

    //Used to handle loading controllers dynamically
    //ifameApp.controller = $controllerProvider.register;
    //ifameApp.service = $provide.service;
    //ifameApp.factory = $provide.factory;
    //ifameApp.register = {
    //    controller: $controllerProvider,
    //    factory: $provide.factory,
    //    service: $provide.service
    //};
    //-----
    // inAppBrowser
    var defaultOptions = {
        location: 'no',
        clearcache: 'yes',
        toolbar: 'yes',
        toolbarposition: 'top',
        enableViewportScale: 'yes',
        closebuttoncaption: "Close"
    };
    //
    //document.addEventListener(function() {
        $cordovaInAppBrowserProvider.setDefaultOptions(defaultOptions);
    //}, false);
    // enabling CORS in angular
    $httpProvider.defaults.useXDomain = true;
    //
    //delete $httpProvider.defaults.headers.common['X-Requested-With'];
    // disable transition between view
    $ionicConfigProvider.views.transition('none');
    // set state
    $stateProvider
        .state('login', {
            url: "/login",
            cache: false,
            templateUrl: "views/login.html",
            controller: "loginController"
        })
        .state('terms', {
            url: "/terms",
            templateUrl: "views/terms.html"
        })
        .state('forget', {
            url: "/forget",
            templateUrl: "views/forgetpwd.html"
        })
        .state('device', {
            url: "/device",
            templateUrl: "views/deviceinfo.html",
            controller: "devinfoController"
        })
        .state('menu', {
            url: "/menu",
            abstract: true,
            templateUrl: "views/menu.html",
            controller: "sidemenuController"
        })
        .state('menu.forget', {
            url: "/forget",
            views: {
                'menuContent': {
                    templateUrl: "views/forgetpwd.html"
                }
            }
        })
        .state('menu.device', {
            url: "/device",
            views: {
                'menuContent': {
                    templateUrl: "views/deviceinfo.html",
                    controller: "devinfoController"
                }
            }
        })
        .state('menu.terms', {
            url: "/terms",
            views: {
                'menuContent': {
                    templateUrl: "views/terms.html"
                }
            }
        })
        .state('menu.about', {
            url: "/about",
            views: {
                'menuContent': {
                    templateUrl: "views/about.html",
                    controller: "homeaboutController"
                }
            }
        })
        .state('menu.home', {
            url: "/home",
            views: {
                'menuContent': {
                    templateUrl: "views/home.html",
                    controller: "homeController"
                }
            }
        })
        .state('menu.homeadmin', {
            url: "/homeadmin",
            views: {
                'menuContent': {
                    templateUrl: "views/homeadmin.html",
                    controller: "homeadminController"
                }
            }
        })
        .state('menu.policypending', {
            url: "/policypending",
            views: {
                'menuContent': {
                    templateUrl: "views/policy/policypending.html",
                    controller: "polpendController"
                }
            }
        })
        .state('menu.policyquery', {
            url: "/policyquery",
            views: {
                'menuContent': {
                    templateUrl: "views/policy/policyquery.html",
                    controller: "polqueryController"
                }
            }
        })
        .state('menu.policyinforce', {
            url: "/policyinforce/:polId/:insuredNm/:insuredSn",
            views: {
                'menuContent': {
                    templateUrl: "views/policy/policyinforce.html",
                    controller: "polinforceController"
                }
            }
        })
        .state('menu.policyoverdue', {
            url: "/policyoverdue",
            views: {
                'menuContent': {
                    templateUrl: "views/policy/policyoverdue.html",
                    controller: "poloverdueController"
                }
            }
        })
        .state('menu.policynextdue', {
            url: "/policynextdue",
            views: {
                'menuContent': {
                    templateUrl: "views/policy/policynextdue.html",
                    controller: "polnextdueController"
                }
            }
        })
        .state('menu.policymemo', {
            url: "/policymemo",
            views: {
                'menuContent': {
                    templateUrl: "views/policy/policymemo.html",
                    controller: "polmemoController"
                }
            }
        })
        .state('menu.policydetail', {
            url: "/policydetail/:polId/:polType/:srcId",
            views: {
                'menuContent': {
                    templateUrl: "views/policy/policydetail.html",
                    controller: "poldetailController"
                }
            }
        })
        .state('menu.teamprofile', {
            url: "/teamprofile",
            views: {
                'menuContent': {
                    templateUrl: "views/team/teamprofile.html",
                    controller: "teamController"
                }
            }
        })
        .state('menu.teamall', {
            url: "/teamall",
            views: {
                'menuContent': {
                    templateUrl: "views/team/teamall.html",
                    controller: "teamallController"
                }
            }
        })
        .state('menu.teamunder', {
            url: "/teamunder/:agCode",
            views: {
                'menuContent': {
                    templateUrl: "views/team/teamunder.html",
                    controller: "teamunderController"
                }
            }
        })
        .state('menu.teamagent', {
            url: "/teamunder/:agCode/:agLnkrk",
            views: {
                'menuContent': {
                    templateUrl: "views/team/teamagent.html",
                    controller: "teamagentController"
                }
            }
        })
        .state('menu.teamagpolpend', {
            url: "/teamagpolpend/:agCode/:agGroup",
            views: {
                'menuContent': {
                    templateUrl: "views/team/teamagpolpend.html",
                    controller: "teamagpolpendController"
                }
            }
        })
        .state('menu.teamagpolinf', {
            url: "/teamagpolinf/:agCode/:agGroup",
            views: {
                'menuContent': {
                    templateUrl: "views/team/teamagpolinf.html",
                    controller: "teamagpolinfController"
                }
            }
        })
        .state('menu.st5onhand', {
            url: "/st5onhand/:agCode/:agGroup",
            views: {
                'menuContent': {
                    templateUrl: "views/tempreceipt/st5onhand.html",
                    controller: "st5onhandController"
                }
            }
        })
        .state('menu.st5used', {
            url: "/st5used/:agCode/:agGroup",
            views: {
                'menuContent': {
                    templateUrl: "views/tempreceipt/st5used.html",
                    controller: "st5usedController"
                }
            }
        })
        .state('menu.st5pending', {
            url: "/st5pending/:agCode/:agGroup",
            views: {
                'menuContent': {
                    templateUrl: "views/tempreceipt/st5pending.html",
                    controller: "st5pendingController"
                }
            }
        })
        .state('menu.st5detail', {
            url: "/st5detail/:trno/:sts",
            views: {
                'menuContent': {
                    templateUrl: "views/tempreceipt/st5detail.html",
                    controller: "st5detailController"
                }
            }
        })
         .state('menu.st5agquery', {
             url: "/st5agquery",
             views: {
                 'menuContent': {
                     templateUrl: "views/tempreceipt/st5agquery.html",
                     controller: "st5agqreryController"
                 }
             }
         })
        .state('menu.st5agqueryunder', {
            url: "/st5agqueryunder/:agCode",
            views: {
                'menuContent': {
                    templateUrl: "views/tempreceipt/st5agqueryunder.html",
                    controller: "st5agqueryunderController"
                }
            }
        })
        .state('menu.st5agdetail', {
            url: "/st5agdetail/:agCode/:agLnkrk",
            views: {
                'menuContent': {
                    templateUrl: "views/tempreceipt/st5agdetail.html",
                    controller: "st5agdetailController"
                }
            }
        })
        .state('menu.productlist', {
            url: "/productlist",
            views: {
                'menuContent': {
                    templateUrl: "views/product/productlist.html",
                    controller: "productController"
                }
            }
        })
        .state('menu.custbirthday', {
            url: "/custbirthday",
            views: {
                'menuContent': {
                    templateUrl: "views/customer/custbirthday.html",
                    controller: "customerController"
                }
            }
        })
        .state('menu.custbdlist', {
            url: "/custbdlist/:selMonth/:selInforced/:selIncluded",
            views: {
                'menuContent': {
                    templateUrl: "views/customer/custbdlist.html",
                    controller: "custbdlistController"
                }
            }
        })
        .state('menu.trainingmonth', {
            url: "/trainingmonth",
            views: {
                'menuContent': {
                    templateUrl: "views/training/trainingmonth.html",
                    controller: "trainingController"
                }
            }
        })
        .state('menu.traininglicense', {
            url: "/traininglicense",
            views: {
                'menuContent': {
                    templateUrl: "views/training/traininglicense.html",
                    controller: "trainlicenseController"
                }
            }
        })
        .state('menu.downloadreport', {
            url: "/downloadreport/:agCode/:agGroup",
            views: {
                'menuContent': {
                    templateUrl: "views/download/downloadreport.html",
                    controller: "downloadreportController"
                }
            }
        })
        .state('menu.rptagquery', {
             url: "/rptagquery",
             views: {
                 'menuContent': {
                     templateUrl: "views/download/rptagquery.html",
                     controller: "rptagqreryController"
                 }
             }
         })
        .state('menu.rptagqueryunder', {
            url: "/rptagqueryunder/:agCode",
            views: {
                'menuContent': {
                    templateUrl: "views/download/rptagqueryunder.html",
                    controller: "rptagqueryunderController"
                }
            }
        })
        .state('menu.downloadmanual', {
            url: "/downloadmanual",
            views: {
                'menuContent': {
                    templateUrl: "views/download/downloadmanual.html",
                    controller: "downloadmanualController"
                }
            }
        })
        .state('menu.downloadformob', {
            url: "/downloadformob",
            views: {
                'menuContent': {
                    templateUrl: "views/download/downloadformob.html",
                    controller: "downloadformobController"
                }
            }
        })
        .state('menu.downloadformtk', {
            url: "/downloadformtk",
            views: {
                'menuContent': {
                    templateUrl: "views/download/downloadformtk.html",
                    controller: "downloadformtkController"
                }
            }
        })
        .state('menu.userprofile', {
            url: "/userprofile",
            views: {
                'menuContent': {
                    templateUrl: "views/user/userprofile.html",
                    controller: "userprofileController"
                }
            }
        })
        .state('menu.announcement', {
            url: "/announcement",
            views: {
                'menuContent': {
                    templateUrl: "views/announcement/announcement.html",
                    controller: "announceController"
                }
            }
        });
    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/login');
});