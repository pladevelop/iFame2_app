// ifameApp Controllers
//
// created : 2/5/2015
// author  : NJ
//
/// <reference path="../lib/ionic/js/ionic.bundle.js" />
//
//var ifameApp = angular.module('ifameApp');

// set global constants
ifameApp.constant("appConstants", {
    BASEURLX: "http://localhost/WebQryAPI/api/",
    BASEURLY: "http://centerapi.philliplife.com/apiproxy/webqryapi/api/",
    BASEURL: "http://centerapi.philliplife.com/apiproxy/mowebqryapi/api/",
    AGTURL: "http://centerapi.philliplife.com/apiproxy/agentapi/api/",
    APPNAME: "iFAME2",
    APPVER: "2.0.8 (07/07/2015)",
    IPADDR: "1.1.1.1",
    MSG_NOTLOGIN: "You are not login yet!",
    SRC_POLPEND: "polpend",
    SRC_POLINFORCE: "polinforce",
    SRC_POLOVERDUE: "poloverdue"
});
// set gloval variables
ifameApp.value("appGlobals", {
    usrToken: '',
    usrToken1d: '',
    usrToken2d: '',
    usrLogin: {
        usrId: '',
        usrName: '',
        usrGroup: '',
        usrIp: '',
        usrApp: ''
    },
    usrHome: '',
    usrAuthen: '',
    isLogin: 'N',
    PolPayAndTerm: [],
    usrAgentInfo: {}
});
