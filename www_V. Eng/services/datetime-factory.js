// Factory - sharedFactory
//
// created : 2/5/2015
// author  : NJ
//
/// <reference path="../lib/ionic/js/ionic.bundle.js" />
//
// *** SHAREDFACTORY CANNOT INJECT SESSIONFACTORY --> CAUSE LOOP ERROR
ifameApp.factory('datetimeFactory', [
    'appConstants', 'appGlobals',
    function( appConstants, appGlobals) {
        var factory = {};

        factory.getDateTime = function() {
		    var param1 = new Date();
    		return ( param1.getDate() + '/' + 
    			(param1.getMonth()+1) + '/' + 
    			param1.getFullYear() + ' ' + 
    			param1.getHours() + ':' + 
    			param1.getMinutes() + ':' + 
    			param1.getSeconds());
        };
        factory.getTodayDate = function() {
		    var param1 = new Date();
    		return ( param1.getDate() + '/' + (param1.getMonth()+1) + '/' + param1.getFullYear());
        };
        factory.currentDate = function() {
            return new Date().getDate();
        };
        factory.currentMonth = function() {
            return new Date().getMonth() +1;
        };
        factory.currentYear = function() {
            return new Date().getFullYear();
        };
        factory.currentYearTh = function() {
            var yr = new Date().getFullYear();
            var y = parseInt(yr);
            return ( y < 2500 ? y+543 : y).toString();
            //return yt.toString();
        };
        //
        return factory;
    }
]);


// Return today's date and time
var currentTime = new Date()

// returns the month (from 0 to 11)
var month = currentTime.getMonth() + 1

// returns the day of the month (from 1 to 31)
var day = currentTime.getDate()

// returns the year (four digits)
var year = currentTime.getFullYear()