'use strict';

var app = angular.module('myApp');

app.controller('mainCtrl', function($scope) {
  console.log('mainCtrl!');
  $scope.color = 'red';

  this.color = 'green';
});

app.controller('homeCtrl', function() {
  console.log('homeCtrl!');
});

app.controller('menuCtrl', function() {
  console.log('menuCtrl!');
});

app.controller('contactCtrl', function() {
  console.log('contactCtrl!');
});
