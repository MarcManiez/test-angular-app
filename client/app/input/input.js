angular.module('filterer.input', [])

.controller('inputController', function ($scope) {
  $scope.user = {
    name: '',
    month: '',
    day: '',
    year: ''
  }
});