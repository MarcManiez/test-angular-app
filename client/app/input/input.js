angular.module('filterer.input', [])

.controller('inputController', function ($scope, Requests) {
  $scope.entry = {
    name: '',
    month: '',
    day: '',
    year: ''
  }
  $scope.submit = (entry) => {
    // TODO: check form submissions locally before submitting
    Requests.postEntry(entry);
  }
});