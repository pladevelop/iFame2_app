// Factory - policyFactory
//
// created : 2/5/2015
// author  : NJ
//
/// <reference path="../lib/ionic/js/ionic.bundle.js" />
//
ifameApp.factory('policyFactory', [
    'appConstants', 'appGlobals', 'ifamedbFactory', 'httpFactory',
    function(appConstants, appGlobals, ifamedbFactory, httpFactory) {
        var self = this;
        var factory = {};
        //
        factory.getPolAll = function(usrCode,usrGroup,polId,insuredNm,insuredSn) {
            var action = 'webqry/getPolicies/';
            var data = {
                    userId: usrCode,
                    userGroup: usrGroup,
                    PolicyID: polId,
                    InsuredNM: insuredNm,
                    InsuredSur: insuredSn
                };
            var promise = httpFactory.apiPost(action,data);
            return promise;
        };
        factory.getPolicyUnder = function(usrCode,usrGroup,polId,insuredNm,insuredSn) {
            var action = 'webqry/getPolicyUnder/';
            var data = {
                    userId: usrCode,
                    userGroup: usrGroup,
                    PolicyID: polId,
                    InsuredNM: insuredNm,
                    InsuredSur: insuredSn
                };
            var promise = httpFactory.apiPost(action,data);
            return promise;
        };
        //
        factory.getPolPending = function(agCode,agGroup) {
            var action = 'webqry/getPoliciesNB/';
            var data = {
                    userId: agCode,
                    userGroup: agGroup,
                    brrcvdtstart: '',
                    brrcvdtend: '',
                    InsuredNM: '',
                    InsuredSur: '',
                    NotApprovedSts: 'Y'
                };
            var promise = httpFactory.apiPost(action,data);
            return promise;
        };
        factory.getPolPayAndTerm = function() {
            var promise = ifamedbFactory.getPolicies();
            return promise;
        };
        //
        factory.getPolOverdue = function(agCode) {
            var action = 'webqry/getPolicyByOverDue/';
            var data = {
                UsrID: agCode
            };
            var promise = httpFactory.apiPost(action, data);
            return promise;
        };
        //
        factory.getPolNextDue = function(agCode,ptd,inclTeam) {
            var action = 'webqry/getPolicyByDueAll/';
            var data = {
                UsrID: agCode,
                PaidToDate: ptd,
                AgentUnder: inclTeam
            };
            var promise = httpFactory.apiPost(action, data);
            return promise;
        };
        //
        factory.getPolMemos = function(agCode, polId) {
            var action = 'webqry/getReqDet/';
            var data = {
                UserID: agCode,
                PolicyID: polId
            };
            var promise = httpFactory.apiPost(action,data);
            return promise;
        };
        //
        factory.getAgtMemos = function(agCode, agGroup) {
            var action = 'webqry/getMemoCTOFCash/';
            var data = {
                AgentID: agCode,
                GroupID: agGroup
            };
            var promise = httpFactory.apiPost(action,data);
            return promise;
        };
        //
        factory.getPolDetails = function(searchPolId) {
            //alert('searh = ' + searchPolId);
            var action = 'webqry/getPolicyDetail/';
            var data = {
                policyID: searchPolId
            };
            var promise = httpFactory.apiPost(action, data);
            return promise;
        };
        //
        factory.getCvgDet = function(searchPolId) {
            var action = 'webqry/getCvgDet/';
            var data = {
                policyID: searchPolId
            };
            var promise = httpFactory.apiPost(action, data);
            return promise;
        };
        //
        factory.getCvgDetPA = function (searchPolId) {
            var action = 'webqry/getPacvgd/';
            var data = {
                PolicyID: searchPolId
            };
            var promise = httpFactory.apiPost(action, data);
            return promise;
        };
        //
        factory.getPolPayments = function(searchPolId) {
            var action = 'webqry/getPayment/';
            var data = {
                PolicyID: searchPolId
            };
            var promise = httpFactory.apiPost(action, data);
            return promise;
        };
        //
        factory.getPolClaims = function(searchPolId) {
            var action = 'webqry/getClaim/';
            var data = {
                PolicyID: searchPolId
            };
            var promise = httpFactory.apiPost(action, data);
            return promise;
        };
        //
        factory.setPolicyInfo = function(d) {
            return [{
                header: "รายละเอียดผู้เอาประกัน",
                items: [{
                    label: "ชื่อผู้เอาประกัน ",
                    value: d.INSUREDNM + "  (" + d.INSUREDSEX + ")"
                }, {
                    label: "วันเกิดผู้เอาประกัน ",
                    value: d.INSUREDBDT + "  (" + d.INSUREDAGE + ")"
                }, {
                    label: "หมายเลขบัตรประจำตัวประชาชน ",
                    value: d.INSUREDTAXID
                }, {
                    label: "อาชีพ ",
                    value: d.INSUREDOCCU
                }, {
                    label: "ที่อยู่ ",
                    value: d.ADDRESS
                }]
            }, {
                header: "รายละเอียดผู้ชำระเบี้ย",
                items: [{
                    label: "ชื่อผู้ชำระเบี้ย ",
                    value: d.OWNERNM
                }, {
                    label: "วันเกิดผู้ชำระเบี้ย ",
                    value: d.OWNERDT + "  (" + d.OWNERAGE + ")"
                }]
            }, {
                header: "รายละเอียดกรมธรรม์",
                items: [{
                    label: "แบบประกัน ",
                    value: d.PLANDESC
                }, {
                    label: "วันที่มีผลบังคับ ",
                    value: d.ISSEFFDTE
                }, {
                    label: "วันที่ออกกรมธรรม์ ",
                    value: d.PRTDATE
                }, {
                    label: "วันที่สิ้นสุดสัญญา ",
                    value: d.CEASEDTE
                }, {
                    label: "สถานะ ",
                    value: d.POLCSTS + " (" + d.STSCHGDTE + ")"
                }, {
                    label: "Freelook End ",
                    value: d.FLENDDT
                }, {
                    label: "ระยะเวลาชำระเบี้ย ",
                    value: d.BILLMODE
                }, {
                    label: "เบี้ยประกัน ",
                    value: d.MODEPREM
                }, {
                    label: "วันที่ครบกำหนดชำระเบี้ย ",
                    value: d.PAIDTODT
                }, {
                    label: "Premium Excess ",
                    value: d.PREMSUSP
                }]
            }, {
                header: "รายละเอียดสาขา/ตัวแทน",
                items: [{
                    label: "สาขาที่ให้บริการ ",
                    value: d.SERVBRN
                }, {
                    label: "ตัวแทน ",
                    value: d.SERVAGTNM
                }, {
                    label: "เลขที่ใบอนุญาติ ",
                    value: d.AGTLICNO
                }]
            }];
        };
        //
        factory.setCoveragesInfo = function(cvgs) {
            var data = [];
            angular.forEach(cvgs, function(cvg) {
                var d = {
                    header: cvg.PLANDESC,
                    items: [{
                        label: "ทุนประกัน ",
                        value: cvg.SUMINSURED
                    }, {
                        label: "สถานะ ",
                        value: cvg.CVGCSTS
                    }, {
                        label: "วันที่มีผลบังคับ ",
                        value: cvg.CVGEFFDTE
                    }, {
                        label: "เบี้ยประกัน ",
                        value: cvg.MODEPREM
                    }, {
                        label: "ระยะเวลาเอาประกันภัย/ระยะเวลาชำระเบี้ย ",
                        value: cvg.COVPAID
                    }]
                };
                data.push(d);
            });
            return data;
        };
        //PA
        factory.setCoverageInfo = function (d) {
            return [{
                header: "Coverage INFO",
                items: [{
                    label: "การเสียชีวิต สูญเสียอวัยวะ สายตา หรือทุพพลภาพถาวรสิ้นเชิง (Basic Coverage) ",
                    value: d.LIFSTDSM 
                }, {
                    label: "การเสียชีวิต สูญเสียอวัยวะ สายตา หรือทุพพลภาพถาวรสิ้นเชิง (Additional Coverage) ",
                    value: d.MTRSTDSM
                }, {
                    label: "การฆาตรกรรม ลอบทำร้าย (Basic Coverage) ",
                    value: d.LIFRCCSM
                }, {
                    label: "การฆาตรกรรม ลอบทำร้าย (Additional Coverage) ",
                    value: d.MTRRCCSM
                }, {
                    label: "ทุพพลภาพชั่วคราวสิ้นเชิง (Basic Coverage) ",
                    value: d.LIFPDSM 
                }, {
                    label: "ทุพพลภาพชั่วคราวสิ้นเชิง (Additional Coverage) ",
                    value: d.MTRPDSM 
                }, {
                    label: "ทุพพลภาพชั่วคราวบางส่วน (Basic Coverage) ",
                    value: d.LIFPPSM 
                }, {
                    label: "ทุพพลภาพชั่วคราวบางส่วน (Additional Coverage) ",
                    value: d.MTRPPSM 
                }, {
                    label: "ค่ารักษาพยาบาล (Basic Coverage) ",
                    value: d.LIFHSSM 
                }, {
                    label: "ค่ารักษาพยาบาล (Additional Coverage) ",
                    value: d.MTRHSSM 
                }, {
                    label: "การโดยสารในฐานะผู้โดยสารอากาศยานที่มิได้ประกอบการโดยสายการบินพาณิชย์ ",
                    value: d.AIRSM 
                }, {
                    label: "การนัดหยุดงาน การจลาจล และการที่ประชาชนก่อความวุ่นวายถึงขนากลุกฮือขึ้นต่อต้านรัฐบาล ",
                    value: d.RCCSM  
                }, {
                    label: "การเล่นหรือแข่งขันกีฬาอันตราย ",
                    value: d.SPRSM    
                }, {
                    label: "การสงคราม ",
                    value: d.WARSM    
                }]
            }]; 
        };
        //
        factory.setPaymentsInfo = function(pmts) {
            var data = [];
            angular.forEach(pmts, function(pmt) {
                var d = {
                    header: "เลขที่ใบเสร็จ# " + pmt.RCPTID + " (สถานะ : " + pmt.PMTSTS + ")",
                    items: [{
                        label: "วันที่ชำระเบี้ย ",
                        value: pmt.TMPRCPTDT
                    }, {
                        label: "วันครบกำหนดชำระ ",
                        value: pmt.RCPTSTRD + "  (YY/PP=" + pmt.RCPTPERIOD + ")"
                    }, {
                        label: "วันที่ประมวลผล ",
                        value: pmt.PMTDT
                    }, {
                        label: "เบี้ยประกัน ",
                        value: pmt.PREMAMT + "  (" + pmt.MTHDESC + ")"
                    }]
                };
                data.push(d);
            });
            return data;
        };
        //
        factory.setClaimsInfo = function(clms) {
            var data = [];
            angular.forEach(clms, function(clm) {
                var d = {
                    header: "วันที่จ่าย " + clm.CLMMS_PY_DT,
                    items: [{
                        label: "จำนวนเงินที่เรียกร้อง ",
                        value: clm.CLMRQ_RQ_AM + " (วันที่เกิดเหตุ : " + clm.CLMMS_DT_AC + ")"
                    }, {
                        label: "จำนวนเงินที่อนุมัติ ",
                        value: clm.CLMRQ_AP_AM + " (วันที่อนุมัติ : " + clm.CLMMS_DT_AP + ")"
                    }, {
                        label: "จ่ายโดย ",
                        value: clm.CLMMS_PY_CD + "  (สถานะ : " + clm.CLMMS_AP_CD + ")"
                    }, {
                        label: "สาเหตุ ",
                        value: clm.CLMMS_IJ_TX
                    }]
                };
                data.push(d);
            });
            return data;
        };
        // 
        factory.setMemosInfo = function(memos) {
            var data = [];
            angular.forEach(memos, function(memo) {
                var d = {
                    header: "ประเภท : " + memo.REQTYP + "  (สถานะ : " + memo.STATCD + ")",
                    items: [{
                        label: "รายละเอียด ",
                        value: memo.REQTDESC
                    }]
                };
                data.push(d);
            });
            return data;
        };
        //
        //
        return factory;
    }
]);