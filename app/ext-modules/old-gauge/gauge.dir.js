/**
 * Created by Julius Hernandez on 2/23/2016.
 */

angular.module('oldGauge')
  .directive('psOldGauge', ['webMetricsSer', function(webMetricsSer){
    return {
      scope: {
        metric: '@'
      },
      templateUrl: 'ext-modules/gauge/views/ps-gauge-temp.html',
      link: function(scope, el, attrs){
        scope.initialized = false;
        scope.title = webMetricsSer.getTitle(scope.metric);
        scope.options = {
          width: 400, height: 400,
          redFrom: 90, redTo: 100,
          yellowFrom: 75, yellowTo: 90,
          minorTicks: 5
        };

        scope.$on('webMetricsService-recieved-data-event', function(evt, data){

          if(!scope.initialized) {
            scope.data = google.visualization.arrayToDataTable([
              //because this is a label, this is not index 0
              ['Label', 'Value'],
              [scope.title, 70]
            ]);

            scope.chart = new google.visualization.Gauge(el[0]);
            scope.initialized = true;
          }

          scope.data.setValue(0, 1, Math.round(data[scope.metric]));
          scope.chart.draw(scope.data, scope.options);
        });
      }
    }
  }]);
