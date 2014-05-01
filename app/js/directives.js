'use strict';

/* Directives */


var module = angular.module('myApp.directives', []);

module.directive('appVersion', ['version', function(version) {
    return function(scope, elm, attrs) {
      elm.text(version);
    };
  }]);

module.directive('gcBubbleRow', [function() {
    return {
        restrict: 'EA',
        scope: {
            choices: '='
        },
        templateUrl: 'partials/gcBubbleRow.html',
        link: function(scope, element, attrs) {
        }
    };
  }]);
