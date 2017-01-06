'use strict';

var AmPortal = {};

var App = angular.module('AmPortal', ['AmPortal.filters', 'AmPortal.services', 'AmPortal.directives']);

// Declare app level module which depends on filters, and services
App.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/users', {
        templateUrl: 'users/layout',
        controller: UserController
    });
    
    $routeProvider.when('/home', {
        templateUrl: 'users/home',
        controller: HomeController
    });

    $routeProvider.otherwise({redirectTo: '/home'});
}]);
