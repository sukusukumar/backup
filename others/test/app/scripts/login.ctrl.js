angular
	.module("testApp")
	.controller("loginController", ['$scope', 'customService', function ($scope, customService) {
		
		$scope.var1 = "india";
		$scope.var2 = {'country': 'USA'};
		
		console.log($scope);
		
		$scope.hitService = function () {
			customService.serviceCall().then(function(data) {
				console.log(data);
			}, function(err) {
				console.log(err);
			})
		}
		$scope.abort = function () {
			customService.abort();
		}
	}])
	
angular.module("testApp").directive("customDir", [function () {
	return {
		scope: {
			var1: '@'
		},
		template: '<input type="text" ng-model="var1">',
		controller: function ($scope) {
			console.log($scope);
		},
		link: function (scope, ele, attr, ctrl) {
			
		}
	}
}])
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	angular
	.module("testApp")
	.service("customService", function ($q, $http, $timeout) {
		var deferred;
		
		this.serviceCall = function () {
			deferred = $q.defer();
			if (deferred.promise) {
			
			
			$http({
				url: 'https://aerpackitpreproduction.flightconex.de/redbox/api/pt7q1ba0g82u24ith051ko7sl4/superPNR/S013GT7/details',
				method: 'GET',
				timeout: deferred.promise
			}).then(function (data) {
					deferred.resolve(data);
			}, function (err) {
				deferred.reject(err);
			})
		}
			return deferred.promise;
		
		}
		
		this.abort = function () {
			console.log()
			deferred.resolve('stopped');
		}
	})