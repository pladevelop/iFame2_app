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
        factory.getReportsAG = function() {
            return [{
                id: "01",
                codefm: "REP-AG001",
                namefm: "Agent Statements ",
                filename: ""
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
        factory.getOBFormUW = function() {
            //var fromUrl = downloadUrl + "json/form.txt";
            //var promise = httpFactory.apiGetText(fromUrl);
            //return promise;
            //
            return [{
                "id": 1,
                "codefm": "MDC",
                "namefm": "หนังสือแจ้งความจํานงขอรับเงินผลประโยชน์ตามกรมธรรม์ผ่านบัญชีธนาคารสําหรับผ้เอาประกนัภัย",
                "filename": "Media_clearing.pdf"
            }, {
                "id": 2,
                "codefm": "FATCA",
                "namefm": "การรับรองสถานะและคำยินยอมและตกลง เพื่อปฏิบัติตามกฎหมาย Foreign Account Tax Compliance Act ของประเทศสหรัฐอเมริกา (กฎหมาย FATCA) ",
                "filename": "FATCA.pdf"
            }, {
                "id": 3,
                "codefm": "W-8",
                "namefm": "Request for Taxpayer Identification Number and Certification",
                "filename": "FATCA_Form W-8BEN_30122014_Web.pdf"
            }, {
                "id": 4,
                "codefm": "W-9",
                "namefm": "Certificate of Foreign Status of Beneficial Owner for United States Tax Withholding and Reporting (Individuals)",
                "filename": "FATCA_Form W-9_30122014_Web.pdf"
            }, {
                "id": 5,
                "codefm": "No",
                "namefm": "ใบนำส่งเอกสาร",
                "filename": "ใบนำส่งเอกสาร2014.pdf"
            }, {
                "id": 6,
                "codefm": "No",
                "namefm": "ใบคำขออุบัติเหตุส่วนบุคคล แบบย่อ(สำหรับ Package)",
                "filename": "PAส่วนบุคคลแบบย่อ.pdf"
            }, {
                "id": 7,
                "codefm": "PA23",
                "namefm": "ใบคำขอเอาประกันภัยอุบัติเหตุส่วนบุคคล(PA)",
                "filename": "PA23ใบคำขอเอาประกันภัยอุบัติเหตุส่วนบุคคลPA.pdf"
            }, {
                "id": 8,
                "codefm": "PA24",
                "namefm": "ใบคำขอเอาประกันภัยอุบัติเหตุส่วนบุคคล(SmartPlan)",
                "filename": "PA24ใบคำขอเอาประกันภัยอุบัติเหตุส่วนบุคคลSmartPlan.pdf"
            }, {
                "id": 9,
                "codefm": "UI01",
                "namefm": " ใบคำขอเอาประกันชีวิต ( ชนิดมีคำถามสุขภาพอย่างละเอียด )* ผู้ขอเอาประกันต้องลงนามกำกับท้ายใบคำขอทุกหน้า",
                "filename": "ใบคำขอเอาประกันชีวิตประเภทสามัญ_ชนิดมีคำถามสุขภาพ_Web.pdf"
            }, {
                "id": 10,
                "codefm": "UI03",
                "namefm": "รายงานประกอบใบคำขอเอาประกันภัย",
                "filename": "UI03รายงานประกอบใบคำขอเอาประกัน.pdf"
            }, {
                "id": 11,
                "codefm": "UI04",
                "namefm": "ถ้อยแถลงของผู้เอาประกันภัยที่ให้แก่แพทย์ผู้ตรวจสุขภาพ (อายุตั้งแต่ 16 ปีขึ้นไป)",
                "filename": "UI04ใบตรวจสุขภาพผู้ใหญ่.pdf"
            }, {
                "id": 12,
                "codefm": "UI05",
                "namefm": "ใบรายงานการตรวจสุขภาพสำหรับผู้เยาว์(อายุต่ำกว่า 16 ปีขึ้นไป)",
                "filename": "UI05ใบตรวจสุขภาพเด็ก.pdf"
            }, {
                "id": 13,
                "codefm": "UI06",
                "namefm": "ใบคำขอเอาประกันชีวิตประเภทสามัญ( ชนิดไม่มีคำถามสุขภาพ )",
                "filename": "ใบคำขอเอาประกันชีวิตประเภทสามัญ_ชนิดไม่มีคำถามสุขภาพ_Web.pdf"
            }, {
                "id": 14,
                "codefm": "UI25",
                "namefm": "แบบฟอร์มประกอบการตรวจสุขภาพ",
                "filename": "UI25แบบฟอร์มประกอบตรวจสุขภาพ.pdf"
            }, {
                "id": 15,
                "codefm": "ACQ",
                "namefm": "แบบสอบถามอุบัติเหตุ",
                "filename": "ACCQ แบบสอบถามเกี่ยวกับอุบัติเหตุ.pdf"
            }, {
                "id": 16,
                "codefm": "ALCOQ",
                "namefm": "แบบสอบถามแอลกอฮอลล์",
                "filename": "ALCOQ แบบสอบถามเกี่ยวกับแอลกอฮอลล์.pdf"
            }, {
                "id": 17,
                "codefm": "ALLEQ",
                "namefm": "แบบสอบถามโรคภูมิแพ้",
                "filename": "ALLEQ แบบสอบถามเกี่ยวกับโรคภูมิแพ้.pdf"
            }, {
                "id": 18,
                "codefm": "APS",
                "namefm": "ขอประวัติจากรพ./คลีนิก",
                "filename": "APS ขอประวัติจาก รพ _คลินิก.pdf"
            }, {
                "id": 19,
                "codefm": "ASTHQ",
                "namefm": "แบบสอบถามหอบหืด",
                "filename": "ASTHQ แบบสอบถามเกี่ยวกับโรคหอบหืด.pdf"
            }, {
                "id": 20,
                "codefm": "AUTH",
                "namefm": "เซ็นใบมอบอำนาจพร้อมส่งสำเนาบัตรคนไข้",
                "filename": "AUTH หนังสือยินยอมมอบอำนาจ.pdf"
            }, {
                "id": 21,
                "codefm": "AVIAT",
                "namefm": "แบบสอบถามอาชีพการบิน",
                "filename": "AVIAT แบบสอบถามอาชีพการบิน.pdf"
            }, {
                "id": 22,
                "codefm": "BLOOD",
                "namefm": "ตารางตรวจเลือด",
                "filename": "BLOOD ตารางตรวจเลือด.pdf"
            }, {
                "id": 23,
                "codefm": "BLQ",
                "namefm": "แบบสอบถามการตรวจเลือด",
                "filename": "BLQ แบบสอบถามการตรวจเลือด.pdf"
            }, {
                "id": 24,
                "codefm": "BPS",
                "namefm": "วัดความดันโล3หิตและชีพจรซ้ำ 3 ครั้ง",
                "filename": "BPS วัดความดันโลหิตและจับชีพจร 3 ครั้ง.pdf"
            }, {
                "id": 25,
                "codefm": "CHECK",
                "namefm": "แบบสอบถามการตรวจสุขภาพ",
                "filename": "CHECK แบบสอบถามการตรวจสุขภาพ.pdf"
            }, {
                "id": 26,
                "codefm": "CHESQ",
                "namefm": "แบบสอบถามอาการเจ็บหน้าอก",
                "filename": "CHESQ แบบสอบถามอาการเจ็บหน้าอก.pdf"
            }, {
                "id": 27,
                "codefm": "DEBTQ",
                "namefm": "แบบสอบถามรายละเอียดหนี้สิน",
                "filename": "DEBTQ แบบสอบถามรายละเอียดหนี้สิน.pdf"
            }, {
                "id": 28,
                "codefm": "DMQ",
                "namefm": "แบบสอบถามเบาหวาน",
                "filename": "DMQ แบบสอบถามโรคเบาหวาน.pdf"
            }, {
                "id": 29,
                "codefm": "ELECQ",
                "namefm": "แบบสอบถามอาชีพไฟฟ้า",
                "filename": "ELECQ แบบสอบถามอาชีพไฟฟ้า.pdf"
            }, {
                "id": 30,
                "codefm": "EPILQ",
                "namefm": "แบบสอบถามโรคลมชัก",
                "filename": "EPILQ แบบสอบถามโรคลมชัก.pdf"
            }, {
                "id": 31,
                "codefm": "FISH",
                "namefm": "ให้ผู้สมัครตอบคำถามชาวประมงที่แนบมา",
                "filename": "FISHQ แบบสอบถามอาชีพการประมง.pdf"
            }, {
                "id": 32,
                "codefm": "HIVRE",
                "namefm": "หนังสือให้ความยินยอมตรวจเลือด",
                "filename": "HIVRE หนังสือให้ความยินยอมตรวจเลือด.pdf"
            }, {
                "id": 33,
                "codefm": "HTQ",
                "namefm": "แบบสอบความดันโลหิตสูง",
                "filename": "HTQ แบบสอบถามโรคความดันโลหิตสูง.pdf"
            }, {
                "id": 34,
                "codefm": "JOINTQ",
                "namefm": "แบบสอบถามโรคข้อ",
                "filename": "JOINTQ แบบสอบถามเกี่ยวกับอาการปวดข้อ.pdf"
            }, {
                "id": 35,
                "codefm": "LAQ",
                "namefm": "ตอบแบสอบถามวงเงินสูง",
                "filename": "LAQ แบบสอบถามการทำประกันวงเงินสูง.pdf"
            }, {
                "id": 36,
                "codefm": "LIVERQ",
                "namefm": "แบบสอบถามโรคตับ",
                "filename": "LIVERQ แบบสอบถามเกี่ยวกับโรคตับ.pdf"
            }, {
                "id": 37,
                "codefm": "MARINEQ",
                "namefm": "แบบสอบถามการเดินเรือ",
                "filename": "MARINEQ แบบสอบถามเกี่ยวกับอาชีพเดินเรือ.pdf"
            }, {
                "id": 38,
                "codefm": "MISC1",
                "namefm": "ส่งใบโอนกรรมสิทธิ์ในกรมธรรม์",
                "filename": "MISC1 คำร้องขอโอนเอกสิทธิ์กรมธรรม์.pdf"
            }, {
                "id": 39,
                "codefm": "OPERQ",
                "namefm": "แบบสอบถามการผ่าตัด",
                "filename": "OPERQ แบบสอบถามเกี่ยวกับการผ่าตัด.pdf"
            }, {
                "id": 40,
                "codefm": "PARAQ",
                "namefm": "แบบสอบถามอาชีพกระโดดร่ม",
                "filename": "PARAQ แบบสอบถามเกี่ยวกับการกระโดดร่ม.pdf"
            }, {
                "id": 41,
                "codefm": "PBQ",
                "namefm": "แบบสอบถามเกี่ยวกับผู้ชำระเบี้ย",
                "filename": "PBQ แบบสอบถามเพิ่มเติมเกี่ยวกับผู้ชำระเบี้ยประกัน.pdf"
            }, {
                "id": 42,
                "codefm": "PEPQ",
                "namefm": "แบบสอบถามโรคกระเพาะอาหาร",
                "filename": "PEPQ แบบสอบถามเกี่ยวกับโรคกระเพาะ.pdf"
            }, {
                "id": 43,
                "codefm": "PHYSIQ",
                "namefm": "แบบสอบถามแพทย์ประจำตัว",
                "filename": "PHYSIQ แบบสอบถามเกี่ยวกับแพทย์ประจำตัว.pdf"
            }, {
                "id": 44,
                "codefm": "PPQ",
                "namefm": "แบบสอบถามกรมธรรม์เดิม",
                "filename": "PPQ แบบสอบถามกรมธรรม์เดิมกับบริษัทอื่น.pdf"
            }, {
                "id": 45,
                "codefm": "PREAM",
                "namefm": "ผู้สมัครเซ็นต์ชื่อแก้ไขใบคำร้อง",
                "filename": "PREAM คำร้องขอแก้ไข.pdf"
            }, {
                "id": 46,
                "codefm": "PULMQ",
                "namefm": "แบบสอบถามโรคทรวงอก",
                "filename": "PULMQ แบบสอบถามโรคทรวงอก.pdf"
            }, {
                "id": 47,
                "codefm": "RACEQ",
                "namefm": "แบบสอบถามการแข่งขันความเร็ว",
                "filename": "RACEQ แบบสอบถามการแข่งขันความเร็ว.pdf"
            }, {
                "id": 48,
                "codefm": "RESPQ",
                "namefm": "แบบสอบถามระบบทางเดินหายใจ",
                "filename": "PULMQ แบบสอบถามโรคทรวงอก.pdf"
            }, {
                "id": 49,
                "codefm": "SMOKE",
                "namefm": "แบบสอบถามการเลิกสูบบุหรี่",
                "filename": "SMOKE แบบสอบถามการเลิกสูบบุหรี่.pdf"
            }, {
                "id": 50,
                "codefm": "SOLDQ",
                "namefm": "แบบสอบถามอาชีพทหารบก",
                "filename": "SOLDQ การสอบถามเกี่ยวกับอาชีพทหารบก.pdf"
            }, {
                "id": 51,
                "codefm": "TELEQ",
                "namefm": "แบบสอบถามงานโทรศัพท์ โทรเลข",
                "filename": "TELEQ แบบสอบถามอาชีพโทรเลข โทรศัพท์.pdf"
            }, {
                "id": 52,
                "codefm": "THYRQ",
                "namefm": "แบบสอบถามไทรอยด์",
                "filename": "THYRQ แบบสอบถามโรคไทรอยด์.pdf"
            }, {
                "id": 53,
                "codefm": "TUMOR",
                "namefm": "แบบสอบถามเนื้องอก",
                "filename": "TUMOR แบบสอบถามการผ่าตัดเนื้องอก.pdf"
            }, {
                "id": 54,
                "codefm": "UTIQ",
                "namefm": "แบบสอบถามโรคทางเดินปัสสาวะ",
                "filename": "UTIQ แบบสอบถามโรคทางเดินปัสสาวะ.pdf"
            }, {
                "id": 55,
                "codefm": "WTQ Q.2",
                "namefm": "แบบสอบถามการคุมน้ำหนัก",
                "filename": "WTQ Q.2 แบบสอบถามการควบคุมน้ำหนัก.pdf"
            }, {
                "id": 56,
                "codefm": "สช. 11",
                "namefm": "แบบสอบถามผู้ขอเอาประกัน(เวนคืน)",
                "filename": "สช 11 แบบสอบถามผู้เอาประกันภัย (เวนคืน).pdf"
            }];
        };
        //
        factory.getTKFormUW = function() {
            // var fromUrl = downloadUrl + "json/formtk.txt";
            // var promise = httpFactory.apiGetText(fromUrl);
            // return promise;

            return [{
                "id": "4",
                "codefm": "",
                "namefm": "ใบคำขออุบัติเหตุส่วนบุคคลแบบย่อ (สำหรับ Package)"
            }, {
                "id": "7",
                "codefm": "TF22",
                "namefm": "ใบคำขอเอาประกันชีวิต ( ชนิดมีคำถามสุขภาพอย่างละเอียด )* ผู้ขอเอาประกันต้องลงนามกำกับท้ายใบคำขอทุกหน้า "
            }, {
                "id": "8",
                "codefm": "TF01",
                "namefm": "รายงานประกอบใบคำขอเอาประกันภัย"
            }, {
                "id": "9",
                "codefm": "TF24",
                "namefm": "ถ้อยแถลงของผู้เอาประกันภัยที่ให้แก่แพทย์ผู้ตรวจสุขภาพ(อายุตั้งแต่ 16 ปีขึ้นไป)"
            }, {
                "id": "13 ",
                "codefm": "ACQ",
                "namefm": "แบบสอบถามอุบัติเหตุ  "
            }, {
                "id": "14 ",
                "codefm": "ALCOQ",
                "namefm": "แบบสอบถามแอลกอฮอลล์ "
            }, {
                "id": "15 ",
                "codefm": "ALLEQ ",
                "namefm": "แบบสอบถามโรคภูมิแพ้ "
            }, {
                "id": "16  ",
                "codefm": "APS ",
                "namefm": "ขอประวัติจากรพ./คลีนิก "
            }, {
                "id": "17",
                "codefm": "ASTHQ",
                "namefm": "แบบสอบถามหอบหืด "
            }, {
                "id": "18",
                "codefm": "AUTH ",
                "namefm": "เซ็นใบมอบอำนาจพร้อมส่งสำเนาบัตรคนไข้ "
            }, {
                "id": "19",
                "codefm": "AVIAT",
                "namefm": "แบบสอบถามอาชีพการบิน "
            }, {
                "id": "20 ",
                "codefm": "BLOOD ",
                "namefm": "ตารางตรวจเลือด "
            }, {
                "id": "21",
                "codefm": "BLQ",
                "namefm": "แบบสอบถามการตรวจเลือด"
            }, {
                "id": "22",
                "codefm": "BPS",
                "namefm": "วัดความดันโล3หิตและชีพจรซ้ำ 3 ครั้ง "
            }, {
                "id": "23 ",
                "codefm": "CHECK",
                "namefm": "แบบสอบถามการตรวจสุขภาพ "
            }, {
                "id": "24 ",
                "codefm": "CHESQ",
                "namefm": "แบบสอบถามอาการเจ็บหน้าอก "
            }, {
                "id": "25 ",
                "codefm": "DEBTQ",
                "namefm": "แบบสอบถามรายละเอียดหนี้สิน  "
            }, {
                "id": "26 ",
                "codefm": "DMQ ",
                "namefm": "แบบสอบถามเบาหวาน  "
            }, {
                "id": "27 ",
                "codefm": "ELECQ ",
                "namefm": "แบบสอบถามอาชีพไฟฟ้า "
            }, {
                "id": "28 ",
                "codefm": "EPILQ",
                "namefm": "แบบสอบถามโรคลมชัก "
            }, {
                "id": "29",
                "codefm": "FISH",
                "namefm": "ให้ผู้สมัครตอบคำถามชาวประมงที่แนบมา "
            }, {
                "id": "30 ",
                "codefm": "HIVRE",
                "namefm": "หนังสือให้ความยินยอมตรวจเลือด "
            }, {
                "id": "31",
                "codefm": "HTQ ",
                "namefm": "แบบสอบความดันโลหิตสูง  "
            }, {
                "id": "32 ",
                "codefm": "JOINTQ",
                "namefm": "แบบสอบถามโรคข้อ "
            }, {
                "id": "33",
                "codefm": "LAQ ",
                "namefm": "ตอบแบสอบถามวงเงินสูง "
            }, {
                "id": "34 ",
                "codefm": "LIVERQ ",
                "namefm": "แบบสอบถามโรคตับ "
            }, {
                "id": "35 ",
                "codefm": "MARINEQ",
                "namefm": "แบบสอบถามการเดินเรือ "
            }, {
                "id": "36  ",
                "codefm": "MISC1",
                "namefm": "ส่งใบโอนกรรมสิทธิ์ในกรมธรรม์ "
            }, {
                "id": "37 ",
                "codefm": "OPERQ",
                "namefm": "แบบสอบถามการผ่าตัด "
            }, {
                "id": "38",
                "codefm": "PARAQ",
                "namefm": "แบบสอบถามอาชีพกระโดดร่ม "
            }, {
                "id": "39 ",
                "codefm": "PBQ",
                "namefm": "แบบสอบถามเกี่ยวกับผู้ชำระเบี้ย "
            }, {
                "id": "40 ",
                "codefm": "PEPQ ",
                "namefm": "แบบสอบถามโรคกระเพาะอาหาร "
            }, {
                "id": "41",
                "codefm": "PHYSIQ ",
                "namefm": "แบบสอบถามแพทย์ประจำตัว "
            }, {
                "id": "42",
                "codefm": "PPQ ",
                "namefm": "แบบสอบถามกรมธรรม์เดิม "
            }, {
                "id": "43",
                "codefm": "PREAM ",
                "namefm": "ผู้สมัครเซ็นต์ชื่อแก้ไขใบคำร้อง "
            }, {
                "id": "44 ",
                "codefm": "PULMQ",
                "namefm": "แบบสอบถามโรคทรวงอก  "
            }, {
                "id": "45",
                "codefm": "RACEQ",
                "namefm": "แบบสอบถามการแข่งขันความเร็ว"
            }, {
                "id": "46",
                "codefm": "RESPQ ",
                "namefm": "แบบสอบถามระบบทางเดินหายใจ "
            }, {
                "id": "47 ",
                "codefm": "SMOKE",
                "namefm": "แบบสอบถามการเลิกสูบบุหรี่ "
            }, {
                "id": "48",
                "codefm": "SOLDQ ",
                "namefm": "แบบสอบถามอาชีพทหารบก "
            }, {
                "id": "49",
                "codefm": "TELEQ",
                "namefm": "แบบสอบถามงานโทรศัพท์ โทรเลข "
            }, {
                "id": "50 ",
                "codefm": "THYRQ ",
                "namefm": "แบบสอบถามไทรอยด์  "
            }, {
                "id": "51",
                "codefm": "TUMOR ",
                "namefm": "แบบสอบถามเนื้องอก "
            }, {
                "id": "52 ",
                "codefm": "UTIQ ",
                "namefm": "แบบสอบถามโรคทางเดินปัสสาวะ  "
            }, {
                "id": "53",
                "codefm": "WTQ Q.2 ",
                "namefm": "แบบสอบถามการคุมน้ำหนัก  "
            }, {
                "id": "54",
                "codefm": "สช. 11 ",
                "namefm": "แบบสอบถามผู้ขอเอาประกัน(เวนคืน) "
            }];
        };
        //
        return factory;
    }
]);