'use strict';

/**
 * @ngdoc overview
 * @name tedfeedApp
 * @description
 * # tedfeedApp
 *
 * Main module of the application.
 */
angular.module('tedfeedApp', [
    'ngRoute',
    'firebase',
    'firebase.ref',
    'firebase.auth',
    'psFramework',
    'ngStorage',
    'psCharts',
    'fakeWebMetrics'
  ]
).config(function($provide) {
  $provide.decorator('$exceptionHandler',
    ['$delegate', function($delegate) {
      return function(exception, cause) {
        $delegate(exception, cause);
        alert(exception.message);
      }
    }])
});
