angular.module('starter')
	.controller("userPageController", ['$scope', '$state', '$ionicModal', 'passengerDetails', 'pnrService', function ($scope, $state, $ionicModal, passengerDetails, pnrService) {
		$scope.pnrData = {'pnr': ''};
		$scope.form = {'pnrForm': {}};
		passengerDetails.getPassenger().then(function (data) {
			console.log(data);
			$scope.userDetails = data.data[0];
		}, function (err) {
			console.log(err);
		})
		$scope.gotoHome = function () {
			$scope.searchClicked = false;
			$scope.noResults = false;
			$state.go("initial");
		}
		$scope.search = function () {
			$scope.searchClicked = false;
			$scope.noResults = false;
			if ($scope.form.pnrForm.$valid) {
					pnrService.getpnr($scope.userDetails.userName, $scope.pnrData.pnr).then(function (data) {
						if (data.data.length) {
							$scope.searchClicked = true;
							$scope.pnrDetails = data.data[0];
						} else {
							$scope.noResults = true;
						}
				}, function (err) {
					console.log(err);
				})
			}
		}
		
		$scope.getTrainLocation = function () {
			pnrService.getTrainLocation().then (function (data) {
				$scope.location = data.data[0];
				console.log(data.data[0]);
				var latLang = new google.maps.LatLng(data.data[0].lattitude, data.data[0].longitude);
				var mapOptions = {
					center: latLang,
					zoom: 15,
					mapTypeId: google.maps.MapTypeId.ROADMAP
				};
				$scope.locationModal.show().then (function () {
					$scope.map = new google.maps.Map(document.getElementById("map"), mapOptions);
					var marker = new google.maps.Marker({
						map: $scope.map,
						animation: google.maps.Animation.DROP,
						position: latLang
					});   
				})
				
			}, function (err) {
				console.log(err);
			})
		}
		
		$scope.cancelPnr = function () {
			pnrService.cancelPnr({'pnr': $scope.pnrData.pnr}).then(function (data) {
				$scope.pnrDetails.available = '0';
				console.log(data);
			}, function (err) {
				
			})
		}
		
		$ionicModal.fromTemplateUrl('views/location.html', {
			scope: $scope
		}).then(function(modal) {
			$scope.locationModal = modal;
		})
		
		$ionicModal.fromTemplateUrl('views/details.html', {
			scope: $scope
		}).then(function(modal) {
			$scope.modal = modal;
		})
		
		$scope.showDetails = function () {
			$scope.modal.show();
		}
		
		$scope.closeDetails = function () {
			$scope.searchClicked = false;
			$scope.modal.hide();
		}
		
		$scope.closeLocation = function () {
			$scope.searchClicked = false;
			$scope.locationModal.hide();
		}
	}])	