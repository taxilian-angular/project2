'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
  .controller('MyCtrl1', ['$scope', function($scope) {
    $scope.data = {
        choices: "ABCDE",
        value: "1"
    };
  }])




  .controller('MyCtrl2', ['$scope', function($scope) {
    $scope.data = {
        choices: "ABCDE",
        value: "1",
        questions: []
    };
    var questions = $scope.data.questions;
    for (var i = 0; i < 35; ++i) {
        questions.push({value: ""});
    }

    $scope.randomize = function($event) {
        for (var i = 0; i < 35; ++i) {
            questions[i].value = ""+Math.floor((Math.random() * 5));
        }
        $event.preventDefault();
    };
  }]);
