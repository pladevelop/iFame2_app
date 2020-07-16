// Factory - sharedFactory
//
// created : 2/5/2015
// author  : NJ
//
/// <reference path="../lib/ionic/js/ionic.bundle.js" />
//
// *** SHAREDFACTORY CANNOT INJECT SESSIONFACTORY --> CAUSE LOOP ERROR
ifameApp.factory('sqliteFactory', [
    '$q', '$cordovaSQLite', 'appConstants', 'appGlobals',
    function($q, $cordovaSQLite, appConstants, appGlobals) {
        var factory = {};
        //
        function createDatabase() {
            // create database if not exit
            // if (window.sqlitePlugin !== undefined) {
            //     ifameDB = window.sqlitePlugin.openDatabase("ifame.db");
            // } else {
            //     // For debugging in simulator fallback to native SQL Lite
            //     ifameDB = window.openDatabase("ifame.db", "1.0", "IFAME-DB", 200000);
            // };
            //ifameDB = $cordovaSQLite.openDB("ifame.db");
            //alert('success db');
        };
        //
        function createTablePolicies() {
            //var o = ( angular.isUndefined(ifameDB)? 'undefine': 'ok');
            //alert('o=' + o );
            var deferred = $q.defer();
            var sqlDelete = "DROP TABLE IF EXISTS tblPolicies";
            var sqlCreate = "CREATE TABLE IF NOT EXISTS tblPolicies (" +
                "id integer primary key, polId text, polType text, polStatus text, " +
                "insureName text, commDt text, planId text, planDesc text )";
            //$cordovaSQLite.execute(ifameDB, "DROP TABLE IF EXISTS tblPolicies");
            //alert('create table ok');
            if (window.cordova) {
                $cordovaSQLite.execute(ifameDB, sqlDelete, []);
                $cordovaSQLite.execute(ifameDB, sqlCreate, []);
                deferred.resolve(true);
                return deferred.promise;
            } else {
                ifameDB.transaction(function(tx) {
                    tx.executeSql(sqlDelete);
                    //alert('delete table');
                    tx.executeSql(sqlCreate, [],
                        function(tx, result) {
                            deferred.resolve(result);
                        },
                        function(tx, error) {
                            deferred.reject(error);
                        });
                });
                return deferred.promise;
            };
        };
        //
        factory.loadData2Local = function() {
            // create table
            //createDatabase();
            createTablePolicies();
            // load onw policies to local

            //
        };
        //
        return factory;
    }
]);