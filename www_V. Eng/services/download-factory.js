// Factory - policyFactory
//
// created : 2/5/2015
// author  : NJ
//
/// <reference path="../lib/ionic/js/ionic.bundle.js" />
//
ifameApp.factory('downloadFactory', [
    'appConstants', 'appGlobals', 'httpFactory',
    function(appConstants, appGlobals, httpFactory) {
        var factory = {};
        //
        var downloadUrl = "http://centerapi.philliplife.com/salesrwd/";
        //
        //
        factory.getAgtStatement = function(agCode) {
            var action = 'webqry/getAgtStatement/';
            var data = {
                AgCode: agCode
            };
            var promise = httpFactory.apiPost(action, data);
            return promise;
        };
        factory.getOBFormUW = function() {
            var action = 'webqry/getFormob/';
            var data = {};
            var promise = httpFactory.apiPost(action, data);
            return promise;
        };
        factory.getTKFormUW = function() {
            var action = 'webqry/getFormtk/';
            var data = {};
            var promise = httpFactory.apiPost(action, data);
            return promise;
        };
        factory.getReportsAG = function(usrCode) {
            return [{
                id: "01",
                codefm: "REP-AG001",
                namefm: "Agent Statements ",
                filename: ""//http://center.philliplife.com/qagt/AGNStatement/MDA5OTMzNTI=.pdf"
            }];
        };
        //
        factory.getManualsMK = function() {
            return [{
                id: "01",
                codefm: "MAN-MK001",
                namefm: "ปกคู่มืออัตราเบี้ย (28/10/2557) ",
                filename: downloadUrl + "download/255710ปกQuickRate.pdf"
            }, {
                id: "02",
                codefm: "MAN-MK002",
                namefm: "คู่มืออัตราเบี้ย (Quick Rate) (31/03/2558) ",
                filename: downloadUrl + "download/255803QuickRate.pdf"
            }, {
                id: "03",
                codefm: "MAN-MK003",
                namefm: "ปกอัตราเงินสมทบตะกาฟุล (15/12/2557) ",
                filename: downloadUrl + "download/C_QuickRate_Takaful.pdf"
            }, {
                id: "04",
                codefm: "MAN-MK004",
                namefm: "อัตราเงินสมทบตะกาฟุล (15/12/2557)  ",
                filename: downloadUrl + "download/QuickRate_Takaful.pdf"
            }];
        };
        factory.getManualsUW = function() {
            return [{
                id: "01",
                codefm: "MAN-UW001",
                namefm: "กฎเกณฑ์การรับประกัน และข้อแนะนำในการกรอกใบคำขอเอาประกันชีวิต (28/04/2558)",
                filename: downloadUrl + "download/กฎเกณฑ์การรับประกัน และข้อแนะนำฯ.pdf"
            }, {
                id: "02",
                codefm: "MAN-UW002",
                namefm: "ปัญหาที่พบบ่อยในการพิจารณารับประกัน ",
                filename: downloadUrl + "download/ปัญหาที่พบบ่อยในการพิจารณารับประกัน.pdf"
            }];
        };
        factory.getManualsAG = function() {
            return [{
                id: "01",
                codefm: "MAN-AG001",
                namefm: "คู่มือสอบใบอนุญาตตัวแทนประกันชีวิต (13/05/2558) ",
                filename: downloadUrl + "download/TRAIN/คู่มือติวสอบ.pdf"
            }, {
                id: "02",
                codefm: "MAN-AG002",
                namefm: "ตารางอบรมประจำเดือนมิถุนายน 2558 (/2805/2558) ",
                filename: downloadUrl + "download/TRAIN/ตารางอบรมประจำเดือนมิ.ย58.pdf"
            }, {
                id: "03",
                codefm: "MAN-AG003",
                namefm: "หลักสูตรบันไดก้าวแรกสู่ดวงดาว CI (06/05/2558) ",
                filename: downloadUrl + "download/TRAIN/ci.pdf"
            }];
        };
        //
        factory.getOBFormAG = function() {
            return [{
                id: "01",
                codefm: "AG02",
                namefm: "สัญญาตัวแทนประกันชีวิต และสัญญาค้ำประกันตัวแทนประกันชีวิต",
                filename: downloadUrl + "download/STA/AG02-สัญญาตัวแทน.pdf"
            }, {
                id: "02",
                codefm: "AG03",
                namefm: "สัญญาผู้บริหารงานขายประกันชีวิต",
                filename: downloadUrl + "download/STA/AG03-สัญญาผู้บริหาร.pdf"
            }, {
                id: "03",
                codefm: "AG04",
                namefm: "สัญญาค้ำประกันผู้บริหารงานขายประกันชีวิต ",
                filename: downloadUrl + "download/STA/AG04-สัญญาค้ำประกันผู้บริหารงานขายประกันชีวิต.pdf"
            }];
        };
        factory.getob = function() {
            return httpFactory.apiGetText( downloadUrl + "json/form.txt");
        };
        //
        //
        return factory;
    }
]);