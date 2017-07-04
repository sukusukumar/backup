angular.module('starter')
	.service("passengerDetails", ['$http', '$q', 'appConstant', function($http, $q, appConstant) {
		this.setUserId = function (id) {
			sessionStorage.setItem('userId', id);
		}
		this.getUserId = function () {
			sessionStorage.userId;
		}
		this.getPassenger = function () {
			var deferred = $q.defer();
			$http({
				method: 'POST',
				url: appConstant.apiBaseUrl + 'PNR/getPassenger.php',
				data: {'userName': sessionStorage.userId},
				headers: {"Content-Type": "application/json"}
			}).then (function (data) {
				deferred.resolve(data);
			}, function (err) {
				deferred.reject(err);
			})
			return deferred.promise;
		}
	}])