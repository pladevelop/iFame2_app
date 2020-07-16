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
                header: "POLICYHOLDER INFO",
                items: [{
                    label: "Insured Name",
                    value: d.INSUREDNM + "  (" + d.INSUREDSEX + ")"
                }, {
                    label: "BirthDate",
                    value: d.INSUREDBDT + "  (" + d.INSUREDAGE + ")"
                }, {
                    label: "Personal ID",
                    value: d.INSUREDTAXID
                }, {
                    label: "Occupation",
                    value: d.INSUREDOCCU
                }, {
                    label: "Address",
                    value: d.ADDRESS
                }]
            }, {
                header: "PAYOR INFO",
                items: [{
                    label: "Payor Name",
                    value: d.OWNERNM
                }, {
                    label: "BirthDate",
                    value: d.OWNERDT + "  (" + d.OWNERAGE + ")"
                }]
            }, {
                header: "POLICY INFO",
                items: [{
                    label: "Plan",
                    value: d.PLANDESC
                }, {
                    label: "Effective Date",
                    value: d.ISSEFFDTE
                }, {
                    label: "Issue Date",
                    value: d.PRTDATE
                }, {
                    label: "Ceased Date",
                    value: d.CEASEDTE
                }, {
                    label: "Status",
                    value: d.POLCSTS + " (" + d.STSCHGDTE + ")"
                }, {
                    label: "Freelook End",
                    value: d.FLENDDT
                }, {
                    label: "Bill Mode",
                    value: d.BILLMODE
                }, {
                    label: "Modal Premium",
                    value: d.MODEPREM
                }, {
                    label: "Premium Excess",
                    value: d.PREMSUSP
                }]
            }, {
                header: "BRANCH/AGENT",
                items: [{
                    label: "Branch",
                    value: d.SERVBRN
                }, {
                    label: "Agent",
                    value: d.SERVAGTNM
                }, {
                    label: "License No",
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
                        label: "SumAssured",
                        value: cvg.SUMINSURED
                    }, {
                        label: "Status",
                        value: cvg.CVGCSTS
                    }, {
                        label: "Effective Date",
                        value: cvg.CVGEFFDTE
                    }, {
                        label: "Modal Premium",
                        value: cvg.MODEPREM
                    }, {
                        label: "CVG Paid",
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
                    label: "การเสียชีวิต สูญเสียอวัยวะ สายตา หรือทุพพลภาพถาวรสิ้นเชิง (Basic Coverage)",
                    value: d.LIFSTDSM 
                }, {
                    label: "การเสียชีวิต สูญเสียอวัยวะ สายตา หรือทุพพลภาพถาวรสิ้นเชิง (Additional Coverage)",
                    value: d.MTRSTDSM
                }, {
                    label: "การฆาตรกรรม ลอบทำร้าย (Basic Coverage)",
                    value: d.LIFRCCSM
                }, {
                    label: "การฆาตรกรรม ลอบทำร้าย (Additional Coverage)",
                    value: d.MTRRCCSM
                }, {
                    label: "ทุพพลภาพชั่วคราวสิ้นเชิง (Basic Coverage)",
                    value: d.LIFPDSM 
                }, {
                    label: "ทุพพลภาพชั่วคราวสิ้นเชิง (Additional Coverage)",
                    value: d.MTRPDSM 
                }, {
                    label: "ทุพพลภาพชั่วคราวบางส่วน (Basic Coverage)",
                    value: d.LIFPPSM 
                }, {
                    label: "ทุพพลภาพชั่วคราวบางส่วน (Additional Coverage)",
                    value: d.MTRPPSM 
                }, {
                    label: "ค่ารักษาพยาบาล (Basic Coverage)",
                    value: d.LIFHSSM 
                }, {
                    label: "ค่ารักษาพยาบาล (Additional Coverage)",
                    value: d.MTRHSSM 
                }, {
                    label: "การโดยสารในฐานะผู้โดยสารอากาศยานที่มิได้ประกอบการโดยสายการบินพาณิชย์",
                    value: d.AIRSM 
                }, {
                    label: "การนัดหยุดงาน การจลาจล และการที่ประชาชนก่อความวุ่นวายถึงขนากลุกฮือขึ้นต่อต้านรัฐบาล",
                    value: d.RCCSM  
                }, {
                    label: "การเล่นหรือแข่งขันกีฬาอันตราย",
                    value: d.SPRSM    
                }, {
                    label: "การสงคราม",
                    value: d.WARSM    
                }]
            }]; 
        };
        //
        factory.setPaymentsInfo = function(pmts) {
            var data = [];
            angular.forEach(pmts, function(pmt) {
                var d = {
                    header: "Receipt# " + pmt.RCPTID + " (Status: " + pmt.PMTSTS + ")",
                    items: [{
                        label: "Temp.Receipt Date",
                        value: pmt.TMPRCPTDT
                    }, {
                        label: "Due Date",
                        value: pmt.RCPTSTRD + "  (YY/PP=" + pmt.RCPTPERIOD + ")"
                    }, {
                        label: "Process Date",
                        value: pmt.PMTDT
                    }, {
                        label: "Paid Amount",
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
                    header: "Paid Date " + clm.CLMMS_PY_DT,
                    items: [{
                        label: "Request Amt. ",
                        value: clm.CLMRQ_RQ_AM + " (Incident Date: " + clm.CLMMS_DT_AC + ")"
                    }, {
                        label: "Approved Amt. ",
                        value: clm.CLMRQ_AP_AM + " (Approve Date: " + clm.CLMMS_DT_AP + ")"
                    }, {
                        label: "Paid by ",
                        value: clm.CLMMS_PY_CD + "  (Status: " + clm.CLMMS_AP_CD + ")"
                    }, {
                        label: "Claim Reason: ",
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
                    header: "Type : " + memo.REQTYP + "  (Status: " + memo.STATCD + ")",
                    items: [{
                        label: "Description:",
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