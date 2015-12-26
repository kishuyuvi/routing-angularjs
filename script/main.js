var app = angular.module('resume', ['ngRoute']);

app.config(function($routeProvider){
	$routeProvider
	.when('/',{
		templateUrl: 'new/index.html'
	})
	.when('/about',{
		templateUrl: 'new/about.html'
	})
	.when('/exp',{
		templateUrl: 'new/exp.html'
	})
	
});