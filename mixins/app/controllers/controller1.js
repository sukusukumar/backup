(function() {
	'use strict';
	angular
			.module('mixin')
			.controller('controller1', ['$scope', controller1]);
			
	function controller1($scope) {
		$scope.abc = function(){
			$scope.val = "controller1";
		}
	}		
})();