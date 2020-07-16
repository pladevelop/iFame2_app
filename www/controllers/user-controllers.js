// angular.module('ifameApp').controller Controllers
// polpendController : policyPending
//
// created : 2/5/2015
// author  : NJ
//
/// <reference path="../lib/ionic/js/ionic.bundle.js" />
//
//var angular.module('ifameApp').controller = angular.module('angular.module('ifameApp').controller');

ifameApp.controller('userprofileController', [
    '$scope', 'sharedFactory', 'userFactory', 'appGlobals', '$filter', '$state',
    function($scope, sharedFactory, userFactory, appGlobals, $filter, $state) {
        var self = this;
        var msgTitle = "My Profile";
        //
        $scope.styleInput = {
            color: '#3366ff'
        };
        // declaration
        $scope.userId = "";
        $scope.userGroup = "";
        $scope.user = {};
        $scope.dspMode = true;
        //
        init();
        //
        function init() {
            $scope.userId = appGlobals.usrLogin.usrId;
            $scope.userGroup = appGlobals.usrLogin.usrGroup;
            //
            var promise = userFactory.getUserInfo($scope.userId, $scope.userGroup);
            promise.success(function(data, status, headers, config, statusText) {
                    //alert('OK' + JSON.stringify(data));
                    if (angular.isUndefined(data) || data === null) {
                        $scope.user = [];
                        sharedFactory.showMsg(msgTitle, "Not found!");
                    } else {
                        $scope.user = data;
                    }
                })
                .error(function(data, status, headers, config, statusText) {
                    sharedFactory.showMsg(msgTitle, "error status=" + status + "<br />" +
                        "message=" + data + "<br />" +
                        "statusText=" + statusText);
                });
        };
        //
    }
])

//
    .controller('changepwdController', [
        '$scope',  '$ionicLoading', 'userFactory', 'appGlobals', 'sharedFactory', '$state',
        function($scope,  $ionicLoading, userFactory, appGlobals, sharedFactory, $state) {
            // declaration
             var msgTitle = "Change Password";
             $scope.password ={};
             
            // do initialize
            init();
            // private function
            function init() {
               
            };
            $scope.changepwd = function(inpPassword, inpPassword_1, inpPassword_2) {
                // show loading
                var psw = inpPassword;
                var psw1 = inpPassword_1;
                var psw2 = inpPassword_2; 

                if (angular.isUndefined(psw) || angular.isUndefined(psw1) || angular.isUndefined(inpPassword_2)){ 
                    //alert('ระบุข้อมูลให้ครบ');
                    sharedFactory.showMsg(msgTitle, "ระบุข้อมูลให้ครบ");
                } else if  (psw1 != psw2){
                    //alert('Password ใหม่ไม่ตรงกัน');
                    sharedFactory.showMsg(msgTitle, "Password ใหม่ไม่ตรงกัน");
                    $scope.password = {
                        newpassword_1 : '' ,
                        newpassword_2 : '' ,
                        passwordCd : inpPassword
                        };  
                } else {
                $scope.userId = appGlobals.usrLogin.usrId;
            
            //
            var promise = userFactory.changepwd($scope.userId, psw, psw1 );
            promise.success(function(data, status, headers, config, statusText) {
                    sharedFactory.showMsg(msgTitle, "เปลี่ยนรหัสผ่านใหม่เรียบร้อย" + "<br />" + 
                        "กรุณาเข้าสู่ระบบใหม่");
                    $scope.password = {
                        newpassword_1 : '' ,
                        newpassword_2 : '' ,
                        passwordCd : ''
                        }; 
                    $state.go("login");
                })

                .error(function(data, status, headers, config, statusText) {
                    sharedFactory.showMsg(msgTitle, "error status=" + status + "<br />" +
                        "message=" + data + "<br />" +
                        "statusText=" + statusText);
                });
                }     
    };
    }])
    //
     .controller('changeemailController', [
        '$scope',  '$ionicLoading', 'userFactory', 'appGlobals', 'sharedFactory', '$state',
        function($scope,  $ionicLoading, userFactory, appGlobals, sharedFactory, $state) {
            // declaration
             var msgTitle = "Change Email";
             $scope.email ={};
            // do initialize
            init();
            // private function
            function init() {
               
            };
            $scope.changeemail = function(inpEmail, inpEmail_1, inpEmail_2) {
                // show loading
                var email = inpEmail;
                var email1 = inpEmail_1;
                var email2 = inpEmail_2; 

                if (angular.isUndefined(email) || angular.isUndefined(email1) || angular.isUndefined(email2)){   
                    //alert('ระบุ Email ให้ครบ');
                    sharedFactory.showMsg(msgTitle, "ระบุข้อมูลให้ครบ");
                } else if  (email1 != email2){
                    //alert('Email ใหม่ไม่ตรงกัน');
                    sharedFactory.showMsg(msgTitle, "Email ใหม่ไม่ตรงกัน");
                    $scope.email = {
                        newemail_1 : '' ,
                        newemail_2 : '' ,
                        email : inpEmail 
                        };  
                } else {
                $scope.userId = appGlobals.usrLogin.usrId;
            
            //
            var promise = userFactory.changeemail($scope.userId, email, email1 );
            promise.success(function(data, status, headers, config, statusText) {
                    sharedFactory.showMsg(msgTitle, "เปลี่ยน Email ใหม่เรียบร้อย" + "<br />" + 
                        "กรุณาเข้าสู่ระบบใหม่");
                    $scope.email = {
                        email : '' ,
                        newemail_1 : '' ,
                        newemail_2 : ''
                        };  
                    $state.go("login");
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
    //
     .controller('registerController', [
        '$scope',  '$ionicLoading', '$filter', 'userFactory', 'appGlobals', 'sharedFactory', '$state', 'dateFilter',
        function($scope,  $ionicLoading, $filter, userFactory, appGlobals, sharedFactory, $state, dateFilter) {
            // declaration
             var msgTitle = "Register";
             $scope.DD = {};
             $scope.MM = {};
             $scope.YY = {};
             $scope.YYY = {};
            // do initialize
            init();
            // private function
            function init() {
                $scope.DD = userFactory.getDD();
                $scope.MM = userFactory.getMM();
                $scope.YY = userFactory.getYY();
            };
            $scope.register = function(inpName, inpSurname, day, month, year, inpIdcard, inpEmail, inpPasswordCd, inpPassword1) {
 
                //alert(year + '-' + month + '-' + day);
                // show loading
                var name = inpName;
                var surname = inpSurname;
                var brthdt = (year + '-' + month + '-' + day);//dateFilter(inpBrthdt, 'yyyy-MM-dd'); //inpBrthdt.split("/").reverse().join("-");//inpBrthdt; 
                var idcard = inpIdcard; 
                var email = inpEmail; 
                var passwordcd = inpPasswordCd; 
                var password1 = inpPassword1; 

                if (angular.isUndefined(name) || angular.isUndefined(surname) || angular.isUndefined(brthdt) ||
                    angular.isUndefined(idcard) || angular.isUndefined(email) || angular.isUndefined(passwordcd) ||
                    angular.isUndefined(password1) || name == "" || surname == "" || brthdt == "" || idcard == "" || 
                    email == "" || passwordcd == "" || password1 == "" || brthdt=="undefined-undefined-undefined"){   
                    sharedFactory.showMsg(msgTitle, "ระบุข้อมูลให้ครบ");
                alert(brthdt);
                } else if  (passwordcd != password1){
                    //alert('Password ไม่ตรงกัน');
                    sharedFactory.showMsg(msgTitle, "Password ไม่ตรงกัน");
                } else {
            //
            var promise = userFactory.register(name, surname, brthdt, idcard, email, passwordcd );
            promise.success(function(data, status, headers, config, statusText) {
                    sharedFactory.showMsg(msgTitle, "ทำการสมัครสมาชิกเรียบร้อย" + "<br />" + 
                        "กรุณาตรวจสอบ Email ในการเข้าสู่ระบบ");
                    $state.go("login");
                })

                .error(function(data, status, headers, config, statusText) {
                    sharedFactory.showMsg(msgTitle, "error status=" + status + "<br />" +
                        "message=" + data + "<br />" +
                        "statusText=" + statusText);
                });
                }     
    };
            
    }
    ]);
     