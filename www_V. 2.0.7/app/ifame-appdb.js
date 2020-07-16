// Module as a services - ifamedb-factory
//
// created : 2/5/2015
// author  : NJ
//
/// <reference path="../lib/ionic/js/ionic.bundle.js" />
//
var ifameDB = null;
angular.module("ifamedb.services", ['ionic', 'ngCordova'])
    // .factory('ifamedbFactory', ['$q','$cordovaSQLite', function($q, $cordovaSQLite) {
    .factory('ifamedbFactory', [
        '$q', '$window',
        function($q, $window) {
            var self = this;
            //var db = null;
            var dbName = "ifame.db";
            var dbDspName = "IFAME DB";
            //
            self.dbInitialize = function() {
                var deferred = $q.defer();
                //
                self.createDatabase();
                self.dropTablePolicies().then(function(result) {
                    //alert('drop success');
                    self.createTablePolicies().then(function(result) {
                        //alert('create table success');
                        deferred.resolve(result);
                        //self.insertDummyData();
                    }, function(error) {
                        deferred.reject(error);
                    });
                }, function(error) {
                    //alert('error drop table');
                    deferred.reject(error);
                });
                //
                return deferred.promise;
            };
            //
            self.createDatabase = function() {
                //alert("mo=" + (mo? 'true':'false'));
                ifameDB = $window.openDatabase(dbName, "1.0", dbDspName, 1024 * 1024 * 4);
                //alert('db created');
                // if (mo == true) {
                //     ifameDB = window.openDatabase(dbName, "1.0", dbDspName, 1024 * 1024 * 4);
                //     alert('create dbx');
                // } else {
                //     ifameDB = window.openDatabase(dbName, "1.0", dbDspName, 1024 * 1024 * 4);
                //     alert('create dby');
                // };
            };
            //
            self.dropTablePolicies = function() {
                var sql = "DROP TABLE IF EXISTS tblPolicies";
                return self.query(sql);
            };
            //
            self.createTablePolicies = function() {
                var sql = "CREATE TABLE IF NOT EXISTS tblPolicies (" +
                    "POLID text, CLINAM text, " +
                    "CLISNM text, POLTYPE text, POLCSTS text, STSCHGDTE text )";
                return self.query(sql);
            };
            //
            // self.insertDummyData = function() {
            //     var dataAll = [{
            //         polId: "1001230001",
            //         polType: "OB",
            //         polStatus: "Pending",
            //         insureName: "สมชาย ใจดี",
            //         commDt: "20/03/2558",
            //         planId: "OB01AZ",
            //         planDesc: "พิทักษ์ทรัพย์ 10"
            //     }, {
            //         polId: "1001230030",
            //         polType: "OB",
            //         polStatus: "Pending",
            //         insureName: "วิชัย ดีพร้อม",
            //         commDt: "12/04/2558",
            //         planId: "OB21AB",
            //         planDesc: "ดิวิเด้นท์พลัส 10/10"
            //     }, {
            //         polId: "8004450030",
            //         polType: "PA",
            //         polStatus: "Pending",
            //         insureName: "วิชัย ดีพร้อม",
            //         commDt: "02/03/2558",
            //         planId: "PA99A2",
            //         planDesc: "ทุน 500,000 บาท ไม่มีค่ารักษา (เบี้ย 700 บาท) "
            //     }];
            //     //
            //     var sql = "INSERT INTO tblPolicies VALUES (?,?,?,?,?,?,?)";
            //     //var params = ['1000012010', 'OB', 'Inforce', 'Nor Jira', '01/02/2558', 'OB01AA', 'Dividend Plus'];
            //     angular.forEach(dataAll, function(x) {
            //         //alert('polid='+x.polId);
            //         var params = [x.polId, x.polType, x.polStatus, x.insureName, x.commDt, x.planId, x.planDesc];
            //         self.query(sql, params);
            //     });
            // };
            //
            self.query = function(query, bindings) {
                bindings = typeof bindings !== 'undefined' ? bindings : [];
                var deferred = $q.defer();
                //
                ifameDB.transaction(function(tx) {
                    tx.executeSql(query, bindings, function(tx, result) {
                        //alert('query success ' + query+'=='+result);
                        deferred.resolve(result);
                    }, function(tx, error) {
                        //alert('query error ' + query + bindings + error);
                        deferred.reject(error);
                    });
                });
                // if (window.cordova) {
                //     $cordovaSQLite.execute(ifameDB, query, bindings).then(function(result) {
                //         deferred.resolve(result);
                //     }, function(error) {
                //         deferred.reject(error);
                //     });
                // } else {
                //     ifameDB.transaction(function(tx) {
                //         tx.executeSql(query, bindings, function(tx, result) {
                //             //alert('query success ' + query+'=='+result);
                //             deferred.resolve(result);
                //         }, function(tx, error) {
                //             //alert('query error ' + query + bindings + error);
                //             deferred.reject(error);
                //         });
                //     });
                // };                
                return deferred.promise;
            };
            //
            self.loadPolicyData = function(data) {
                var sql = "INSERT INTO tblPolicies VALUES (?,?,?,?,?,?)";
                angular.forEach(data, function(x) {
                    var params = [x.POLID, x.CLINAM, x.CLISNM, x.POLTYPE, x.POLCSTS, x.STSCHGDTE];
                    self.query(sql, params);
                });
            };
            //
            self.dataTable2JSON = function(result) {
                var output = [];
                for (var i = 0; i < result.rows.length; i++) {
                    output.push(result.rows.item(i));
                }
                return output;
            };
            //
            self.dataRow2JSON = function(result) {
                return result.rows.item(0);
            };
            //
            self.getPolicies = function() {
                var deferred = $q.defer()
                var sql = "SELECT * FROM tblPolicies";
                var data = [];
                self.query(sql)
                    .then(function(result) {
                        data = self.dataTable2JSON(result);
                        deferred.resolve(data);
                    }, function(error) {
                        deferred.reject(error);
                    });
                return deferred.promise;
            };
            //
            return self;
        }
    ]);
// .factory('policySQlite', [
//     'q$', 'ifamedbFactory',
//     function(q$, ifamedbFactory) {
//         var self = this;
//         //
//         self.getPolicies = function() {
//             var deferred = $q.defer()
//             var sql = "SELECT * FROM tblPolicies";
//             var data = [];
//             //alert('getpolicies');
//             var promise = ifamedbFactory.query(sql);
//             promise.then(function(result) {
//                 alert('result=' + JSON.strigify(result));
//                 data = self.getAll(result);
//                 alert('data=' + JSON.stringify(data));
//                 deferred.resolve(data);
//             }, function(error) {
//                 deferred.reject(error);
//             });
//             return deferred.promise;
//         };
//         //
//         return self;
//     }
// ]);
// .factory('tblPoliciesFactory', function(ifamedbFactory) {
//     var self = this;

//     self.getAll = function() {
//         return ifamedbFactory.query('SELECT * FROM tblPolicies')
//             .then(function(result) {
//                 return ifamedbFactory.getAll(result);
//             });
//     };

//     self.getById = function(id) {
//         return ifamedbFactory.query('SELECT * FROM tblPolicies WHERE id = ?', [id])
//             .then(function(result) {
//                 return ifamedbFactory.get(result);
//             });
//     };
//     //
//     return self;
// });