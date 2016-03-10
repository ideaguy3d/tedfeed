/**
 * Created by Julius Hernandez on 2/24/2016.
 */

angular.module('psCharts')
  .directive('psGauge', [
    'webMetricsSer',
    function(webMetricsSer) {
      //dir.api.obj
      return {
      templateUrl: 'ext-modules/charts/chart-gauge-tem.html',
      link: function(scope, element, attrs) {
        scope.error = false;

        //locate the widget showing this gauge
        var widget = element.closest('.gridster-item');
        scope.width = widget.width();
        scope.height = widget.height();

        //monitor the widgets size
        widget.resize(function() {
          scope.options.width = widget.width();
          scope.options.height = widget.height();
        });

  //========================================================================================
  // everything prior to this line disappeared in the "Building a Gauge > Importing psGauge"
  //========================================================================================

        scope.options = {
          width: scope.width || 200,
          height: scope.height || 200,
          redFrom: 60, redTo: 100,
          yellowFrom: 60, yellowTo: 90,
          minorTick: 5
        };

        scope.title = webMetricsSer.getTitleForMetric(scope.metric);
        scope.initialized = false;

        scope.$on('webMetricsService-recieved-data-event', function(evt, data){
           if(!scope.initialized){
             scope.data = google.visualization.arrayToDataTable([
               ['Label', 'Value'],
               [scope.title, 0]
             ]);
             scope.chart = new google.visualization.Gauge(element[0]);
             scope.initialized = true;
           }

          scope.data.setValue(0, 0, scope.title);
          scope.data.setValue(0, 1, Math.round(data[scope.metric]));
          scope.chart.draw(scope.data, scope.options);
        });
      }
    }
  }]);
