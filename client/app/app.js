'use strict';

angular.module('demoApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ui.router',
  'ngMaterial',
  'mainControllerModule'
])
.constant("Message", {
  "unique": "Please enter unique time.",
  "require": "Please enter item."
})
.config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
  $urlRouterProvider
    .otherwise('/');

  $locationProvider.html5Mode(true);
});