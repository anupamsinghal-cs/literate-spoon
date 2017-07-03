var app = angular.module('myApp', ['module1','service','ngRoute','ngMaterial']);
//********************************************************************************************************************************************

(function () {
  'use strict';
  var app = angular.module('module1', ['ngRoute']);

  //***************************************************************************************************************************************************


  app.config(['$routeProvider','$locationProvider',function($routeProvider,$locationProvider) {
   

    $locationProvider.html5Mode(true);
    //***************************************************************************************************************************************************
    $routeProvider
    .when('/', {
      templateUrl : 'views/default.html'
    })
	.when('/login', {
      templateUrl : 'views/login.html',
	  controller : 'MainController'
    })
	.when('/register', {
      templateUrl : './views/register.html',
	  controller : 'MainController'
    })

    .when('/departments', {
      templateUrl : 'views/departments.html',
	  controller : 'MainController'
    })

    .when('/professor', {
      templateUrl : 'views/professor.html',
	  controller : 'MainController'
    })
    //***************************************************************************************************************************************************
    .otherwise({redirectTo: '/'});
  }]);

  //***************************************************************************************************************************************************
})();