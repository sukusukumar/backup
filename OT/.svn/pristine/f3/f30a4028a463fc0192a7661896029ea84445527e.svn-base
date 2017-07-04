oTech.controller('testplanAdminController',
	function ($scope, $rootScope, $location, AppServices, $stateParams) {

		var token = sessionStorage.token;
		var userId = sessionStorage.userId;
		
		var selectedTestplan;
		var testPlanuser="";
		var selectedUserId;
		var selectedTestplanId;
		
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
		
		// To get selected test plan user data
		
	   $scope.testplanUserSelectedGridOptions = oApp.config.testplanUserSelectedGridOptions;
		$scope.testplanUserSelectedGridOptions.onRegisterApi = function( gridApi ) { //extra code
			$scope.gridApi = gridApi;
			$scope.gridApi.selection.on.rowSelectionChanged($scope,function(row){
				console.log(row);
			selectedTestplanId = selectedTestplan;
			selectedUserId = row.entity.userId;
			}); 
	     };
	
		
		$scope.testplanUserSelected = function(){
		promise = AppServices.selectedTestPlanUserTableData(selectedTestplan,testPlanuser,userId, token);
		promise.then(
		function(data){
				$scope.testplanUserSelectedGridOptions.data = data;
				$scope.gridApi.selection.selectRow($scope.testplanUserSelectedGridOptions.data[0]); //extra code
			},
			function(err){
				
			}
		);
	   }
	 // To get available test plan user data
	  $scope.testplanUserAvailableGridOptions = oApp.config.testplanUserAvailableGridOptions;
		$scope.testplanUserAvailableGridOptions.onRegisterApi = function( gridApi ) { //extra code
			$scope.gridApi = gridApi;
			$scope.gridApi.selection.on.rowSelectionChanged($scope,function(row){
				console.log(row);
			selectedTestplanId = selectedTestplan;
			selectedUserId=row.entity.userId;
			}); 
	     };

		
		$scope.testplanUserAvailable = function(){
		promise = AppServices.availableTestPlanUserTableData(selectedTestplan,testPlanuser,userId, token);
		promise.then(
		function(data){
				$scope.testplanUserAvailableGridOptions.data = data;
				$scope.gridApi.selection.selectRow($scope.testplanUserAvailableGridOptions.data[0]); //extra code
			},
			function(err){
				
			}
		);
	   }
	   
		$scope.testplanAdminGridOptions = oApp.config.testplanAdminGridOptions;
		$scope.testplanAdminGridOptions.onRegisterApi = function( gridApi ) { //extra code
			$scope.gridApi = gridApi;
			$scope.gridApi.selection.on.rowSelectionChanged($scope,function(row){
				console.log(row);
				selectedTestplan=row.entity.testplanId;
				testPlanuser=row.entity.createdBy;
				
				$scope.testplanUserAvailable();
				$scope.testplanUserSelected();
			}); 
	     };

		
		$scope.getTestplanAdminData = function(){
		promise = AppServices.getTestplanAdminData(userId, token);
		promise.then(
		function(data){
				$scope.testplanAdminGridOptions.data = data;
				$scope.gridApi.selection.selectRow($scope.testplanAdminGridOptions.data[0]); //extra code
			},
			function(err){
				console.log("error");
			}
		);
	   }
		
		 /* Function for assigning testplan to user */
	   $scope.addTestplanToUser = function(){
			promise = AppServices.getAssignTestplanData(selectedTestplanId,selectedUserId,token);
		         promise.then(
			     function(data){
				if (data.status =="success"){
					$scope.testplanUserAvailable();
					$scope.testplanUserSelected();
					}
				else
					console.log("error");
                 },
			     function(err){
					console.log("error");	
			     }
		       );
	   }
	   /* function for unassigning testplan to user */
	   
	   	   $scope.removeTestplanFromUser = function(){ 
			promise = AppServices.getUnassignTestplanData(selectedTestplanId,selectedUserId,token);
		         promise.then(
			     function(data){
					if (data.status == "success"){
						$scope.testplanUserAvailable();
						$scope.testplanUserSelected();
					}
					else
						console.log("error");
			     },
			     function(err){
					console.log("error");	
			     }
		       );
		   }
	   $scope.getTestplanAdminData();
});