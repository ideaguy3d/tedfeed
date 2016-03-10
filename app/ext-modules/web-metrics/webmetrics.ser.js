/**
 * Created by Julius Hernandez on 2/23/2016.
 */

"use strict";

angular.module('fakeWebMetrics').factory('webMetricsSer',
  ['$rootScope',
  function($rootScope){
    var bandWidthPct  = 20.0;
    var cpuPct        = 10.0;
    var salesAmt      = 1000.0;
    var alphaSalesAmt = 700.0;
    var betaSalesAmt  = 300.0;

    var broadcastMessage = function(time, bandwidthPct, cpuPct, salesAmt, alphaSalesAmt, betaSalesAmt){
      //solve something
      $rootScope.$broadcast('webMetricsService-recieved-data-event', {
        'time': time,
        'bandwidthPct': bandwidthPct,
        'cpuPct': cpuPct,
        'salesAmt': salesAmt,
        'alphaSalesAmt': alphaSalesAmt,
        'betaSalesAmt': betaSalesAmt
      });
    };

    setInterval(function(){
      broadcastMessage(new Date(), bandWidthPct, cpuPct, salesAmt, alphaSalesAmt, betaSalesAmt);

      //update vals
      var r = Math.random();
      bandWidthPct += 15 * r - 7.5;
      if(bandWidthPct > 100) bandWidthPct = 100;
      if(bandWidthPct < 0) bandWidthPct = 0;

      r = Math.random();
      cpuPct += 15 * r - 7.5;
      if(cpuPct > 100) cpuPct = 100;
      if(cpuPct < 0) cpuPct = 0;

      r = Math.random();
      alphaSalesAmt += r * 10;
      if(alphaSalesAmt < 0) alphaSalesAmt = 0;

      r = Math.random();
      betaSalesAmt += r * 10;
      if(betaSalesAmt < 0) betaSalesAmt = 0;

      salesAmt = alphaSalesAmt + betaSalesAmt;

    }, 1000);

    return {
      getTitle: function(metric){
        switch (metric) {
          case 'time':
            return 'Time';
          case 'bandwidthPct':
            return 'Bandwidth %';
          case 'cpuPct':
            return 'CPU %';
          case 'salesAmt':
            return 'Sales';
          case 'alphaSalesAmt':
            return 'Alpha Sales';
          case 'betaSalesAmt':
            return 'Beta Sales';
        }
        return undefined;
      },
      getTitleForMetric: function(metric) {
        switch (metric) {
          case 'time':
            return 'Time';
          case 'bandwidthPct':
            return 'Bandwidth %';
          case 'cpuPct':
            return 'CPU %';
          case 'salesAmt':
            return 'Sales';
          case 'alphaSalesAmt':
            return 'Alpha Sales';
          case 'betaSalesAmt':
            return 'Beta Sales';
        }
        return undefined;
      }
    }
  }]);


