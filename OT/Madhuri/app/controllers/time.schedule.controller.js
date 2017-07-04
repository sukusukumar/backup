
oTech.controller('TimeScheduleController',
	function ($scope, $rootScope, $location, AppServices, $stateParams) {
		$scope.selected = sessionStorage.selected;
		$scope.selected1 = sessionStorage.selected1;
        $scope.Market = sessionStorage.Market;
	    $scope.Values = sessionStorage.selectedDevices;
	    $scope.showTime = true;
		
		/*Time An date Variables*/
		$scope.todayDate = $rootScope.getTodayDate();
		$scope.currentTime = $rootScope.getCurrentTime();
		var startDate = $scope.todayDate;
		var endDate = $scope.todayDate;
		var startTime = $scope.currentTime;
		var endTime = $scope.currentTime;
		
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
	
		$scope.getResult = function(){
			sessionStorage.setItem('startDate', startDate);
			sessionStorage.setItem('endDate', endDate);
			sessionStorage.setItem('startTime', $('#startTime').val());
			sessionStorage.setItem('endTime', $('#endTime').val());
			$location.path('/dashboard/' + $stateParams.performance + '/' + $stateParams.smenus + "/performanceResult");
		
		}  
		
		
		/*Date And Time Picker*/
		$(function () {
			$("#datepicker, #datepicker1").datepicker({ 
				autoclose: true, 
				todayHighlight: true,
				format : 'yyyy-mm-dd'
			}).datepicker('update', new Date())
			.on('changeDate', function(e)
			{
				startDate = document.getElementById('startDate').value;
				endDate = document.getElementById('endDate').value;
			});
		});
		$(function () {
            $('#datetimepicker3').datetimepicker({
				format: 'HH:mm'
            });
        });
		$(function () {
            $('#datetimepicker4').datetimepicker({
                format: 'HH:mm'
            });
        });  

	
});