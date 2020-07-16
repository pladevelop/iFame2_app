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
    //BASEURLY: "http://centerapi.philliplife.com/apiproxy/webqryapi/api/",
    BASEURL_1: "http://centerapi.philliplife.com/apiproxy/mowebqryapi/api/",
    //AGTURL: "http://centerapi.philliplife.com/apiproxy/agentapi/api/",
    BASEURLY: "http://centerapi.philliplife.com/apigw/webqryapi/api/",
    BASEURL: "http://centerapi.philliplife.com/apigw/prwebqryapi/api/",
    AGTURL: "http://centerapi.philliplife.com/apigw/agentapi/api/",
    APPNAME: "iFAME2",
    APPVER: "2.1.7(12/11/2015)",
    IPADDR: "1.1.1.1",
    MSG_NOTLOGIN: "You are not login yet!",
    SRC_POLPEND: "polpend",
    SRC_POLINFORCE: "polinforce",
    SRC_POLOVERDUE: "poloverdue",
    SRC_POLNEXTDUE: "polnextdue"
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
    usrAgentInfo: {},
    headerInfoR: '',
    headerInfoL: ''
});
