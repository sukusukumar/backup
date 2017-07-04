oTech.controller('quickRunController',
	function ($scope, $rootScope, $location, AppServices, $stateParams) {
		
		var token = sessionStorage.token;
		var userId = sessionStorage.userId;
		$rootScope.slideContent();
		window.onresize = function(event) {
			$rootScope.slideContent();
		}
		$scope.name = sessionStorage.getItem("username");
		$scope.qdeviceId = 11;
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
		
		$scope.quicknext = function(){
			
			$location.path('/dashboard/quickbinding');
		}
		$scope.getDashBoardMenu();
		$scope.getFavouriteReports();
		
		$scope.openDevicedata =function(e){
			
			alert($(e.currentTarget).text());
		}
		$scope.quickrunGridOptions = oApp.config.quickrunGridOptions;
		$scope.quickrunGridOptions.onRegisterApi = function( gridApi ) { //extra code
			$scope.gridApi = gridApi;
			$scope.gridApi.selection.on.rowSelectionChanged($scope,function(row){
				
				qdeviceId = row.entity.deviceId;
				console.log(qdeviceId);
			}); 
	    };
		$scope.quickRunData = function(){
		promise = AppServices.GetquickRunData(userId, token);
		promise.then(
			function(data){
				$scope.quickrunGridOptions.data = data.devicesList;
				$scope.gridApi.selection.selectRow($scope.quickrunGridOptions.data[0]); //extra code
			},
			function(err){
				
			}
		);
	   }
	$scope.quickRunData();
});