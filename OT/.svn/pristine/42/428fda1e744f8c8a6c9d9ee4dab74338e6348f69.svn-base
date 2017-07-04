oTech.controller('createTestPlanController',
        function ($scope, $rootScope, $location, AppServices, GraphServices, GraphMaximizeServices, 
                  $stateParams, testScriptService, uiGridConstants, $cookieStore, $TreeDnDConvert) {
            var userId = sessionStorage.userId;
            var token = sessionStorage.token;

            promise = testScriptService.FetchCommands(userId, token);
            promise.then(
                    function (data) {
                        $scope.Commands = data;
                        console.log($scope.Commands);
                    },
                    function (err) {
                        console.log(err);
                    }
            );



        })


