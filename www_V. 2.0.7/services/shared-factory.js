// Factory - sharedFactory
//
// created : 2/5/2015
// author  : NJ
//
/// <reference path="../lib/ionic/js/ionic.bundle.js" />
//
// *** SHAREDFACTORY CANNOT INJECT SESSIONFACTORY --> CAUSE LOOP ERROR
ifameApp.factory('sharedFactory', [
    '$ionicPopup', '$window', 'appConstants', 'appGlobals',
    function($ionicPopup, $window, appConstants, appGlobals) {
        var factory = {};
        //
        factory.showMsg = function(msgTitle, msgText) {
            var a = $ionicPopup.alert({
                title: msgTitle,
                template: msgText
            });
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
                value: (usrId.length == 0 ? 'NOT LOGIN' : usrId ) 
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
            return ("Click here to view Company's latest activities");
        };
        //
        factory.getMainMenusAGT = function() {
            return [{
                    name: "Policy Information",
                    items: [{
                        link: "menu.policypending", 
                        param: "",
                        icon: "ion-ios-compose-outline",
                        header: "Pending Policies",
                        text: "Display policies with status pending for issues"
                    }, {
                        link: "menu.policyquery",
                        param: "",
                        icon: "ion-ios-paper-outline",
                        header: "Inforce/Terminated Policies",
                        text: "Display all policy status"
                    }, {
                        link: "menu.policyoverdue",
                        param: "",
                        icon: "ion-ios-alarm-outline",
                        header: "Overdue Policies",
                        text: "Display list of policies with premium overdue"
                    }, {
                    //     link: "#",
                    //     icon: "ion-ios-bookmarks-outline",
                    //     header: "Next Due Policies",
                    //     text: "Display list of policies almost dues"
                    // }, {
                        link: "menu.policymemo",
                        param: "",
                        icon: "ion-ios-browsers-outline",
                        header: "Memo/Counter Offer",
                        text: "Display list of Memo or Counter Offer"
                    }]
                }, {
                    name: "Team Information",
                    items: [{
                        link: "menu.teamprofile",
                        param: "",
                        icon: "ion-ios-person-outline",
                        header: "Personal Profile",
                        text: "Display personal profile"
                    }, {
                        link: "menu.teamunder",
                        param: "agcode",
                        icon: "ion-ios-people-outline",
                        header: "Team-Downline",
                        text: "Display downline agency"
                    }]
                // }, {
                //     name: "Premium Submission Information",
                //     items: [{
                //         link: "#",
                //         icon: "ion-ios-pricetag-outline",
                //         header: "Submission - Self",
                //         text: "Show personal's premium submission for this year"
                //     }, {
                //         link: "#",
                //         icon: "ion-ios-pricetags-outline",
                //         header: "Submission - Team",
                //         text: "Show team's premium submission for this year"
                //     }]
                }, {
                    name: "Temporary Receipts",
                    items: [{
                        link: "menu.st5onhand",
                        param: "",
                        icon: "ion-ios-browsers-outline",
                        header: "Temporary Receipts - On Hand",
                        text: "List of Temporary Receipts on Hand"
                    },{
                        link: "menu.st5used",
                        param: "",
                        icon: "ion-ios-browsers-outline",
                        header: "Temporary Receipts - Used",
                        text: "List of Temporary Receipts Used"
                    },{
                        link: "menu.st5pending",
                        param: "",
                        icon: "ion-ios-browsers-outline",
                        header: "Temporary Receipts - Pending Check",
                        text: "List of Temporary Receipts pending check"
                    }]
                }, {
                    name: "Customer Information",
                    items: [{
                    //     link: "#",
                    //     icon: "ion-ios-personadd-outline",
                    //     header: "Customers List",
                    //     text: "List of all customers"
                    // }, {
                        link: "menu.custbirthday",
                        param: "",
                        icon: "ion-ios-wineglass-outline",
                        header: "Customers Birthday",
                        text: "List of customer with birthday in selected month"
                    // }, {
                    //     link: "#",
                    //     icon: "ion-ios-lightbulb-outline",
                    //     header: "Customers Analysis",
                    //     text: "Analysis of customer and existing policies"
                    }]
                }, {
                    name: "Products Information",
                    items: [{
                        link: "menu.productlist",
                        param: "",
                        icon: "ion-ios-flag-outline",
                        header: "Products List",
                        text: "List of Products"
                    }]
                }, {
                    name: "Company's Announcement",
                    items: [{
                        link: "menu.announcement",
                        param: "",
                        icon: "ion-ios-mic-outline",
                        header: "List of Announcement",
                        text: "List of all announcements related to agency force."
                    }]
                }, {
                    name: "Training and Licensing",
                    items: [{
                    //     link: "#",
                    //     icon: "ion-ios-list-outline",
                    //     header: "Agency Level",
                    //     text: "Training Schedule for agency level"
                    // }, {
                    //     link: "#",
                    //     icon: "ion-ios-pie-outline",
                    //     header: "AL/AE Level",
                    //     text: "Training Schedule for AL/AE level"
                    // }, {
                    //     link: "#",
                    //     icon: "ion-ios-pulse",
                    //     header: "Financial Advisory",
                    //     text: "Training Schedule for Financial Advisory"
                    // },{
                        link: "menu.trainingmonth",
                        param: "",
                        icon: "ion-ios-list-outline",
                        header: "This Month Training Schedule",
                        text: "Training Schedule for the month"
                    },{
                        link: "menu.traininglicense",
                        param: "",
                        icon: "ion-ios-pie-outline",
                        header: "Agency License/Renewal",
                        text: "Information about Agency License Training"
                    }]
                }, {
                    name: "Download Reports/Forms",
                    items: [{
                    //     link: "menu.downloadreport",
                    //     param: "",
                    //     icon: "ion-ios-download-outline",
                    //     header: "Reports",
                    //     text: "Download Reports"
                    // }, {
                        link: "menu.downloadmanual",
                        param: "",
                        icon: "ion-ios-cloud-download-outline",
                        header: "Manuals/Documents",
                        text: "List of Manual and Documents"
                    }, {
                        link: "menu.downloadformob",
                        param: "",
                        icon: "ion-ios-cloud-download-outline",
                        header: "Forms for Non-Takaful",
                        text: "List of Forms for Non-Takaful"
                    // }, {
                    //     link: "menu.downloadformtk",
                    //     param: "",
                    //     icon: "ion-ios-cloud-download-outline",
                    //     header: "Forms for Takaful",
                    //     text: "List of Forms for Takaful"
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
                }

            ];
        };
        //
        factory.getMainMenusADM = function() {
            return [{
                    name: "Policy Information",
                    items: [{
                        link: "menu.policypending", 
                        param: "",
                        icon: "ion-ios-compose-outline",
                        header: "Pending Policies",
                        text: "Display policies with status pending for issues"
                    }, {
                        link: "menu.policyquery",
                        param: "",
                        icon: "ion-ios-paper-outline",
                        header: "Inforce/Terminated Policies",
                        text: "Display all policy status"
                    }, {
                        link: "menu.policymemo",
                        param: "",
                        icon: "ion-ios-browsers-outline",
                        header: "Memo/Counter Offer",
                        text: "Display list of Memo or Counter Offer"
                    }]
                }, {
                    name: "Team Information",
                    items: [{
                        link: "menu.teamall",
                        param: "",
                        icon: "ion-ios-people-outline",
                        header: "Team-All",
                        text: "Display all agency teams"
                    }]
                }, {
                    name: "Temporary Receipts",
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
                        header: "Temporary Receipts - ST5 by Agent Leader",
                        text: "List of Agent Leader"
                    }]
                }, {
                    name: "Products Information",
                    items: [{
                        link: "menu.productlist",
                        param: "",
                        icon: "ion-ios-flag-outline",
                        header: "Products List",
                        text: "List of Products"
                    }]
                }, {
                    name: "Company's Announcement",
                    items: [{
                        link: "menu.announcement",
                        param: "",
                        icon: "ion-ios-mic-outline",
                        header: "List of Announcement",
                        text: "List of all announcements related to agency force."
                    }]
                }, {
                    name: "Training and Licensing",
                    items: [{
                        link: "menu.trainingmonth",
                        param: "",
                        icon: "ion-ios-list-outline",
                        header: "This Month Training Schedule",
                        text: "Training Schedule for the month"
                    },{
                        link: "menu.traininglicense",
                        param: "",
                        icon: "ion-ios-pie-outline",
                        header: "Agency License/Renewal",
                        text: "Information about Agency License Training"
                    }]
                }, {
                    name: "Download Reports/Forms",
                    items: [{
                    //     link: "menu.downloadreport",
                    //     param: "",
                    //     icon: "ion-ios-download-outline",
                    //     header: "Reports",
                    //     text: "Download Reports"
                    // }, {
                        link: "menu.downloadmanual",
                        param: "",
                        icon: "ion-ios-cloud-download-outline",
                        header: "Manuals/Documents",
                        text: "List of Manual and Documents"
                    }, {
                        link: "menu.downloadformob",
                        param: "",
                        icon: "ion-ios-cloud-download-outline",
                        header: "Forms for Non-Takaful",
                        text: "List of Forms for Non-Takaful"
                    // }, {
                    //     link: "menu.downloadformtk",
                    //     param: "",
                    //     icon: "ion-ios-cloud-download-outline",
                    //     header: "Forms for Takaful",
                    //     text: "List of Forms for Takaful"
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
                }
            ];
        };
        // other services
        //
        return factory;
    }
]);
