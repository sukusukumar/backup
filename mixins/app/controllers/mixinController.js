(function() {
	'use strict';
	angular
			.module("mixin")
			.controller("mixinController", ['$scope', mixinController]);
			
	function mixinController($scope) {
		$scope.val = "main controller";
		var ctrl1 = $controller('controller1', {$scope: $scope});
		$scope.abc();
	}		
})();