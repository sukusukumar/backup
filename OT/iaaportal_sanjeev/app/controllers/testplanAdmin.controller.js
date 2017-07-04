oTech.controller('testplanAdminController',
	function ($scope, $rootScope, $location, AppServices, $stateParams) {

		var token = sessionStorage.token;
		var userId = sessionStorage.userId;
		$rootScope.slideContent();
		window.onresize = function(event) {
			$rootScope.slideContent();
		}
		$scope.name = sessionStorage.getItem("username");
		/*
			To get dashboard menu data
		*/
		$scope.getDashBoardMenu = function(){
			if($rootScope.menuData == undefined){
				$rootScope.getMenuData();
			}
		}
		/*
			To get favourite reports
		*/
		$scope.getFavouriteReports = function(){
			if($rootScope.Favourites == undefined){
				$rootScope.getFavouriteReports();
			}
		}
		$scope.getDashBoardMenu();
		$scope.getFavouriteReports();
		
		$scope.testplanAdminGridOptions = oApp.config.testplanAdminGridOptions;	
		/* To get Available usergroups */
		$scope.testpalnAdminGrid = function(){
		promise = AppServices.gettestplanAdminData(userId, token);
		promise.then(
			function(data){
				$scope.testplanAdminGridOptions.data = data;
			
			},
			function(err){
				console.log(err);
			}
		);
	   }
	   $scope.testpalnAdminGrid();
	   
      
	   
	   
	   
});