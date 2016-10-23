var app = angular.module('app', ['ngRoute', 'ngCookies']);

app.config(function($routeProvider){
	$routeProvider
	.when('/', {
		templateUrl: 'partials/registration.html',
		controller: 'regController'
	})
	.when('/success', {
		templateUrl: 'partials/success.html',
		controller: 'successController'
	})
	.when('/login', {
		templateUrl: 'partials/login.html',
		controller: 'loginController'
	})
	.when('/user/:id', {
		templateUrl: 'partials/user.html',
		controller: 'successController'
	})
	.otherwise({
		redirectTo: 'partials/registration.html'
	})
})