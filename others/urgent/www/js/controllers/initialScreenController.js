angular.module('starter')
	.controller("initialScreenController", ['$scope', '$state', 'loginService', '$ionicModal', '$ionicLoading', '$ionicPopup', '$cordovaGeolocation', 'passengerDetails',
	function ($scope, $state, loginService, $ionicModal, $ionicLoading, $ionicPopup, $cordovaGeolocation, passengerDetails) {
		$scope.loginSubmitted = false;
		
		$scope.loginData = {
			'userName': '',
			'password': ''
		}
		
		$ionicModal.fromTemplateUrl('views/login.html', {
			scope: $scope
		}).then(function(modal) {
			$scope.modal = modal;
		})
		
		$scope.navigateToLogin = function (type) {
			$scope.loginSubmitted = false;
			$scope.loginData.userName = '';
			$scope.loginData.password = '';
			loginService.setUserType(type);
			$scope.userType = type;
			if (type == 'admin') {
				$scope.loginData.userName = 'admin';
			}
			$scope.modal.show();
		}
		
		$scope.closeLogin = function () {
			$scope.modal.hide();
			$scope.loginSubmitted = false;
		}
		
		var authenticate = function (loginData, lattitude, longitude) {
			showLoading();
			loginService.authenticate(loginData, {'lattitude': lattitude, 'longitude': longitude}).then (function (data) {
					stopLoading();
					if (data.data.length) {
						if (loginData.userName == 'admin' && $scope.userType == 'admin') {
							$scope.modal.hide();
							$state.go('admin');
						} else if ($scope.userType == 'user' && loginData.userName != 'admin') {
							$scope.modal.hide();
							passengerDetails.setUserId(data.data[0].userName);
							$state.go('user');
						} else {
							showAlert();
						}
					} else {
						showAlert();
					}
				}, function (err) {
					console.log(err);
					stopLoading();
				})
		}
		
		var showLoading = function () {
			$ionicLoading.show({
				content: 'Loading',
				animation: 'fade-in',
				maxWidth: 200,
				showDelay: 0
			});
		}
		
		var stopLoading = function () {
			$ionicLoading.hide();
		}
		
		var showAlert = function () {
			$ionicLoading.hide().then(function () {
				var alertPopup = $ionicPopup.alert({
					title: 'Login Failed',
					template: 'Please enter valid credentials'
				});
			});
		}
		
		$scope.doLogin = function (loginForm, loginData) {
			$scope.loginSubmitted = true;
			var lattitude = 0, longitude = 0;
			if (loginForm.$valid) {
				$cordovaGeolocation.getCurrentPosition({timeout: 10000, enableHighAccuracy: false}).then (function (position) {
					lattitude = position.coords.latitude;
					longitude = position.coords.longitude;
					console.log(position);
					authenticate(loginData, lattitude, longitude);
				}, function (err) {
					console.log(err);
				})
			}
		}
	}])