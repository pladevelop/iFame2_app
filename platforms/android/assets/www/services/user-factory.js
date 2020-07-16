// Factory - policyFactory
//
// created : 2/5/2015
// author  : NJ
//
/// <reference path="../lib/ionic/js/ionic.bundle.js" />
//
ifameApp.factory('userFactory', [
    'appConstants', 'appGlobals', 'httpFactory',
    function(appConstants, appGlobals, httpFactory) {
        var factory = {};
        //
        factory.getUserInfo = function(userId, userGroup) {
            var action = 'webqry/getUserInfo/';
            var data = {
                userId: userId,
                userGroup: userGroup
            };
            //alert('get bd=' + JSON.stringify(data));
            var promise = httpFactory.apiPost(action, data);
            return promise;
        };
        //
        factory.changepwd = function (userId, pwd, pwd1) {
            var action = 'webqry/ChangePwd/';
            var data = {
                userId: userId,
                userOldPwd: pwd,
                userNewPwd: pwd1
            };
            var promise = httpFactory.apiPost(action, data);
            return promise;
        };
        //
        factory.changeemail = function (userId, email, email1) {
            var action = 'webqry/ChangeEmail/';
            var data = {
                userId: userId,
                userOldEmail: email,
                userNewEmail: email1
            };
            var promise = httpFactory.apiPost(action, data);
            return promise;
        };
        factory.register = function (name, surname, brthdt, idcard, email, passwordcd) {
            var action = 'webqry/NewUser/';
            var data = {
                userName: name,
                userSurName: surname,
                userBrithDay: brthdt,
                userEmail: email,
                userPassword: passwordcd,
                userIDCard: idcard
            };
            var promise = httpFactory.apiPost(action, data);
            return promise; 
        };
        //
        factory.getDD = function() {
            return {
                    "01": "01",
                    "02": "02",
                    "03": "03",
                    "04": "04",
                    "05": "05",
                    "06": "06",
                    "07": "07",
                    "08": "08",
                    "09": "09",
                    "10": "10",
                    "11": "11",
                    "12": "12",
                    "13": "13",
                    "14": "14",
                    "15": "15",
                    "16": "16",
                    "17": "17",
                    "18": "18",
                    "19": "19",
                    "20": "20",
                    "21": "21",
                    "22": "22",
                    "23": "23",
                    "24": "24",
                    "25": "25",
                    "26": "26",
                    "27": "27",
                    "28": "28",
                    "29": "29",
                    "30": "30",
                    "31": "31"
                };
                };
        //
        factory.getMM = function() {
            return {
                    "01": "มกราคม",
                    "02": "กุมภาพันธ์",
                    "03": "มีนาคม",
                    "04": "เมษายน",
                    "05": "พฤษภาคม",
                    "06": "มิถุนายน",
                    "07": "กรกฎาคม",
                    "08": "สิงหาคม",
                    "09": "กันยายน",
                    "10": "ตุลาคม",
                    "11": "พฤศจิกายน",
                    "12": "ธันวาคม"
                };
                };
        //
        factory.getYY = function() {
            return {
                    "2558": "2558",
                    "2557": "2557",
                    "2556": "2556",
                    "2555": "2555",
                    "2554": "2554",
                    "2553": "2553",
                    "2552": "2552",
                    "2551": "2551",
                    "2550": "2550",
                    "2549": "2549",
                    "2548": "2548",
                    "2547": "2547",
                    "2546": "2546",
                    "2545": "2545",
                    "2544": "2544",
                    "2543": "2543",
                    "2542": "2542",
                    "2541": "2541",
                    "2540": "2540",
                    "2539": "2539",
                    "2538": "2538",
                    "2537": "2537",
                    "2536": "2536",
                    "2535": "2535",
                    "2534": "2534",
                    "2533": "2533",
                    "2532": "2532",
                    "2531": "2531",
                    "2530": "2530",
                    "2529": "2529",
                    "2528": "2528",
                    "2527": "2527",
                    "2526": "2526",
                    "2525": "2525",
                    "2524": "2524",
                    "2523": "2523",
                    "2522": "2522",
                    "2521": "2521",
                    "2520": "2520",
                    "2519": "2519",
                    "2518": "2518",
                    "2517": "2517",
                    "2516": "2516",
                    "2515": "2515",
                    "2514": "2514",
                    "2513": "2513",
                    "2512": "2512",
                    "2511": "2511",
                    "2510": "2510",
                    "2509": "2509",
                    "2508": "2508",
                    "2507": "2507",
                    "2506": "2506",
                    "2505": "2505",
                    "2504": "2504",
                    "2503": "2503",
                    "2502": "2502",
                    "2501": "2501",
                    "2500": "2500",
                    "2499": "2499",
                    "2498": "2498",
                    "2497": "2497",
                    "2496": "2496",
                    "2495": "2495",
                    "2494": "2494",
                    "2493": "2493",
                    "2492": "2492",
                    "2491": "2491",
                    "2490": "2490"
                };
                };
        //

        return factory;
    }
]);







