// Factory - sharedFactory
//
// created : 2/5/2015
// author  : NJ
//
/// <reference path="../lib/ionic/js/ionic.bundle.js" />
//
// *** SHAREDFACTORY CANNOT INJECT SESSIONFACTORY --> CAUSE LOOP ERROR
ifameApp.factory('sharedFactory', [
    '$ionicPopup', '$window', 'appConstants', 'appGlobals', '$cordovaInAppBrowser', '$ionicPlatform',
    function($ionicPopup, $window, appConstants, appGlobals, $cordovaInAppBrowser, $ionicPlatform) {
        var factory = {};
        //
        factory.showMsg = function(msgTitle, msgText) {
            var a = $ionicPopup.alert({
                title: msgTitle,
                template: msgText
            });
        };
        factory.getDevInfo_DevInfos = function() {
            //var devinfo = ionic.Platform.device();
            //var devinfo_s = JSON.stringify(devinfo);
            //var isWebView = ionic.Platform.isWebView();
            //var isIPad = ionic.Platform.isIPad();
            //var isIOS = ionic.Platform.isIOS();
            //var isAndroid = ionic.Platform.isAndroid();
            //var isWindowsPhone = ionic.Platform.isWindowsPhone();
            var currentPlatform = ionic.Platform.platform();
            var currentPlatformVersion = ionic.Platform.version();
            //
            return [{
            //     header: "Device : ",
            //     value: devinfo_s
            // },{
                header: "Platform : ",
                value: currentPlatform
            },{
                header: "Version : ",
                value: currentPlatformVersion
            }];
        };
        factory.getDevInfo_AppInfos = function() {
            return [{
                header: "App Name : ",
                value: appConstants.APPNAME
            }, {
                header: "App Version : ",
                value: appConstants.APPVER
            }];
        };
        factory.getDevInfo_ApiInfos = function() {
            return [{
                header: "Client IP : ",
                value: appConstants.IPADDR
            }, {
                header: "BASE URL : ",
                value: appConstants.BASEURL
            }];
        };
        factory.getDevInfo_UsrInfos = function() {
            // CANNOT INJECT SESSIONFACTORY!!! --> ERROR LOOP
            var usrId = appGlobals.usrLogin.usrId;
            return [{
                header: "User Id: ",
                value: (usrId.length == 0 ? 'NOT LOGIN' : usrId)
            }, {
                header: "User Name : ",
                value: appGlobals.usrLogin.usrName
            }, {
                header: "User Group : ",
                value: appGlobals.usrLogin.usrGroup
                    // }, {
                    //     header: "Token : ",
                    //     value: appGlobals.usrToken 
            }];
        };
        factory.getDevInfo_BrowserInfos = function() {
            var nav = $window.navigator;
            return [{
                header: "Browser CodeName : ",
                value: nav.appCodeName
            }, {
                header: "Browser Name : ",
                value: nav.appName
            }, {
                header: "Browser Version : ",
                value: nav.appVersion
            }, {
                header: "Cookies Enabled : ",
                value: nav.cookieEnabled
            }, {
                header: "Browser Language : ",
                value: nav.language
            }, {
                header: "Browser Online : ",
                value: nav.onLine
            }, {
                header: "Platform : ",
                value: nav.platform
            }, {
                header: "User-agent header : ",
                value: nav.userAgent
            }];
        };
        //
        factory.getSideMenus = function() {
            return [{
                link: "#/menu/" + appGlobals.usrHome,
                menuText: "Home"
            }, {
                link: "#/menu/device",
                menuText: "Device Info"
            }, {
                //     link: "#/menu/forget",
                //     menuText: "Forget Password"
                // }, {
                link: "#/menu/terms",
                menuText: "Terms and Conditions"
            }, {
                link: "#/menu/about",
                menuText: "About Program"
            }];
        };
        //
        factory.openPDF = function(pdfUrl) {
            $window.open(pdfUrl, "_system", "location=yes");
        };
        factory.openWEB = function(webUrl) {
            $window.open(webUrl, "_system", "location=yes");
        };
        //
        factory.getTodayNews = function() {
            //return ("แบบประกัน 'สุขมงคล' ได้รับอนุมัติจาก คปภ. แล้ว และบริษัทฯ จะพร้อมให้ขายสินค้านี้ได้ตั้งแต่วันที่ 1 พฤษภาคม เป็นต้นไป");
            return ("คลิ๊กที่นี่เพื่อดูข่าวสารและกิจกรรมบริษัทล่าสุด...");
        };
        //
        factory.getMainMenusAGT = function() {
            return [{
                    name: "ข้อมูลกรมธรรม์",
                    items: [{
                        link: "menu.policypending",
                        param: "",
                        icon: "ion-ios-compose-outline",
                        header: "กรมธรรม์รอการอนุมัติ",
                        text: "สอบถามข้อมูลใบคำขอเอาประกันและกรมธรรม์ใหม่"
                    }, {
                        link: "menu.policyquery",
                        param: "",
                        icon: "ion-ios-paper-outline",
                        header: "กรมธรรม์ที่มีผลบังคับและสิ้นสุด",
                        text: "สอบถามข้อมูลกรมธรรม์ทุกสถานะ"
                    }, {
                        link: "menu.policyoverdue",
                        param: "",
                        icon: "ion-ios-alarm-outline",
                        header: "กรมธรรม์ที่พ้นกำหนดชำระ",
                        text: "สอบถามข้อมูลกรมธรรม์ที่พ้นกำหนดชำระ"
                    }, {
                        link: "menu.policynextdue",
                        param: "",
                        icon: "ion-ios-bookmarks-outline",
                        header: "กรมธรรม์ที่ใกล้ครบกำหนดชำระ",
                        text: "สอบถามข้อมูลกรมธรรม์ที่ใกล้ครบกำหนดชำระ"
                    }, {
                        link: "menu.policymemo",
                        param: "",
                        icon: "ion-ios-browsers-outline",
                        header: "กรมธรรม์ที่มีการขอข้อมูลเพิ่มเติม",
                        text: "สอบถามข้อมูลกรมธรรม์ที่มีการขอข้อมูลเพิ่ม่เติม"
                    }]
                }, {
                    name: "โครงสร้างตัวแทน",
                    items: [{
                            link: "menu.teamprofile",
                            param: "",
                            icon: "ion-ios-person-outline",
                            header: "ข้อมูลส่วนตัว",
                            text: "รายละเอียดส่วนตัว"
                        }, {
                            link: "menu.teamunder",
                            param: "agcode",
                            icon: "ion-ios-people-outline",
                            header: "ดูโครงสร้างตัวแทน",
                            text: "รายละเอียดโครงสร้างตัวแทน"
                        }, {
                            link: "menu.teamunder_smprem",
                            param: "agcode",
                            icon: "ion-social-bitcoin-outline",
                            header: "โครงสร้างตัวแทน-เบี้ยนำส่ง",
                            text: "ข้อมูลโครงสร้างตัวแทน-เบี้ยนำส่ง"
                        }, {
                            link: "menu.teamunder_isprem",
                            param: "agcode",
                            icon: "ion-social-bitcoin-outline",
                            header: "โครงสร้างตัวแทน-เบี้ยอนุมัติ",
                            text: "ข้อมูลโครงสร้างตัวแทน-เบี้ยอนุมัติ"
                        }, {
                            link: "menu.policyunderquery",
                            param: "",
                            icon: "ion-ios-paper-outline",
                            header: "กรมธรรม์ภายใต้สังกัด",
                            text: "สอบถามข้อมูลกรมธรรม์ภายใต้สังกัด"
                        }]
                }, {
                    name: "ข้อมูล สท.5",
                    items: [{
                        link: "menu.st5onhand",
                        param: "",
                        icon: "ion-ios-browsers-outline",
                        header: "สท.5 ในมือผู้บริหาร",
                        text: "สอบถาม สท.5 ในมือผู้บริหาร"
                    }, {
                        link: "menu.st5used",
                        param: "",
                        icon: "ion-ios-browsers-outline",
                        header: "สท.5 ที่ใช้ชำระเบี้ยแล้ว",
                        text: "สอบถาม สท.5 ที่ใช้ชำระเบี้ยแล้ว"
                    }, {
                        link: "menu.st5pending",
                        param: "",
                        icon: "ion-ios-browsers-outline",
                        header: "ตรวจสอบ สท.5",
                        text: "สอบถาม สท.5 ที่ติดค้างการตรวจสอบ"
                    }]
                }, {
                    name: "ข้อมูลลูกค้า",
                    items: [{
                        link: "menu.custbirthday",
                        param: "",
                        icon: "ion-ios-wineglass-outline",
                        header: "วันเกิดลูกค้า",
                        text: "สอบถามข้อมูลวันเกิดลูกค้าประจำเดือน"
                    }]
                }, {
                    name: "ข้อมูลแบบประกัน",
                    items: [{
                        link: "menu.productlist",
                        param: "",
                        icon: "ion-ios-flag-outline",
                        header: "แบบประกัน",
                        text: "สอบถามข้อมูลแบบประกัน"
                    }]
                }, {
                    name: "ประกาศ/คำสั่ง/กจญ",
                    items: [{
                        link: "menu.announcement",
                        param: "",
                        icon: "ion-ios-mic-outline",
                        header: "ข้อมูล ประกาศ/คำสั่ง/กจญ",
                        text: "สอบถามข้อมูล ประกาศ/คำสั่ง/กจญ"
                    }]
                }, {
                    name: "ฝึกอบรม/ใบอนุญาตตัวแทน",
                    items: [{
                        link: "menu.trainingmonth",
                        param: "",
                        icon: "ion-ios-list-outline",
                        header: "ตารางอบรมประจำเดือน",
                        text: "สอบถามข้อมูลตารางอบรมประจำเดือน"
                    }, {
                        link: "menu.traininglicense",
                        param: "",
                        icon: "ion-ios-pie-outline",
                        header: "ใบอนุญาตตัวแทน",
                        text: "ข้อมูลใบอนุญาตตัวแทนต่างๆ"
                    }]
                }, {
                    name: "Download Reports/Forms",
                    items: [{
                        link: "menu.downloadreport",
                        param: "",
                        icon: "ion-ios-download-outline",
                        header: "ผลประโยชน์ตัวแทน",
                        text: "รายงานผลประโยชน์ตัวแทน"
                    }, {
                        link: "menu.downloadmanual",
                        param: "",
                        icon: "ion-ios-cloud-download-outline",
                        header: "คู่มือ/เอกสาร",
                        text: "ข้อมูลคู่มือ/เอกสาร ต่างๆ"
                    }, {
                        link: "menu.downloadformob",
                        param: "",
                        icon: "ion-ios-cloud-download-outline",
                        header: "แบบฟอร์มประกันชีวิตทั่วไป",
                        text: "เอกสารแบบฟอร์มสำหรับประกันชีวิตทั่วไป"
                    }, {
                        link: "menu.downloadformtk",
                        param: "",
                        icon: "ion-ios-cloud-download-outline",
                        header: "แบบฟอร์มสมาชิกตะกาฟุล",
                        text: "เอกสารแบบฟอร์มสำหรับสมาชิกตะกาฟุล"
                    }]
                }, {    
                name: "เปลี่ยนรหัสผ่าน",
                items: [{
                    link: "menu.changepwd",
                    param: "",
                    icon: "ion-ios-compose-outline",
                    header: "เปลี่ยนรหัสผ่าน",
                    text: "เปลี่ยนรหัสผ่าน"
                }]
                }, {    
                name: "เปลี่ยน E-mail Address",
                items: [{
                    link: "menu.changeemail",
                    param: "",
                    icon: "ion-ios-compose-outline",
                    header: "เปลี่ยน E-mail Address",
                    text: "เปลี่ยน E-mail Address"
                }]
                }, {
                    name: "My Profile",
                    items: [{
                        link: "menu.userprofile",
                        param: "",
                        icon: "ion-ios-heart-outline",
                        header: "User Profile",
                        text: "View User Profile"
                    }]
                }

            ];
        };
        //
        factory.getMainMenusADM = function() {
            return [{
                name: "ข้อมูลกรมธรรม์",
                items: [{
                    link: "menu.policypending",
                    param: "",
                    icon: "ion-ios-compose-outline",
                    header: "กรมธรรม์รอการอนุมัติ",
                    text: "สอบถามข้อมูลใบคำขอเอาประกันและกรมธรรม์ใหม่"
                }, {
                    link: "menu.policyquery",
                    param: "",
                    icon: "ion-ios-paper-outline",
                    header: "กรมธรรม์ที่มีผลบังคับและสิ้นสุด",
                    text: "สอบถามข้อมูลกรมธรรม์ทุกสถานะ"
                }, {
                    link: "menu.policymemo",
                    param: "",
                    icon: "ion-ios-browsers-outline",
                    header: "กรมธรรม์ที่มีการขอข้อมูลเพิ่มเติม",
                    text: "สอบถามข้อมูลกรมธรรม์ที่มีการขอข้อมูลเพิ่ม่เติม"
                }]
            }, {
                name: "โครงสร้างตัวแทน",
                items: [{
                    link: "menu.teamall",
                    param: "",
                    icon: "ion-ios-people-outline",
                    header: "โครงสร้างตัวแทน",
                    text: "ข้อมูลโครงสร้างตัวแทน"
                }, {
                    link: "menu.teamall_smprem",
                    param: "",
                    icon: "ion-social-bitcoin-outline",
                    header: "โครงสร้างตัวแทน-เบี้ยนำส่ง",
                    text: "ข้อมูลโครงสร้างตัวแทน-เบี้ยนำส่ง"
                }, {
                    link: "menu.teamall_isprem",
                    param: "",
                    icon: "ion-social-bitcoin-outline",
                    header: "โครงสร้างตัวแทน-เบี้ยอนุมัติ",
                    text: "ข้อมูลโครงสร้างตัวแทน-เบี้ยอนุมัติ"
                }]
            }, {
                name: "ข้อมูล สท.5",
                    items: [{
                     //   link: "menu.st5onhand",
                     //   param: "",
                     //   icon: "ion-ios-browsers-outline",
                     //   header: "Temporary Receipts - On Hand",
                     //   text: "List of Temporary Receipts on Hand"
                    //},{
                     //   link: "menu.st5used",
                     //   param: "",
                     //   icon: "ion-ios-browsers-outline",
                     //   header: "Temporary Receipts - Used",
                     //   text: "List of Temporary Receipts Used"
                    //},{
                      //  link: "menu.st5pending",
                      //  param: "",
                      //  icon: "ion-ios-browsers-outline",
                      //  header: "Temporary Receipts - Pending Check",
                      //  text: "List of Temporary Receipts pending check"
                    //},{
                        link: "menu.st5agquery",
                        param: "",
                        icon: "ion-ios-people-outline",
                        header: "ข้อมูล สท.5 ของผู้บริหาร",
                        text: "สอบถามข้อมูล สท.5 ของผู้บริหาร"
                }]
            }, {
                name: "ข้อมูลแบบประกัน",
                items: [{
                    link: "menu.productlist",
                    param: "",
                    icon: "ion-ios-flag-outline",
                    header: "แบบประกัน",
                    text: "สอบถามข้อมูลแบบประกัน"
                }]
            }, {
                name: "ประกาศ/คำสั่ง/กจญ",
                items: [{
                    link: "menu.announcement",
                    param: "",
                    icon: "ion-ios-mic-outline",
                    header: "ข้อมูล ประกาศ/คำสั่ง/กจญ",
                    text: "สอบถามข้อมูล ประกาศ/คำสั่ง/กจญ"
                }]
            }, {
                name: "ฝึกอบรม/ใบอนุญาตตัวแทน",
                items: [{
                    link: "menu.trainingmonth",
                    param: "",
                    icon: "ion-ios-list-outline",
                    header: "ตารางอบรมประจำเดือน",
                    text: "สอบถามข้อมูลตารางอบรมประจำเดือน"
                }, {
                    link: "menu.traininglicense",
                    param: "",
                    icon: "ion-ios-pie-outline",
                    header: "ใบอนุญาตตัวแทน",
                    text: "ข้อมูลใบอนุญาตตัวแทนต่างๆ"
                }]
            }, {
                name: "Download Reports/Forms",
                items: [{
                    link: "menu.downloadreport",
                    param: "",
                    icon: "ion-ios-download-outline",
                    header: "ผลประโยชน์ตัวแทน",
                    text: "รายงานผลประโยชน์ตัวแทน"
                 }, {
                    link: "menu.downloadmanual",
                    param: "",
                    icon: "ion-ios-cloud-download-outline",
                    header: "คู่มือ/เอกสาร",
                    text: "ข้อมูลคู่มือ/เอกสาร ต่างๆ"
                }, {
                    link: "menu.downloadformob",
                    param: "",
                    icon: "ion-ios-cloud-download-outline",
                    header: "แบบฟอร์มประกันชีวิตทั่วไป",
                    text: "เอกสารแบบฟอร์มสำหรับประกันชีวิตทั่วไป"
                }, {
                    link: "menu.downloadformtk",
                    param: "",
                    icon: "ion-ios-cloud-download-outline",
                    header: "แบบฟอร์มสมาชิกตะกาฟุล",
                    text: "เอกสารแบบฟอร์มสำหรับสมาชิกตะกาฟุล"
                }]
            }, {    
                name: "เปลี่ยนรหัสผ่าน",
                items: [{
                    link: "menu.changepwd",
                    param: "",
                    icon: "ion-ios-compose-outline",
                    header: "เปลี่ยนรหัสผ่าน",
                    text: "เปลี่ยนรหัสผ่าน"
                }]
            }, {    
                name: "เปลี่ยน E-mail Address",
                items: [{
                    link: "menu.changeemail",
                    param: "",
                    icon: "ion-ios-compose-outline",
                    header: "เปลี่ยน E-mail Address",
                    text: "เปลี่ยน E-mail Address"
                }]
            }, {
                name: "My Profile",
                items: [{
                    //     link: "#",
                    //     icon: "ion-ios-locked-outline",
                    //     header: "Security Deposits",
                    //     text: "View Current Security Deposit"
                    // }, {
                    link: "menu.userprofile",
                    param: "",
                    icon: "ion-ios-heart-outline",
                    header: "User Profile",
                    text: "View User Profile"
                }]
            }];
        };
        //
        factory.getMainMenusSUP = function() {
            return [{
                name: "ข้อมูลกรมธรรม์",
                items: [{
                    link: "menu.policypending",
                    param: "",
                    icon: "ion-ios-compose-outline",
                    header: "กรมธรรม์รอการอนุมัติ",
                    text: "สอบถามข้อมูลใบคำขอเอาประกันและกรมธรรม์ใหม่"
                }, {
                    link: "menu.policyquery",
                    param: "",
                    icon: "ion-ios-paper-outline",
                    header: "กรมธรรม์ที่มีผลบังคับและสิ้นสุด",
                    text: "สอบถามข้อมูลกรมธรรม์ทุกสถานะ"
                }, {
                    link: "menu.policymemo",
                    param: "",
                    icon: "ion-ios-browsers-outline",
                    header: "กรมธรรม์ที่มีการขอข้อมูลเพิ่มเติม",
                    text: "สอบถามข้อมูลกรมธรรม์ที่มีการขอข้อมูลเพิ่ม่เติม"
                }]
            }, {
                name: "โครงสร้างตัวแทน",
                items: [{
                    link: "menu.teamall",
                    param: "",
                    icon: "ion-ios-people-outline",
                    header: "โครงสร้างตัวแทน",
                    text: "ข้อมูลโครงสร้างตัวแทน"
                }, {
                    link: "menu.teamall_smprem",
                    param: "",
                    icon: "ion-social-bitcoin-outline",
                    header: "โครงสร้างตัวแทน-เบี้ยนำส่ง",
                    text: "ข้อมูลโครงสร้างตัวแทน-เบี้ยนำส่ง"
                }, {
                    link: "menu.teamall_isprem",
                    param: "",
                    icon: "ion-social-bitcoin-outline",
                    header: "โครงสร้างตัวแทน-เบี้ยอนุมัติ",
                    text: "ข้อมูลโครงสร้างตัวแทน-เบี้ยอนุมัติ"    
                }]
            }, {
                name: "ข้อมูล สท.5",
                    items: [{
                     //   link: "menu.st5onhand",
                     //   param: "",
                     //   icon: "ion-ios-browsers-outline",
                     //   header: "Temporary Receipts - On Hand",
                     //   text: "List of Temporary Receipts on Hand"
                    //},{
                     //   link: "menu.st5used",
                     //   param: "",
                     //   icon: "ion-ios-browsers-outline",
                     //   header: "Temporary Receipts - Used",
                     //   text: "List of Temporary Receipts Used"
                    //},{
                      //  link: "menu.st5pending",
                      //  param: "",
                      //  icon: "ion-ios-browsers-outline",
                      //  header: "Temporary Receipts - Pending Check",
                      //  text: "List of Temporary Receipts pending check"
                    //},{
                        link: "menu.st5agquery",
                        param: "",
                        icon: "ion-ios-people-outline",
                        header: "ข้อมูล สท.5 ของผู้บริหาร",
                        text: "สอบถามข้อมูล สท.5 ของผู้บริหาร"
                }]
            }, {
                name: "ข้อมูลแบบประกัน",
                items: [{
                    link: "menu.productlist",
                    param: "",
                    icon: "ion-ios-flag-outline",
                    header: "แบบประกัน",
                    text: "สอบถามข้อมูลแบบประกัน"
                }]
            }, {
                name: "ประกาศ/คำสั่ง/กจญ",
                items: [{
                    link: "menu.announcement",
                    param: "",
                    icon: "ion-ios-mic-outline",
                    header: "ข้อมูล ประกาศ/คำสั่ง/กจญ",
                    text: "สอบถามข้อมูล ประกาศ/คำสั่ง/กจญ"
                }]
            }, {
                name: "ฝึกอบรม/ใบอนุญาตตัวแทน",
                items: [{
                    link: "menu.trainingmonth",
                    param: "",
                    icon: "ion-ios-list-outline",
                    header: "ตารางอบรมประจำเดือน",
                    text: "สอบถามข้อมูลตารางอบรมประจำเดือน"
                }, {
                    link: "menu.traininglicense",
                    param: "",
                    icon: "ion-ios-pie-outline",
                    header: "ใบอนุญาตตัวแทน",
                    text: "ข้อมูลใบอนุญาตตัวแทนต่างๆ"
                }]
            }, {
                name: "Download Reports/Forms",
                items: [{
                    link: "menu.downloadmanual",
                    param: "",
                    icon: "ion-ios-cloud-download-outline",
                    header: "คู่มือ/เอกสาร",
                    text: "ข้อมูลคู่มือ/เอกสาร ต่างๆ"
                }, {
                    link: "menu.downloadformob",
                    param: "",
                    icon: "ion-ios-cloud-download-outline",
                    header: "แบบฟอร์มประกันชีวิตทั่วไป",
                    text: "เอกสารแบบฟอร์มสำหรับประกันชีวิตทั่วไป"
                }, {
                    link: "menu.downloadformtk",
                    param: "",
                    icon: "ion-ios-cloud-download-outline",
                    header: "แบบฟอร์มสมาชิกตะกาฟุล",
                    text: "เอกสารแบบฟอร์มสำหรับสมาชิกตะกาฟุล"
                }]
            }, {    
                name: "เปลี่ยนรหัสผ่าน",
                items: [{
                    link: "menu.changepwd",
                    param: "",
                    icon: "ion-ios-compose-outline",
                    header: "เปลี่ยนรหัสผ่าน",
                    text: "เปลี่ยนรหัสผ่าน"
                }]
            }, {    
                name: "เปลี่ยน E-mail Address",
                items: [{
                    link: "menu.changeemail",
                    param: "",
                    icon: "ion-ios-compose-outline",
                    header: "เปลี่ยน E-mail Address",
                    text: "เปลี่ยน E-mail Address"
                }]
            }, {
                name: "My Profile",
                items: [{
                    //     link: "#",
                    //     icon: "ion-ios-locked-outline",
                    //     header: "Security Deposits",
                    //     text: "View Current Security Deposit"
                    // }, {
                    link: "menu.userprofile",
                    param: "",
                    icon: "ion-ios-heart-outline",
                    header: "User Profile",
                    text: "View User Profile"
                }]
            }];
        };
        //
        //
        factory.getMainMenusBRG = function() {
            return [{
                name: "ข้อมูลกรมธรรม์",
                items: [{
                    link: "menu.policypending",
                    param: "",
                    icon: "ion-ios-compose-outline",
                    header: "กรมธรรม์รอการอนุมัติ",
                    text: "สอบถามข้อมูลใบคำขอเอาประกันและกรมธรรม์ใหม่"
                }, {
                    link: "menu.policyquery",
                    param: "",
                    icon: "ion-ios-paper-outline",
                    header: "กรมธรรม์ที่มีผลบังคับและสิ้นสุด",
                    text: "สอบถามข้อมูลกรมธรรม์ทุกสถานะ"
                }, {
                    link: "menu.policymemo",
                    param: "",
                    icon: "ion-ios-browsers-outline",
                    header: "กรมธรรม์ที่มีการขอข้อมูลเพิ่มเติม",
                    text: "สอบถามข้อมูลกรมธรรม์ที่มีการขอข้อมูลเพิ่ม่เติม"
                }]
            }, {
                name: "ประกาศ/คำสั่ง/กจญ",
                items: [{
                    link: "menu.announcement",
                    param: "",
                    icon: "ion-ios-mic-outline",
                    header: "ข้อมูล ประกาศ/คำสั่ง/กจญ",
                    text: "สอบถามข้อมูล ประกาศ/คำสั่ง/กจญ"
                }]
            }, {
                name: "Download Reports/Forms",
                items: [{
                    link: "menu.downloadmanual",
                    param: "",
                    icon: "ion-ios-cloud-download-outline",
                    header: "คู่มือ/เอกสาร",
                    text: "ข้อมูลคู่มือ/เอกสาร ต่างๆ"
                }, {
                    link: "menu.downloadformob",
                    param: "",
                    icon: "ion-ios-cloud-download-outline",
                    header: "แบบฟอร์มประกันชีวิตทั่วไป",
                    text: "เอกสารแบบฟอร์มสำหรับประกันชีวิตทั่วไป"
                }, {
                    link: "menu.downloadformtk",
                    param: "",
                    icon: "ion-ios-cloud-download-outline",
                    header: "แบบฟอร์มสมาชิกตะกาฟุล",
                    text: "เอกสารแบบฟอร์มสำหรับสมาชิกตะกาฟุล"
                }]
            }, {
                name: "My Profile",
                items: [{
                    //     link: "#",
                    //     icon: "ion-ios-locked-outline",
                    //     header: "Security Deposits",
                    //     text: "View Current Security Deposit"
                    // }, {
                    link: "menu.userprofile",
                    param: "",
                    icon: "ion-ios-heart-outline",
                    header: "User Profile",
                    text: "View User Profile"
                }]
            }];
        };
        //
        factory.getMainMenusCUS = function() {
            return [{
                name: "ข้อมูลกรมธรรม์",
                items: [{
                    link: "menu.policypending",
                    param: "",
                    icon: "ion-ios-compose-outline",
                    header: "กรมธรรม์รอการอนุมัติ",
                    text: "สอบถามข้อมูลใบคำขอเอาประกันและกรมธรรม์ใหม่"
                }, {
                    link: "menu.policyquery",
                    param: "",
                    icon: "ion-ios-paper-outline",
                    header: "กรมธรรม์ที่มีผลบังคับและสิ้นสุด",
                    text: "สอบถามข้อมูลกรมธรรม์ทุกสถานะ"
                }, {
                    link: "menu.policymemo",
                    param: "",
                    icon: "ion-ios-browsers-outline",
                    header: "กรมธรรม์ที่มีการขอข้อมูลเพิ่มเติม",
                    text: "สอบถามข้อมูลกรมธรรม์ที่มีการขอข้อมูลเพิ่ม่เติม"
                }]
            }, {    
                name: "เปลี่ยนรหัสผ่าน",
                items: [{
                    link: "menu.changepwd",
                    param: "",
                    icon: "ion-ios-compose-outline",
                    header: "เปลี่ยนรหัสผ่าน",
                    text: "เปลี่ยนรหัสผ่าน"
                }]
            }, {    
                name: "เปลี่ยน E-mail Address",
                items: [{
                    link: "menu.changeemail",
                    param: "",
                    icon: "ion-ios-compose-outline",
                    header: "เปลี่ยน E-mail Address",
                    text: "เปลี่ยน E-mail Address"
                }]
            }, {
                name: "My Profile",
                items: [{
                    link: "menu.userprofile",
                    param: "",
                    icon: "ion-ios-heart-outline",
                    header: "User Profile",
                    text: "View User Profile"
                }]
            }];
        };
        //
        factory.openPDF = function(pdfUrl) {
            // open inappbrowser
            // option is set in ifame-state
            // resize is set in platform/ios/ifame2/config.xml
            //$cordovaInAppBrowser.open(pdfUrl, '_blank');
            $window.open(pdfUrl, "_system", "location=no");            
            //
            // var options = {
            //     location: 'no',
            //     clearcache: 'yes',
            //     toolbar: 'yes'
            // };
            //
            // document.addEventListener(function(pdfUrl, options) {
            //     $cordovaInAppBrowser.open(pdfUrl, '_blank', options)
            //         .then(function(event) {
            //             // success
            //         })
            //         .catch(function(event) {
            //             alert('error ->' + event);
            //         });
            //     //
            //     $cordovaInAppBrowser.close();
            // }, false);                    
            //
        };
        factory.openWeb = function(webUrl) {
            //$cordovaInAppBrowser.open(webUrl, '_blank');
            $window.open(webUrl, "_system", "location=no");            
        };
        // $rootScope.$on('$cordovaInAppBrowser:loadstart', function(e, event) {

        // });
        // //
        // $rootScope.$on('$cordovaInAppBrowser:loadstop', function(e, event) {
        //     // insert CSS via code / file
        //     // $cordovaInAppBrowser.insertCSS({
        //     //     code: 'body {background-color:blue;}'
        //     // });

        //     // insert Javascript via code / file
        //     // $cordovaInAppBrowser.executeScript({
        //     //     file: 'script.js'
        //     // });
        // });
        // //
        // $rootScope.$on('$cordovaInAppBrowser:loaderror', function(e, event) {

        // });
        // //
        // $rootScope.$on('$cordovaInAppBrowser:exit', function(e, event) {

        // });
        //
        // other services
        //
        return factory;
    }
]);