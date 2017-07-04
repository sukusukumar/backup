// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic', 'ngCordova', 'ui.router'])
.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
	$stateProvider
		.state('initial', {
			url: '/initial',
			templateUrl: "views/initial.html",
			controller: "initialScreenController"
		})
		.state('admin', {
			url: "/admin",
			templateUrl: "views/adminPage.html",
			controller: "adminPageController"
		})
		.state('user', {
			url: "/user",
			templateUrl: "views/userPage.html",
			controller: "userPageController"
		})
		$urlRouterProvider.otherwise('/initial');
}])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
.constant('appConstant', {
	apiBaseUrl: 'http://192.168.0.15:1234/'
});
