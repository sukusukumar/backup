angular.module('starter')
	.controller("adminPageController", ['$scope', '$state', 'pnrService', '$ionicLoading', function ($scope, $state, pnrService, $ionicLoading) {
		$scope.gotoHome = function () {
			$state.go("initial");
		}
		$ionicLoading.show({
			content: 'Loading',
			animation: 'fade-in',
			maxWidth: 200,
			showDelay: 0
		})
		pnrService.getPnrList().then (function (data) {
			console.log(data);
			$ionicLoading.hide();
			$scope.pnrList = data.data;
		}, function (err) {
			console.log(err);
		})
	}])