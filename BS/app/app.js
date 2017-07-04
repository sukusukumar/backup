var BS = angular.module("BS", ['ui.router','as.sortable','ui.bootstrap']).filter('BS', function (){});

BS.config(function ($stateProvider, $urlRouterProvider) {
	$urlRouterProvider
    $stateProvider
		.state("login", {
			url: "/login",
            templateUrl: "app/views/login.html",
			controller: 'LoginController'
        })
		.state("basicRules",{
			url:"/basicRules",
			templateUrl:"app/views/basicRules.html",
			controller:'basicRulesController'
		})
	$urlRouterProvider.otherwise('/basicRules');
});