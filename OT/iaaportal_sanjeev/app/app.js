var oTech = angular.module("oTech", ['ui.router','ngTouch', 'ui.grid', 'ui.grid.edit', 'ui.grid.selection', 'ui.grid.pagination', 'ngSanitize','agGrid']).filter('oTech', function (){});;

oTech.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', '$httpProvider',function ($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider,$q,$location) {

     $urlRouterProvider

     $stateProvider
        .state("login", {
            url: "/login",
            templateUrl: "app/views/login.html",
			controller: 'LoginController'
        })
        .state("dashboard", {
            url:"/dashboard",
            templateUrl: "app/views/dashboard.html",
			controller: 'DashBoardController'
        })
		.state("changePassword",{
			url:"/dashboard/changePassword",
			templateUrl:"app/views/changePassword.html",
			controller: 'changePasswordController'
		})
		.state("deviceAvailability",{
			url:"/dashboard/deviceAvailability",
			templateUrl:"app/views/deviceAvailability.html",
			controller: 'deviceAvailabilityController'
		})
		
		.state("deviceMaps",{
			url:"/dashboard/deviceMaps",
			templateUrl:"app/views/deviceMaps.html",
			controller: 'deviceMapsController'
		})
		.state("userTable",{
			url:"/dashboard/userTable",
			templateUrl:"app/views/userTable.html",
			controller:'userTableController'
		})
		.state("UserGroups",{
			url:"/dashboard/UserGroups",
			templateUrl:"app/views/userGroups.html",
			controller:'UserGroupsController'
		})
		.state("adminstrator",{
			url:"/dashboard/administrator",
			templateUrl:"app/views/adminstrator.html",
			controller: 'AdminstartorController'
		})
		.state("serversetting",{
			url:"/dashboard/serverSetting",
			templateUrl:"app/views/serverSetting.html",
			controller: 'serverSettingController'
		})
		.state("landingpage",{
			url:"/dashboard/landingPage",
			templateUrl:"app/views/landingPage.html",
			controller: 'landingPageController'
		})
		.state("useradminstration",{
			url:"/dashboard/userAdminstration",
			templateUrl:"app/views/useradminstrator.html",
			controller: 'userAdminstrationController'
		})
		.state("deviceAdmin",{
			url:"/dashboard/deviceAdmin",
			templateUrl:"app/views/deviceAdmin.html",
			controller: 'deviceAdminController'
		})
		.state("addreports",{
			url:"/dashboard/addReports",
			templateUrl:"app/views/addReports.html",
			controller: 'addReportsController'
		})
		.state("assignReport",{
			url:"/dashboard/assignReport",
			templateUrl:"app/views/assignReport.html",
			controller: 'assignReportController'
		})
		.state("addUsergroups",{
			url:"/dashboard/addUsergroups",
			templateUrl:"app/views/addUsergroups.html",
			controller: 'addUsergroupsController'
		})
		.state("quickRun",{
			url:"/dashboard/quickRun",
			templateUrl:"app/views/quickRun.html",
			controller: 'quickRunController'
		})
		.state("quickbinding",{
			url:"/dashboard/quickbinding",
			templateUrl:"app/views/quickbinding.html",
			controller: 'quickbindingController'
		})
		
		.state("testplanAdmin",{
			url:"/dashboard/testplanAdmin",
			templateUrl:"app/views/testplanAdmin.html",
			controller: 'testplanAdminController'
		})
		
		 .state("replayMap",{
			url:"/dashboard/replayMap",
			templateUrl:"app/views/replay.map.html",
			controller:'replayMapsController'
		})
		 .state("deviceMeasurements",{
			url:"/dashboard/deviceMeasurements",
			templateUrl:"app/views/deviceMeasurements.html",
			controller:'deviceMeasurementsController'
		})
		 .state("driveRoutes",{
			url:"/dashboard/driveRoutes",
			templateUrl:"app/views/driveroutes.html",
			controller:'DriveRoutesController'
		})


		.state("reports",{
			url:"/dashboard/reports",
			templateUrl:"app/views/reports.html",
			controller: 'ReportsController'
		})
		.state("reportCategory",{
			url:"/dashboard/reportsCategory",
			templateUrl:"app/views/reportsCategory.html",
			controller:'ReportscategoryController'
		})
		.state("myDevices",{
			url:"/dashboard/myDevices",
			templateUrl:"app/views/mydevices.html",
			controller:'MyDevicesController'
		})
		.state("testScript",{
			url:"/dashboard/testScript",
			templateUrl:"app/views/testScript.html",
			controller:'testScriptController'
		})
		.state("Performance",{
			url:"/dashboard/:performance",
			templateUrl:"app/views/performance.html",
			controller:'PerformanceController'
		})
		.state("zoneMarket",{
			url:"/dashboard/:performance/:zoneMarket",
			templateUrl:"app/views/zonemarket.html",
			controller:'MarketController'
		})
		.state("CommomReport",{
			url:"/dashboard/:performance/:zoneMarket/commomReport",
			templateUrl:"app/views/commonReport.html",
			controller:'CommomReportController'
		})
		.state("timeSchedule",{
			url:"/dashboard/:performance/:zoneMarket/timeSchedule",
			templateUrl:"app/views/timeSchedule.html",
			controller:'TimeScheduleController'
		})
		.state("performanceResult",{
			url:"/dashboard/:performance/:zoneMarket/performanceResult",
			templateUrl:"app/views/performanceResult.html",
			controller:'PerformanceResultController'
		})
		
	
	 $urlRouterProvider.otherwise('/login');
	 
	    $.ajaxSetup({
            statusCode: {
                401: function(){
                  
				  var errorMessage="your session is timed out. Please login again";
					console.log('401 error :: ');
					//$scope.error = "your session is timed out. Please login again";loginErrorDiv
                  angular.element(document.getElementById('logoutDiv')).scope().signOut();  
			/*	var scope=angular.element(document.getElementById('loginErrorDiv')).scope();//.setErrorMessage(errorMessage);
				scope.$apply(function(){
				scope.error=errorMessage;
				});*/
			/*	  angular.element('LoginController').scope().$apply(
				  function(){
				  $scope.error="your session is timed out. Please login again";
				  }
				  );  */
				
                },
				200: function(){
                   
                 //   console.log('response 200');
				    
                },
				error:function(xhr,status,error){
				console.log('error :: '+status);
				}
            }
        });

}]);

oTech.run(function($rootScope, $location, $stateParams, $sce, AppServices, $timeout) {

	$rootScope.$on('$locationChangeStart', function (event, next, current) {

        if ($location.path() !== '/login' && sessionStorage.getItem('isLogin') == null) {
            $location.path('/login');
        }
		
    });
	
	/*   $rootScope.$on("$stateChangeStart", function (event, toState, toParams, fromState, fromParams) {
        console.log(JSON.stringify(toState) + " :: "+ JSON.stringify(fromState) + " :: ");
        if(!('data' in toState) || !('access' in toState.data)){
            $rootScope.error = "Access undefined for this state";
          //  event.preventDefault();
        }
        else if (!Auth.authorize(toState.data.access)) {
            $rootScope.error = "Seems like you tried accessing a route you don't have access to...";
          //  event.preventDefault();

           if(fromState.url === '^') {
                if(Auth.isLoggedIn()) {
                    $state.go('user.home');
                } else {
                    $rootScope.error = null;
                    $state.go('anon.login');
                }
            }
			
        }
    });
	*/
	
	/*
		Function for menu toggle
	*/
	$rootScope.toggleMenu = function(){
		//if($location.url().substring(1,$location.url().length) == 'dashboard'){
			if ($('.orchestra_menu').css('display') == "none"){
				$('.orchestra_menu').slideDown('slow');
				$('.maincontent').addClass('menumargin');
				$('.reports ul li').css('width','18.7%');
			}
			else {
				$('.orchestra_menu').slideUp('slow');
				$('.maincontent').removeClass('menumargin');
				$('.reports ul li').css('width','');
			}
		//}
		//else{
		//	$location.path('/dashboard');
		//}
	}
	/*
		Function to goto DashBoard
	*/
	$rootScope.gotoDashBoard = function(){
		$location.path('/dashboard');
	}
	/* Test Script navigation */
	$rootScope.testscript = function(){
	
		$location.path('/dashboard/testScript');
	}
	/*
		Function for submenu toggle
	*/
	$rootScope.toggleSubMenu = function(e, key){
		if(key != 'Reports' && key != 'Heat Maps' && key != 'Measurements'){
			if ($(e.currentTarget).parent().children('ul').css('display') == "none"){
				$(e.currentTarget).parent().children('ul').slideDown('slow');
				$(e.currentTarget).parent().children('a').children('em').removeClass('glyphicon-plus').addClass('glyphicon-minus');
			}
			else if($(e.currentTarget).parent().children('ul').css('display') != "none"){
				$(e.currentTarget).parent().children('ul').slideUp('slow');
				$(e.currentTarget).parent().children('a').children('em').removeClass('glyphicon-minus').addClass('glyphicon-plus');
			}
		}
		else if(key == 'Reports'){
			$location.path('/dashboard/reportsCategory');
		}
		else if(key == 'Measurements'){
			$location.path('/dashboard/deviceMeasurements');
		}
		
	}
	/*
		Function to show reports page
	*/
	$rootScope.ShowReports = function(menuUrl, screenName){
		console.log();
		var name =screenName.replace(/ /g,"");
		
		if(menuUrl != null && name != 'DriveRoutes'  ) {
			sessionStorage.setItem('menuUrl',menuUrl);
			$location.path('/dashboard/reports');
		}
		else if(name == 'System'){
			$location.path('/dashboard');
		}
		//$location.path('/dashboard/'+$stateParams.userId+'/reports');
		else if(name == 'Availability'){
			$location.path('/dashboard/deviceAvailability');	
		}
		//
		else if(name == 'DeviceMap'){
			$location.path('/dashboard/deviceMaps');	
		}
		//
		else if(name == 'ReplayMap'){
			$location.path('/dashboard/replayMap');	
		}
		else if(name == 'MyDevices'){
			$location.path('/dashboard/myDevices');	
			
		}
		else if(name == 'DriveRoutes'){
			sessionStorage.setItem('DriveroutesmenuUrl',menuUrl);
			$location.path('/dashboard/driveRoutes');
			
		}
		 else if(name == 'UsersTable'){
				
			$location.path('/dashboard/userTable');
		}
		else if(name == 'UserGroups'){
				
			$location.path('/dashboard/UserGroups');
		}
	}
	
	/*
		function for signout
	*/
	
	$rootScope.signOut = function(){
		sessionStorage.clear();
		console.log('logging out');
	
		$rootScope.menuData=null;
		$rootScope.role=null;
		$location.path('/login');
	
	}
	/*
		function for change Password
	*/
	$rootScope.changePassword = function(){
		$location.path('/dashboard/changePassword');	
	}
	
	/* administrator tab*/
	$rootScope.newPage = function(){
		$location.path('/dashboard/administrator');	
	}
	/* Server setting tab*/
	$rootScope.server = function(){
			$location.path('/dashboard/serverSetting');	
	}
	/*user Adminstration Tab*/
	$rootScope.useradminstration =function(){
			$location.path('/dashboard/userAdminstration');	
	}
	/*user Landingpage Tab*/
	$rootScope.landingpage =function(){

			$location.path('/dashboard/landingPage');	
	}
	/*add Reports Tab*/
	$rootScope.addreports =function(){

			$location.path('/dashboard/addReports');	
	}
		/*  add user groups */
	$rootScope.addUsergroups =function(){
			
			$location.path('/dashboard/addUsergroups');	
	}
	
		/* Test Plan Administration */
		
	$rootScope.testplanAdmin = function(){
		$location.path('/dashboard/testplanAdmin');		
	}
	/*
		device administration
	*/
	
	$rootScope.deviceAdmin = function(){
		$location.path('/dashboard/deviceAdmin');		
	}
	/*
		Function for assign reports
	
	*/
	$rootScope.assignReport = function(){
		$location.path('/dashboard/assignReport');		
	}
	
	$rootScope.slideContent = function(){
		if ($(window).width() < 970) {
			
			$('.maincontent').removeClass('menumargin');
		}
		else{
			$('.maincontent').addClass('menumargin');
		}
	}
	$rootScope.getMenuData = function(){
		promise = AppServices.GetDashboardMenu(sessionStorage.userId, sessionStorage.token);
		promise.then(
			function(data){
				
				$rootScope.menuData = data;
				
			},
			function(err){
			}
		);
	}
	$rootScope.getTodayDate = function(){
		var date = '';
		var d = new Date();
		date += d.getFullYear() + '-';
		date += (d.getMonth() + 1) + '-';
		date += d.getDate();
		return date;
	}
	$rootScope.getCurrentTime = function(){
		var time = '';
		var d = new Date();
		time += d.getHours() + ":";
		time +=d.getMinutes();
		return time;
	}
	$rootScope.goBack = function(page){
		page = page.replace(/ /g,"");
		page = page.charAt(0).toLowerCase() + page.substr(1);
		if(page == $stateParams.performance)
			$location.path('/dashboard/'+ page);
		else if(page == 'reportsCategory')
			$location.path('/dashboard/reportsCategory');
		else if(page == 'commomReport')
			$location.path('/dashboard/' + $stateParams.performance + '/' + $stateParams.zoneMarket + '/commomReport'  ) ;
		else if(page =='timeSchedule')
			$location.path('/dashboard/' + $stateParams.performance + '/' + $stateParams.zoneMarket + '/timeSchedule'  ) ;
		else
			$location.path('/dashboard/'+ $stateParams.performance + '/' + page);
	}
	/*
		To get favourite reports
	*/
	$rootScope.getFavouriteReports = function(){
		promise = AppServices.GetFavouriteReports(sessionStorage.userId, sessionStorage.token);
		promise.then(
			function(data){
				$rootScope.Favourites = data;
			},
			function(err){
			
			}
		);
	}
	
	/*
		Add User Favourites
	*/
	$rootScope.AddFavourite = function(screenId,screenName,menuUrl){
		promise = AppServices.AddUserFavourites(sessionStorage.userId, screenId, screenName, menuUrl, sessionStorage.token);		
		promise.then(
			function(data){
				//$scope.show = true;
				if(data.status != "error"){
					$rootScope.FavouritesResponseMessage = data.status;
					var newFav = {"screen_id":screenId,"screen_name":screenName,"menu_url":menuUrl};
					$rootScope.Favourites.push(newFav);	
					$('#FavouritesResponseMessageColor').css("color", "green");
				}
				else{
					$rootScope.FavouritesResponseMessage = data.errorDescription;
					$('#FavouritesResponseMessageColor').css("color", "red");
				}
				$('#FavouritesResponseMessagePopUp').modal('show');
				$timeout(function(){ $('#FavouritesResponseMessagePopUp').modal('hide'); }, 2000);
			},
			function(err){
					
			});
	}
	/*
		Remove user Favourites
	*/
	$rootScope.isRemoveFavorite = false;
	$rootScope.favourites = function(e,screen_id){	
		$rootScope.isRemoveFavorite = true;
		promise = AppServices.RemoveUserFavourites(sessionStorage.userId,screen_id, sessionStorage.token);
		promise.then(
			function(data){
				for(var i = 0;i < $rootScope.Favourites.length;i++){
					if($rootScope.Favourites[i].screen_id == screen_id){
						$rootScope.Favourites.splice(i,1);
					}
				}
				$rootScope.isRemoveFavorite = false;
			},
			function(err){
				
			}
		);
		e.stopPropagation();
	}

});
oTech.filter('capitalize', function() {
    return function(input) {
      return (!!input) ? input.charAt(0).toUpperCase() + input.substr(1).toLowerCase() : '';
    }
});
	


	oTech.factory('AuthHttpResponseInterceptor',['$q','$location','$injector',function($rootScope,AppServices,$q,$location,$injector){
  return {
	request: function(config) {
                $rootScope.loading = true;
                return config;
            },
            requestError: function(rejection) {
                $rootScope.loading = false;
                $log.error('Request error:', rejection);
                return $q.reject(rejection);
            },
    response: function(response){
	
	console.log(" myHttpResponseInterceptor Response " + response.status);
	 if (response.status === 200) {
                console.log("Response 200");
            }
            if (response.status === 401) {
                console.log("Response 401");
            }
            return response || $q.when(response);
        },
		
		responseError: function(rejection) {
		
		console.log("Response Error ",rejection.status);
            if (rejection.status === 401) {
                console.log("Response Error 401",rejection);
                //$location.path('/login').search('returnTo', $location.path());
			//	 var stateService = $injector.get('$state');
			//	  stateService.go('login');
			//	$rootScope.signOut();
				$location.path('/login');
            }
            return $q.reject(rejection);
        }
  }
}]);

