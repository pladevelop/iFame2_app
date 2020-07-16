// Factory - sessionFactory
//
// created : 2/5/2015
// author  : NJ
//
/// <reference path="../lib/ionic/js/ionic.bundle.js" />
//
ifameApp.factory('sessionFactory', [
    '$ionicPopup', '$window', '$state', 'appConstants', 'appGlobals', 'sharedFactory', 'datetimeFactory',
    function($ionicPopup, $window, $state, appConstants, appGlobals, sharedFactory, datetimeFactory) {
        var factory = {};
        // base64
        var Base64 = {
            // private property
            _keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
            // public method for encoding
            encode: function(input) {
                var output = "";
                var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
                var i = 0;
                input = Base64._utf8_encode(input);
                while (i < input.length) {
                    chr1 = input.charCodeAt(i++);
                    chr2 = input.charCodeAt(i++);
                    chr3 = input.charCodeAt(i++);
                    enc1 = chr1 >> 2;
                    enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
                    enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
                    enc4 = chr3 & 63;
                    if (isNaN(chr2)) {
                        enc3 = enc4 = 64;
                    } else if (isNaN(chr3)) {
                        enc4 = 64;
                    }
                    output = output +
                        this._keyStr.charAt(enc1) + this._keyStr.charAt(enc2) +
                        this._keyStr.charAt(enc3) + this._keyStr.charAt(enc4);
                }
                return output;
            },
            // public method for decoding
            decode: function(input) {
                var output = "";
                var chr1, chr2, chr3;
                var enc1, enc2, enc3, enc4;
                var i = 0;
                input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");
                while (i < input.length) {
                    enc1 = this._keyStr.indexOf(input.charAt(i++));
                    enc2 = this._keyStr.indexOf(input.charAt(i++));
                    enc3 = this._keyStr.indexOf(input.charAt(i++));
                    enc4 = this._keyStr.indexOf(input.charAt(i++));
                    chr1 = (enc1 << 2) | (enc2 >> 4);
                    chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
                    chr3 = ((enc3 & 3) << 6) | enc4;
                    output = output + String.fromCharCode(chr1);
                    if (enc3 !== 64) {
                        output = output + String.fromCharCode(chr2);
                    }
                    if (enc4 !== 64) {
                        output = output + String.fromCharCode(chr3);
                    }
                }
                output = Base64._utf8_decode(output);
                return output;
            },
            // private method for UTF-8 encoding
            _utf8_encode: function(string) {
                string = string.replace(/\r\n/g, "\n");
                var utftext = "";
                for (var n = 0; n < string.length; n++) {
                    var c = string.charCodeAt(n);
                    if (c < 128) {
                        utftext += String.fromCharCode(c);
                    } else if ((c > 127) && (c < 2048)) {
                        utftext += String.fromCharCode((c >> 6) | 192);
                        utftext += String.fromCharCode((c & 63) | 128);
                    } else {
                        utftext += String.fromCharCode((c >> 12) | 224);
                        utftext += String.fromCharCode(((c >> 6) & 63) | 128);
                        utftext += String.fromCharCode((c & 63) | 128);
                    }
                }
                return utftext;
            },
            // private method for UTF-8 decoding
            _utf8_decode: function(utftext) {
                var string = "";
                var i = 0;
                var c = c1 = c2 = 0;
                while (i < utftext.length) {
                    c = utftext.charCodeAt(i);
                    if (c < 128) {
                        string += String.fromCharCode(c);
                        i++;
                    } else if ((c > 191) && (c < 224)) {
                        c2 = utftext.charCodeAt(i + 1);
                        string += String.fromCharCode(((c & 31) << 6) | (c2 & 63));
                        i += 2;
                    } else {
                        c2 = utftext.charCodeAt(i + 1);
                        c3 = utftext.charCodeAt(i + 2);
                        string += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
                        i += 3;
                    }
                }
                return string;
            }
        };
        // private function
        function convertToken1d(token1d) {
            var data = token1d.split('|');
            return {
                usrId: data[0],
                usrName: data[1],
                usrGroup: data[2],
                usrIp: data[3],
                usrApp: data[4]
            };
        };

        function convertToken2d(token2d) {
            var data = token2d.split('|');
            return {
                usrId: data[0],
                usrIp: data[1],
                usrExpireDt: data[2],
                usrExpireTm: data[3],
                usrTokenRef: data[4],
                usrStatus: data[5]
            };
        };
        //
        factory.ClearLoginToken = function() {
            appGlobals.usrToken = '';
            appGlobals.usrToken1d = '';
            appGlobals.usrToken2d = '';
            appGlobals.usrLogin = {
                usrId: '',
                usrName: '',
                usrGroup: '',
                usrIp: '',
                usrApp: ''
            };
            appGlobals.usrAuthen = '';
            appGlobals.isLogin = 'N';
            appGlobals.headerInfoL = '';
            appGlobals.headerInfoR = '';
        };
        factory.SetLoginToken = function(token) {
            // split token
            var loginToken = token.split('|');
            var loginToken1 = loginToken[0];
            var loginToken2 = loginToken[1];
            // save in appGlobals
            appGlobals.usrToken = token;
            appGlobals.usrToken1d = Base64.decode(loginToken1);
            appGlobals.usrToken2d = Base64.decode(loginToken2);
            appGlobals.usrLogin = convertToken1d(appGlobals.usrToken1d);
            appGlobals.isLogin = 'Y';
            appGlobals.usrAuthen = "Custom " + token;
            appGlobals.headerInfoL = '';
            appGlobals.headerInfoR = 'User:' + appGlobals.usrLogin.usrId +
            ' Date: ' + datetimeFactory.getTodayDate();
            return appGlobals.usrLogin.usrGroup;
        };
        factory.validateLogin = function() {
            if (appGlobals.isLogin != 'Y') {
                sharedFactory.showMsg('Login', appConstants.MSG_NOTLOGIN);
                $state.go("login");
            }
        };
        factory.isLogin = function() {
            return ((appGlobals.isLogin == 'Y') ? true : false);
        };
        factory.isGroupAG = function(grName) {
            return ((('/LEADR/AGENT/').indexOf(grName) >= 0) ? true : false);
        };
        factory.GetLoginToken = function() {
            return appGlobals.usrToken; //$window.sessionStorage.getItem(_LOGIN_TOKEN);
        };
        factory.GetUserId = function() {
            return appGlobals.usrLogin.usrId; //$window.sessionStorage.getItem(_LOGIN_USRID);
        };
        factory.GetUserGroup = function() {
            return appGlobals.usrLogin.usrGroup; //$window.sessionStorage.getItem(_LOGIN_USRGROUP);
        };
        // // load session data from WEB API to store in SQLITE
        // factory.loadData2Local = function() {
        //     // get policies from webapi and load to sqlite
        //     var promise = policyFactory.getPolAll();
        //     promise.success(function(data, status, headers, config, statusText) {
        //             if (angular.isUndefined(data) || data === null) {
        //                 //alert('data read=null');
        //                 appGlobals.PolPayAndTerm = [];
        //             } else {
        //                 //alert('data read='+data.length);
        //                 ifamedbFactory.loadPolicyData(data);
        //                 appGlobals.PolPayAndTerm = data;
        //             };
        //         })
        //         .error(function(data, status, headers, config, statusText) {
        //             sharedFactory.showMsg("loadData", "error status=" + status + "<br />" +
        //                 "message=" + data + "<br />" +
        //                 "statusText=" + statusText);
        //         });
        //     return promise;
        // };
        // other services
        //
        return factory;
    }
]);