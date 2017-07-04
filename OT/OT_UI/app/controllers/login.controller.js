
oTech.controller('LoginController',['$scope', '$rootScope', '$location', 'AuthenticationService',
	function ($scope, $rootScope, $location, AuthenticationService) {
		/*
			Function to Login
		*/
		$scope.login = function () {
        $scope.dataLoading = true; //show loading image
		/*
			Service call for authentication
		*/
		var promise = AuthenticationService.Login($scope.username, $scope.password);
		promise.then(
			function(data){
				
				if(data.success){
					/*
						Successfully logged in
					*/
					/*setting session variables*/
					sessionStorage.setItem('username', $scope.username);
					sessionStorage.setItem('token', data.token);
					sessionStorage.setItem('isLogin', true);
					sessionStorage.setItem('userId', data.userId);
					sessionStorage.setItem('role', data.role);
					sessionStorage.setItem('companyId', data.companyId);
					/*Redirecting to Dashboard page*/
					var dashboardPath  = '/dashboard';
					$location.path(dashboardPath);
				}
				else{
					/*
						Invalid credentials
					*/
					$scope.dataLoading = false;
					$scope.error = "Invalid Username or Password";
				}
			},function(err){
				/*
					Error in service call for authentication
				*/
				$scope.dataLoading = false;
				$scope.error = "Invalid Username or Password";
			}
		);
    };
}]);