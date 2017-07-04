angular.module('starter')
	.service("pnrService", ['$http', '$q', 'appConstant', function($http, $q, appConstant) {
		this.getPnrList = function () {
			var deferred = $q.defer();
			$http({
				method: 'GET',
				url: appConstant.apiBaseUrl + 'PNR/pnrList.php'
			}).then (function (data) {
				deferred.resolve(data);
			}, function (err) {
				deferred.reject(err);
			})
			return deferred.promise;
		}
		this.getpnr = function (userName, pnr) {
			var data = {'userName': userName, 'pnr': pnr};
			var deferred = $q.defer();
			$http({
				method: 'POST',
				url: appConstant.apiBaseUrl + 'PNR/getPnr.php',
				data: data,
				headers: {"Content-Type": "application/json"}
			}).then (function (data) {
				deferred.resolve(data);
			}, function (err) {
				deferred.reject(err);
			})
			return deferred.promise;
		}
		this.cancelPnr = function (data) {
			var deferred = $q.defer();
			$http({
				method: 'POST',
				url: appConstant.apiBaseUrl + 'PNR/cancelPnr.php',
				data: data,
				headers: {"Content-Type": "application/json"}
			}).then (function (data) {deferred.resolve(data)}, function (err) {deferred.reject(err)});
			return deferred.promise;
		}
		this.getTrainLocation = function () {
			var deferred = $q.defer();
			$http({
				method: 'GET',
				url: appConstant.apiBaseUrl + 'PNR/getTrainLocation.php',
				headers: {"Content-Type": "application/json"}
			}).then (function (data) {deferred.resolve(data)}, function (err) {deferred.reject(err)});
			return deferred.promise;
		}
	}])