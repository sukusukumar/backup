angular.module('starter')
	.service("loginService", ['$http', '$q', 'appConstant', function($http, $q, appConstant) {
		this.setUserType = function (type) {
			sessionStorage.setItem('login.userType', type);
		}
		this.authenticate = function (loginData, locationDetils) {
			var deferred = $q.defer();
			var data = {'userName': loginData.userName, 'password': loginData.password, 'lattitude': locationDetils.lattitude, 'longitude': locationDetils.longitude};
			$http({
				method: 'POST',
				url: appConstant.apiBaseUrl + 'PNR/login.php',
				data: data,
				headers: {"Content-Type": "application/json"}
			}).then (function (data) {
				deferred.resolve(data);
			}, function (err) {
				deferred.reject(err);
			})
			return deferred.promise;
		}
	}])