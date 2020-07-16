//
/// <reference path="../lib/ionic/js/ionic.bundle.js" />
//
ifameApp.factory('st5Factory', [
    'appConstants', 'appGlobals', 'ifamedbFactory', 'httpFactory',
    function(appConstants, appGlobals, ifamedbFactory, httpFactory) {
        var self = this;
        var factory = {};
        //
        factory.getst5Actives = function (agCode, agGroup, trSts) {
            var action = 'webqry/getTrmast/';
            var data = {
                UsrID: agCode,
                UsrGroup: agGroup,
                TRStat: trSts
            };
            var promise = httpFactory.apiPost(action, data);
            return promise;
        };
        //
        factory.getst5Pending = function (agCode, agGroup, trSts) {
            var action = 'webqry/getTrmastVerify/';
            var data = {
                UsrID: agCode,
                UsrGroup: agGroup,
                TRStat: trSts
            };
            var promise = httpFactory.apiPost(action, data);
            return promise;
        };
        //
        factory.getst5Used = function (agCode, agGroup, trSts) {
            var action = 'webqry/getTrmast/';
            var data = {
                UsrID: agCode,
                UsrGroup: agGroup,
                TRStat: trSts
            };
            var promise = httpFactory.apiPost(action, data);
            return promise;
        };
        //
        factory.getst5Detail = function (TRNO) {
            var action = 'webqry/getTrmastDet/';
            var data = {
                TRNO: TRNO
            };
            var promise = httpFactory.apiPost(action, data);
            return promise;
        };
        //
        factory.getinvDetail = function (TRNO) {
            var action = 'webqry/getInvtran/';
            var data = {
                TRNO: TRNO
            };
            var promise = httpFactory.apiPost(action, data);
            return promise;
        };
        //
        factory.getverDetail = function (TRNO) {
            var action = 'webqry/getVerifyDet/';
            var data = {
                TRNO: TRNO
            };
            var promise = httpFactory.apiPost(action, data);
            return promise;
        };
        //
        factory.setST5Info = function (d) {
            return [{
                header: "Temp Receipt INFO",
                items: [{
                    label: "เลขที่ สท.5",
                    value: d.TRNO
                }, {
                    label: "สถานะ สท.5",
                    value: d.STATUS
                }, {
                    label: "สท.5 ของสาขาครั้งแรก",
                    value: d.ORGBRNID
                }, {
                    label: "สท.5 ของตัวแทนครั้งแรก",
                    value: d.ORGAGTID
                }, {
                    label: "สท.5 ของสาขา",
                    value: d.ISSBRNID
                }, {
                    label: "สท.5 ของตัวแทน",
                    value: d.ISSAGTID
                }, {
                    label: "สาขาที่ใช้ สท.5",
                    value: d.USDBRNID
                }, {
                    label: "ตัวแทนที่ใช้ สท.5",
                    value: d.USDAGTID
                }, {
                    label: "สาขาที่โอน สท.5",
                    value: d.TRFBRNID
                }, {
                    label: "วันที่โอน สท.5",
                    value: d.TRFDT
                }, {
                    label: "วันที่บันทึกข้อมูล",
                    value: d.TRANDT
                }, {
                    label: "วันที่ประมวลผล",
                    value: d.PROCDT
                }, {
                    label: "สถานะ สท.5 ก่อนหน้า",
                    value: d.PREVSTATUS
                }, {
                    label: "วันที่บันทึกข้อมูลก่อนหน้า",
                    value: d.PREVTRANDT
                }, {
                    label: "วันที่บันทึกประมวลผลก่อนหน้า",
                    value: d.PREVPROCDT
                }, {
                    label: "ตรวจสอบการคืนต้นขั้ว",
                    value: d.TRCD
                }, {
                    label: "วันที่ตัวแทนเบิกสท.5",
                    value: d.EFFDT
                }, {
                    label: "ผู้บันทึก",
                    value: d.USERID
                }]
            }]; 
        };
        //
        factory.setINVInfo = function (d) {
            return [{
                header: "Collection INFO",
                items: [{
                    label: "ใบนำส่งเลขที่",
                    value: d.INVNO
                }, {
                    label: "ผู้นำส่งเงิน",
                    value: d.SENDER
                }, {
                    label: "เลขที่กรมธรรม์",
                    value: d.REFID
                }, {
                    label: "ประเภท",
                    value: d.REFTYP
                }, {
                    label: "ชื่อผู้เอาประกัน",
                    value: d.INSNM
                }, {
                    label: "ผู้ชำระเบี้ย",
                    value: d.PAYNM
                }, {
                    label: "แบบประกัน",
                    value: d.PLANID
                }, {
                    label: "จำนวนเงิน",
                    value: d.MPREMAMT
                }, {
                    label: "งวดการชำระ",
                    value: d.BILLMD
                }, {
                    label: "Bill Type",
                    value: d.BILLTYPE
                }, {
                    label: "เงินตาม สท.5",
                    value: d.TRAMT
                }, {
                    label: "เงินที่ชำระจริง",
                    value: d.PMNTAMT
                }, {
                    label: "ชำระด้วย",
                    value: d.PMNTMTHD
                }, {
                    label: "เลขที่เช็ค/บัตรเครดิต/รหัสอนุมัติ",
                    value: d.PMNTREFID
                }, {
                    label: "เพื่อชำระ",
                    value: d.PMNTTYP
                }, {
                    label: "ปีที่/งวดที่",
                    value: d.YRPR
                }, {
                    label: "ลูกหนี้ขยายงาน",
                    value: d.DISCAMT
                }, {
                    label: "วันที่ชำระเงิน",
                    value: d.PROCDT
                }, {
                    label: "ผู้บันทึก",
                    value: d.USERID
                }]
            }];
        };
        //
        factory.setVERInfo = function (d) {
            return [{
                header: "Verify INFO",
                items: [{
                    label: "เลขที่ สท5",
                    value: d.TRNO
                }, {
                    label: "ตัวแทน",
                    value: d.ISSAGTID
                }, {
                    label: "วันที่เบิก",
                    value: d.EFFDT
                }, {
                    label: "ตรวจครั้งที่ 1",
                    value: d.CHKDT1
                }, {
                    label: "ตรวจครั้งที่ 2",
                    value: d.CHKDT2
                }, {
                    label: "ตรวจครั้งที่ 3",
                    value: d.CHKDT3
                }, {
                    label: "ตรวจครั้งที่ 4",
                    value: d.CHKDT4
                }, {
                    label: "ผู้ตรวจสอบครั้งที่ 1",
                    value: d.CHKUSER1
                }, {
                    label: "ผู้ตรวจสอบครั้งที่ 2",
                    value: d.CHKUSER2
                }, {
                    label: "ผู้ตรวจสอบครั้งที่ 3",
                    value: d.CHKUSER3
                }, {
                    label: "ผู้ตรวจสอบครั้งที่ 4",
                    value: d.CHKUSER4
                }]
            }];
        };

        return factory;
    }
]);


 
  