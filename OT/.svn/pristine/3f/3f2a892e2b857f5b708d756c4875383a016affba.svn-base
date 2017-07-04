oTech.controller('quickbindingController',
	function ($scope, $rootScope, $location, AppServices, $stateParams) {
		
		var token = sessionStorage.token;
		var userId = sessionStorage.userId;
		$rootScope.slideContent();
		window.onresize = function(event) {
			$rootScope.slideContent();
		}
		$scope.name = sessionStorage.getItem("username");
		$scope.qqdeviceId = 11;
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
		
		$scope.openDevicedata =function(e){
			
			alert($(e.currentTarget).text());
		}
	$scope.quickrunbindingGridOptions = oApp.config.quickrunbindingGridOptions;
		$scope.quickrunbindingGridOptions.onRegisterApi = function( gridApi ) { //extra code
			$scope.gridApi = gridApi;
			$scope.gridApi.selection.on.rowSelectionChanged($scope,function(row){
				
				qqdeviceId = row.entity.deviceId;
				console.log(qqdeviceId);
				quickRunbinding1Data();
			}); 
	    };
		$scope.quickRunbindingData = function(){
		promise = AppServices.GetquickRunbindingData(userId, token);
		promise.then(
			function(data){
				$scope.quickrunbindingGridOptions.data = data.devicesList;
				$scope.gridApi.selection.selectRow($scope.quickrunbindingGridOptions.data[0]); //extra code
			},
			function(err){
				
			}
		);
	   }
	   // new
	   $scope.quickrunbinding1GridOptions = oApp.config.quickrunbinding1GridOptions;
		$scope.quickrunbinding1GridOptions.onRegisterApi = function( gridApi ) { //extra code
			$scope.gridApi = gridApi;
			$scope.gridApi.selection.on.rowSelectionChanged($scope,function(row){
				
				qqdeviceId = row.entity.deviceId;
				console.log(qqdeviceId);
			}); 
	    };
		$scope.quickRunbinding1Data = function(){
		promise = AppServices.GetquickRunbinding1Data(userId, token);
		promise.then(
			function(data){
				$scope.quickrunbinding1GridOptions.data = data.devicesList;
				$scope.gridApi.selection.selectRow($scope.quickrunbinding1GridOptions.data[0]); //extra code
			},
			function(err){
				
			}
		);
	   }
	   $scope.quickRunbindingData();
	
});