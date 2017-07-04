oTech.controller('deviceAdminController',
	function ($scope, $rootScope, $location, AppServices, $stateParams) {
		
		var token = sessionStorage.token;
		var userId = sessionStorage.userId;
		$rootScope.role = sessionStorage.role;
		var deviceId;
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
		
		$scope.openDevicedata =function(e){
			
			alert($(e.currentTarget).text());
		}
		$scope.deviceAdminGridOptions = oApp.config.deviceAdminGridOptions;
		
		 $scope.deviceAdminGridOptions.onRegisterApi = function( gridApi ) { //extra code
		
		    $scope.gridApi = gridApi;
		  $scope.gridApi.selection.on.rowSelectionChanged($scope,function(row){
		         //console.log(row);
			deviceId =	row.entity.deviceId;
				$scope.approve = function(){
					promise = AppServices.GetapproveData(userId, token ,deviceId);
					promise.then(
					function(data){
						
						$scope.deviceAdminData();
					},
					function(err){
						alert("error");
					}
					);
				}
			
			$scope.reject = function(){
				promise = AppServices.GetrejectData(userId, token ,deviceId);
				promise.then(
				function(data){
					
					$scope.deviceAdminData();
				},
					function(err){
						alert("error");
					}
					);
				} 
	   
		      }); 
	     };

		
		$scope.deviceAdminData = function(){
		promise = AppServices.GetdeviceAdminData(userId, token);
		promise.then(
			function(data){
				
				$scope.deviceAdminGridOptions.data = data.devicesList;
				
				$scope.gridApi.selection.selectRow($scope.deviceAdminGridOptions.data[0]); //extra code
			},
			function(err){
				
			}
		);
	   }
	   
		
		$scope.deviceAdminData();
});