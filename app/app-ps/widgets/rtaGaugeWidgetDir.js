/**
 * Created by Julius Hernandez on 2/24/2016.
 */
"use strict";

angular.module('tedfeedApp')
  .directive('rtaGaugeWidget', [function() {

    // directive.api.object
    return {
      //scope is inheried from: 'psWidgetBody'
      templateUrl: 'app-ps/widgets/rta-gauge-widget-temp.html',
      link: function(scope, element, attrs, ctrl) {
        scope.metric = scope.item.widgetSettings.metric;
      }
    }

  }]);

