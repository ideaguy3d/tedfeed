/**
 * Created by Julius Hernandez on 2/24/2016.
 */
angular.module('tedfeedApp').directive('rtaDashboard', [
  '$localStorage',
  function($localStorage){
    return  {
      restrict: 'E',
      scope: {

      },
      template: '<ps-dashboard></ps-dashboard>',
      link: function(scope){

        scope.gridsterOptions = {
          columns: 12,
          margins: [10, 10],
          outerMargin: false,
          pushing: true,
          floating: true,
          swapping: true
        };

        scope.widgetDefinitions = [
          {
            title: 'Gauge',
            settings: {
              sizeX: 2,
              sizeY: 2,
              minSizeX: 1,
              minSizeY: 1,
              template: '<rta-gauge-widget></rta-gauge-widget>',
              widgetSettings: {
                metric: 'cpuPct'
              }
            }
          }
        ];

        scope.widgets = $localStorage.widgets || [

        ];

        scope.$watch('widgets', function() {
          $localStorage.widgets = scope.widgets;
        }, true);


      }
    }
  }
]);
