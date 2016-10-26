var app = angular.module('app', ['ngRoute', 'ngCookies']);

app.config(function($routeProvider){
	$routeProvider
	.when('/', {
		templateUrl: 'partials/login.html',
		controller: 'loginController'
	})
	.when('/index', {
		templateUrl: 'partials/index.html',
		controller: 'indexController'
	})
	.when('/add', {
		templateUrl: 'partials/add.html',
		controller: 'indexController'
	})
	.when('/play', {
		templateUrl: 'partials/play.html',
		controller: 'indexController'
	})
})