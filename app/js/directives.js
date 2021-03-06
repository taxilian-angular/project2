'use strict';

/* Directives */


var module = angular.module('myApp.directives', []);

module.directive('appVersion', ['version', function(version) {
    return function(scope, elm, attrs) {
      elm.text(version);
    };
  }]);

module.directive('gcBubbleRow', [function() {
    var bubbledValue = '&#xEEF2;';
    return {
        restrict: 'EA',
        scope: {
            choices: '=',
            value: '='
        },
        templateUrl: 'partials/gcBubbleRow.html',
        link: function(scope, element, attrs) {
            var callCount = {};
            function countCalls(bub, idx) {
                var key = bub + "-" + idx;
                callCount[key] = (callCount[key] || 0) + 1;
                console.log("getBubbleValue called with ", key, " #", callCount[key]);
            }
            scope.getBubbleValue = function(bub, $index) {
                var indexes;
                countCalls(bub, $index);
                if (scope.value && scope.value.indexOf($index) > -1) {
                    return bubbledValue;
                } else {
                    return scope.choices.substr($index,1);
                }
            };
            scope.toggleBubbleValue = function($index, $event) {
                var oldVal = scope.value || "";
                var newVal = oldVal;
                if (oldVal.indexOf($index) > -1) {
                    newVal = oldVal.replace($index, '', 'g');
                } else {
                    newVal += $index;
                    // enforce sort order
                    newVal = newVal.split("");
                    newVal.sort();
                    newVal = newVal.join("");
                }
                scope.value = newVal;
                $event.stopPropagation();
            };
        }
    };
  }]);
