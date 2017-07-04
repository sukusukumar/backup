(function() {
	'use strict';
	angular
			.module('mixin', ['ui.router'])
			.config(moduleConfig);
			
	function moduleConfig($stateProvider, $urlRouterProvider) {
		var header = {
			"template": '<h2>This is a header</h2>',
			"controller": function($scope) {
				
			}
		};	
		$stateProvider
				.state('mixin', {
					"url": '/mixin',
					"views": {
						"header": header,
						"": {
							"template": 'hello',
							"controller": "mixinController"
						}
					}
				})
		$urlRouterProvider.otherwise('mixin');
	}		
})();