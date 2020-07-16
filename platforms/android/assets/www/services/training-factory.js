// Factory - policyFactory
//
// created : 2/5/2015
// author  : NJ
//
/// <reference path="../lib/ionic/js/ionic.bundle.js" />
//
ifameApp.factory('trainingFactory', [
    'appConstants', 'appGlobals', 'httpFactory',
    function(appConstants, appGlobals, httpFactory) {
        var factory = {};
        //
        factory.getTrainMonths = function() {
            var action = 'webqry/getScheduletraining/';
            var data = {};
            var promise = httpFactory.apiPost(action, data);
            return promise;
        };
        //factory.getTrainMonths = function() {
        //    return [{
        //        MONTH: "June-2015",
        //        REMARK: "Training Program for June",
        //        FILEPATH: "http://center.philliplife.com/qagt/download/TRAIN/%E0%B8%95%E0%B8%B2%E0%B8%A3%E0%B8%B2%E0%B8%87%E0%B8%AD%E0%B8%9A%E0%B8%A3%E0%B8%A1%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B8%88%E0%B8%B3%E0%B9%80%E0%B8%94%E0%B8%B7%E0%B8%AD%E0%B8%99%E0%B8%A1%E0%B8%B4.%E0%B8%A258.pdf"
        //    }];
        //};
        //
        factory.getTrainLicenses = function() {
            return [{
                TOPIC: "แผนการอบรมการขอรับขอต่อใบอนุญาต ปี 2558",
                TOPIC2: "",
                FILEPATH: "http://center.philliplife.com/qagt/download/planner_58.pdf"
            }, {
                TOPIC: "ใบสมัครเข้ารับการอบรม ปี 2558",
                TOPIC2: "",
                FILEPATH: "http://center.philliplife.com/qagt/download/%E0%B9%83%E0%B8%9A%E0%B8%AA%E0%B8%A1%E0%B8%B1%E0%B8%84%E0%B8%A3%E0%B9%80%E0%B8%82%E0%B9%89%E0%B8%B2%E0%B8%A3%E0%B8%B1%E0%B8%9A%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%AD%E0%B8%9A%E0%B8%A3%E0%B8%A1_%E0%B8%9B%E0%B8%B5_2558.pdf"
            },{
                TOPIC: "การสมัครสอบใบอนุญาตตัวแทน",
                TOPIC2: "",
                FILEPATH: "http://center.philliplife.com/qagt/download/%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%AA%E0%B8%A1%E0%B8%B1%E0%B8%84%E0%B8%A3%E0%B8%AA%E0%B8%AD%E0%B8%9A%E0%B9%83%E0%B8%9A%E0%B8%AD%E0%B8%99%E0%B8%B8%E0%B8%8D%E0%B8%B2%E0%B8%95%E0%B8%95%E0%B8%B1%E0%B8%A7%E0%B9%81%E0%B8%97%E0%B8%99%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B8%81%E0%B8%B1%E0%B8%99%E0%B8%8A%E0%B8%B5%E0%B8%A7%E0%B8%B4%E0%B8%95.pdf"
            },{
                TOPIC: "กำหนดการสอบเพื่อขอรับใบอนุญาต ปี 2558",
                TOPIC2: "สอบด้วยระบบคอมพิวเตอร์ออนไลน์ในส่วนภูมิภาค",
                FILEPATH: "http://center.philliplife.com/qagt/download/1_%E0%B8%81%E0%B8%B3%E0%B8%AB%E0%B8%99%E0%B8%94%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%AA%E0%B8%A1%E0%B8%B1%E0%B8%84%E0%B8%A3%E0%B8%AA%E0%B8%AD%E0%B8%9A%E0%B8%A3%E0%B8%B0%E0%B8%9A%E0%B8%9A%E0%B8%84%E0%B8%AD%E0%B8%A1%E0%B8%9E%E0%B8%B4%E0%B8%A7%E0%B9%80%E0%B8%95%E0%B8%AD%E0%B8%A3%E0%B9%8C%E0%B8%A0%E0%B8%B9%E0%B8%A1%E0%B8%B4%E0%B8%A0%E0%B8%B2%E0%B8%84_%E0%B8%9B%E0%B8%B5_2558.pdf"
            },{
                TOPIC: "กำหนดการสอบเพื่อขอรับใบอนุญาต ปี 2558",
                TOPIC2: "สอบด้วยระบบคอมพิวเตอร์ในส่วนกลาง",
                FILEPATH: "http://center.philliplife.com/qagt/download/2_%E0%B8%81%E0%B8%B3%E0%B8%AB%E0%B8%99%E0%B8%94%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%AA%E0%B8%AD%E0%B8%9A%E0%B9%83%E0%B8%99%E0%B8%AA%E0%B9%88%E0%B8%A7%E0%B8%99%E0%B8%81%E0%B8%A5%E0%B8%B2%E0%B8%87%E0%B8%A3%E0%B8%B0%E0%B8%9A%E0%B8%9A%E0%B8%84%E0%B8%AD%E0%B8%A1%E0%B8%9E%E0%B8%B4%E0%B8%A7%E0%B9%80%E0%B8%95%E0%B8%AD%E0%B8%A3%E0%B9%8C%20(%E0%B8%AA%E0%B8%A1%E0%B8%B2%E0%B8%84%E0%B8%A1)_%E0%B9%83%E0%B8%99%E0%B8%A7%E0%B8%B1%E0%B8%99%E0%B9%80%E0%B8%AA%E0%B8%B2%E0%B8%A3%E0%B9%8C%20%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B8%88%E0%B8%B3%E0%B8%9B%E0%B8%B5_2558.pdf"
            },{
                TOPIC: "ใบสมัครสอบเพื่อขอรับใบอนุญาต ปี 2558",
                TOPIC2: "",
                FILEPATH: "http://center.philliplife.com/qagt/download/3%E0%B9%83%E0%B8%9A%E0%B8%AA%E0%B8%A1%E0%B8%B1%E0%B8%84%E0%B8%A3%E0%B8%AA%E0%B8%AD%E0%B8%9A%E0%B8%84%E0%B8%A7%E0%B8%B2%E0%B8%A1%E0%B8%A3%E0%B8%B9%E0%B9%89%E0%B9%80%E0%B8%9E%E0%B8%B7%E0%B9%88%E0%B9%88%E0%B8%AD%E0%B8%82%E0%B8%AD%E0%B8%A3%E0%B8%B1%E0%B8%9A%E0%B9%83%E0%B8%9A%E0%B8%AD%E0%B8%99%E0%B8%B8%E0%B8%8D%E0%B8%B2%E0%B8%95%E0%B9%80%E0%B8%9B%E0%B9%87%E0%B8%99%E0%B8%95%E0%B8%B1%E0%B8%A7%E0%B9%81%E0%B8%97%E0%B8%99%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B8%81%E0%B8%B1%E0%B8%99%E0%B8%8A%E0%B8%B5%E0%B8%A7%E0%B8%B4%E0%B8%95.pdf"
            },{
                TOPIC: "การขอรับใบอนุญาตตัวแทน",
                TOPIC2: "",
                FILEPATH: "http://center.philliplife.com/qagt/download/%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%82%E0%B8%AD%E0%B8%A3%E0%B8%B1%E0%B8%9A%E0%B9%83%E0%B8%9A%E0%B8%AD%E0%B8%99%E0%B8%B8%E0%B8%8D%E0%B8%B2%E0%B8%95%E0%B8%95%E0%B8%B1%E0%B8%A7%E0%B9%81%E0%B8%97%E0%B8%99%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B8%81%E0%B8%B1%E0%B8%99%E0%B8%8A%E0%B8%B5%E0%B8%A7%E0%B8%B4%E0%B8%95.pdf"
            },{
                TOPIC: "คำขอรับใบอนุญาตตัวแทน ตช.1",
                TOPIC2: "",
                FILEPATH: "http://www.oic.or.th/downloads/e-form/%E0%B8%95%E0%B8%8A%20%E0%B8%99%E0%B8%8A/%E0%B8%95%E0%B8%8A1.pdf"
            },{
                TOPIC: "หนังสือแสดงความต้องการของบริษัท",
                TOPIC2: "ให้เป็นตัวแทนประกันชีวิต  ตช.5",
                FILEPATH: "http://www.oic.or.th/downloads/e-form/%E0%B8%95%E0%B8%8A%20%E0%B8%99%E0%B8%8A/%E0%B8%95%E0%B8%8A5.pdf"
            },{
                TOPIC: "แบบฟอร์มคำขอต่อใบอนุญาตฯ  ตช.7",
                TOPIC2: "",
                FILEPATH: "http://www.oic.or.th/downloads/e-form/%E0%B8%95%E0%B8%8A%20%E0%B8%99%E0%B8%8A/%E0%B8%95%E0%B8%8A7.pdf"
            },{
                TOPIC: "การแต่งตั้งตัวแทนและผู้บริหารงานขาย",
                TOPIC2: "",
                FILEPATH: "http://center.philliplife.com/qagt/download/%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B9%81%E0%B8%95%E0%B9%88%E0%B8%87%E0%B8%95%E0%B8%B1%E0%B9%89%E0%B8%87%E0%B8%95%E0%B8%B1%E0%B8%A7%E0%B9%81%E0%B8%97%E0%B8%99%20%E0%B9%81%E0%B8%A5%E0%B8%B0%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B8%9A%E0%B8%A3%E0%B8%B4%E0%B8%AB%E0%B8%B2%E0%B8%A3%E0%B8%87%E0%B8%B2%E0%B8%99%E0%B8%82%E0%B8%B2%E0%B8%A2.pdf"
            },{
                TOPIC: "ใบสมัครประวัติตัวแทน",
                TOPIC2: "",
                FILEPATH: "http://center.philliplife.com/qagt/download/%E0%B9%83%E0%B8%9A%E0%B8%AA%E0%B8%A1%E0%B8%B1%E0%B8%84%E0%B8%A3%E0%B8%95%E0%B8%B1%E0%B8%A7%E0%B9%81%E0%B8%97%E0%B8%99AR01-25571.pdf"
            },{
                TOPIC: "แบบฟอร์มเสนอแต่งตั้งผู้บริหารงานขาย",
                TOPIC2: "",
                FILEPATH: "http://center.philliplife.com/qagt/download/STA/%E0%B9%81%E0%B8%9A%E0%B8%9A%E0%B8%9F%E0%B8%AD%E0%B8%A3%E0%B9%8C%E0%B8%A1%E0%B9%80%E0%B8%AA%E0%B8%99%E0%B8%AD%E0%B9%81%E0%B8%95%E0%B9%88%E0%B8%87%E0%B8%95%E0%B8%B1%E0%B9%89%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B8%9A%E0%B8%A3%E0%B8%B4%E0%B8%AB%E0%B8%B2%E0%B8%A3%E0%B8%87%E0%B8%B2%E0%B8%99%E0%B8%82%E0%B8%B2%E0%B8%A2%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B8%81%E0%B8%B1%E0%B8%99%E0%B8%8A%E0%B8%B5%E0%B8%A7%E0%B8%B4%E0%B8%95.pdf"
            },{
                TOPIC: "คุณสมบัติผู้ค้ำประกัน",
                TOPIC2: "",
                FILEPATH: "http://center.philliplife.com/qagt/download/%E0%B8%84%E0%B8%B8%E0%B8%93%E0%B8%AA%E0%B8%A1%E0%B8%9A%E0%B8%B1%E0%B8%95%E0%B8%B4%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B8%84%E0%B9%89%E0%B8%B3%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B8%81%E0%B8%B1%E0%B8%99%E0%B8%95%E0%B8%B1%E0%B8%A7%E0%B9%81%E0%B8%97%E0%B8%99%20%E0%B9%81%E0%B8%A5%E0%B8%B0%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B8%9A%E0%B8%A3%E0%B8%B4%E0%B8%AB%E0%B8%B2%E0%B8%A3%E0%B8%87%E0%B8%B2%E0%B8%99%E0%B8%82%E0%B8%B2%E0%B8%A2.pdf"
            }];
        };
        //
        return factory;
    }
]);