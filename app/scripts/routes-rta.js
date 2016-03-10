/**
 * Created by Julius Hernandez on 2/24/2016.
 */
"use strict";

angular.module('tedfeedApp').config(['$routeProvider', function($routeProvider){
  var routes = [
    {
      url: '/dashboard',
      config: {
        template: '<rta-dashboard></rta-dashboard>'
      }
    },
    {
      url: '/designs',
      config: {
        template: '<h1>jDesigns</h1><p>... here are some of my designs</p>'
      }
    },
    {
      url: '/interfaces',
      config: {
        template: '<h1>jUser Interfaces</h1><p>... here are some User Interfaces I\'ve developed</p>'
      }
    }
  ];

  routes.forEach(function(route){
    $routeProvider.when(route.url, route.config);
  });

}]);
