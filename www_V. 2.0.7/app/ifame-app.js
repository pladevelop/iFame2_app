// Ionic Starter App
//
// angular.module is a global place for creating, registering and retrieving Angular modules
//
/// <reference path="../lib/ionic/js/ionic.bundle.js" />
//

//var ifameDB = null;

angular.module('ifameApp', ['ionic', 'ui.router', 'ifamedb.services'])
    // set up device
    .run(function($ionicPlatform, ifamedbFactory) {
        $ionicPlatform.ready(function() {
            //ionic.platform.ready(function() {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            if (window.cordova && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            };
            if (window.StatusBar) {
                StatusBar.styleDefault();
            };
            // create database
            //alert('before db in app');
            //ifamedbFactory.dbInitialize();
            //
        });
        //
        //ifamedbFactory.createDatabase( ionic.Platform.isWebView());
        ifamedbFactory.dbInitialize();
    })
    .constant('$ionicLoadingConfig', {
        template: 'Loading...'
    });

var ifameApp = angular.module('ifameApp');