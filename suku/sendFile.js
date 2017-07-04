
var app=angular.module('SendFileToServer',[]);

app.controller('getFile',function($scope){
	$scope.files = [];
	$scope.submitFile=function($event, files){
		$event.preventDefault();
		var fd = new FormData();
		console.log($scope.files);
    //Take the first selected file
    fd.append("file", $scope.files);

    /*$http.post(uploadUrl, fd, {
        withCredentials: true,
        headers: {'Content-Type': undefined },
        transformRequest: angular.identity
    });*/
	

	};
});		
app.directive("fileUpload", function () {
		return {
			scope: {
				files: '='
			},
			link: function ($scope, ele, attr) {
				ele.bind("change", function () {
					$scope.$apply(function () {
						$scope.files = ele[0].files;
					})
				});
			}
		}
})
	
