angular.module('filterer', [
  'filterer.input',
  'ngRoute'
  ])
.config (function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'app/input/input.html',
      controller: 'inputController'
    })
    .when('/input', {
      templateUrl: 'app/input/input.html',
      controller: 'inputController'
    })
});