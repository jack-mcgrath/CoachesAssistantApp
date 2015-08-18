// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }
        if (window.StatusBar) {
            // org.apache.cordova.statusbar required
            StatusBar.styleLightContent();
        }
    });
})

.config(function($stateProvider, $urlRouterProvider) {

    // Ionic uses AngularUI Router which uses the concept of states
    // Learn more here: https://github.com/angular-ui/ui-router
    // Set up the various states which the app can be in.
    // Each state's controller can be found in controllers.js

    // setup an abstract state for the tabs directive
    var options = {
        url: '/options',
        templateUrl: 'templates/options.html'
    };
    var fencer_list = {
      url: '/fencer_list',
      templateUrl: 'templates/fencer_list.html'
    };
    var tab_framework = {
        url: "/tab",
        abstract: true,
        templateUrl: "templates/tabs.html"
    };
    var summary_tab = {
        url: '/summary',
        views: {
            'tab-summary': {
                templateUrl: 'templates/tab-summary.html',
            }
        }
    };

    var pools_tab = {
            url: '/pools',
            views: {
                'tab-pools': {
                    templateUrl: 'templates/tab-pools.html',
                }
            }
        };
        // Each tab has its own nav history stack:
    var de_tab = {
        url: '/de',
        views: {
            'tab-de': {
                templateUrl: 'templates/tab-de.html',
            }
        }
    };
    var settings_tab = {
        url: '/settings',
        views: {
            'tab-settings': {
                templateUrl: 'templates/tab-settings.html',
            }
        }
    };

    $stateProvider
        .state('tab', tab_framework)
        .state('tab.summary', summary_tab)
        .state('tab.pools', pools_tab)
        .state('tab.de', de_tab)
        .state('options', options)
        .state('fencer_list', fencer_list)
        .state('tab.settings', settings_tab);



    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/options');

});
