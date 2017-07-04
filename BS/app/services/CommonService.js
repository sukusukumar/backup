BS.service('CommonService',['$http', '$rootScope', '$location', '$q',
	function ( $http,  $location, $rootScope, $q) {
		return {
			suku:function(){
				alert('came');
			}
		};
	}]);