oTech.controller('createTestRunController',
        function ($scope, $rootScope, $location, AppServices, GraphServices, GraphMaximizeServices, $stateParams, testScriptService, uiGridConstants, $cookieStore, uiGridTreeViewConstants, $interval) {
            var userId = sessionStorage.userId;
            var token = sessionStorage.token;
            var TestPlanId = $cookieStore.get('selected_testplanid');

 


            //Calling getTestPlanDependantData service after selecting the testplan

            promise = testScriptService.TestPlanDependantData(TestPlanId, token);
            promise.then(
                    function (data) {

                         $scope.tree_data = data.testPlanDependantData;
                    },
                    function (err) {
                        console.log(err);
                    }
            );


        

            

        });


