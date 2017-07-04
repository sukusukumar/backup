angular
	.module("testApp", ['ui.router'])
	.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
		$stateProvider
			.state('login', {
				url: '/login',
				views: {
					'': {
						templateUrl: "app/views/login.html",
						controller: "loginController"
					}
				}
			});
			$urlRouterProvider.otherwise("/login");
	}]);
