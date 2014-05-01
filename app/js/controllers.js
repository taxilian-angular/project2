'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
  .controller('MyCtrl1', ['$scope', function($scope) {
    $scope.data = {
        choices: "ABCDE",
        value: "1"
    };
  }])
  .controller('MyCtrl2', [function() {

  }]);
