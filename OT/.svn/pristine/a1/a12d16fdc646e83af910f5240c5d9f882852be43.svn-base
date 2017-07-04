oTech.controller('TestRunController',
        function ($scope, $rootScope, $location, AppServices, GraphServices, GraphMaximizeServices, $stateParams, testScriptService, uiGridConstants, $cookieStore) {

            var userId = sessionStorage.userId;
            var token = sessionStorage.token;
            var testplanId = $cookieStore.get('selected_testplanid');

            $scope.gridOptions = {
                enableFiltering: true,
                enableRowHeaderSelection: false,
                enableRowSelection: true,
                multiSelect: false,
                columnDefs: [
                    {field: 'testrunId', headerCellClass: $scope.highlightFilteredHeader},
                    {field: 'testrunName', headerCellClass: $scope.highlightFilteredHeader},
                    {field: 'testrunDescription', headerCellClass: $scope.highlightFilteredHeader},
                    {field: 'testrunCreatedDate', headerCellClass: $scope.highlightFilteredHeader},
                ]
            };
            //Get Devices grid
            $scope.gridOptions2 = {
                enableFiltering: true,
                enableRowHeaderSelection: false,
                enableRowSelection: true,
                multiSelect: false,
                columnDefs: [
                    {field: 'jobDeviceId', headerCellClass: $scope.highlightFilteredHeader},
                    {field: 'deviceName', headerCellClass: $scope.highlightFilteredHeader},
                    {field: 'deviceMsisdn', headerCellClass: $scope.highlightFilteredHeader},
                    {field: 'deviceManufacturer', headerCellClass: $scope.highlightFilteredHeader},
                    {field: 'devcieImei', headerCellClass: $scope.highlightFilteredHeader},
                ]
            };
            //Row selection For testrun id
            $scope.gridOptions.onRegisterApi = function (gridApi) {
                //set gridApi on scope
                $scope.gridApi = gridApi;
                gridApi.selection.on.rowSelectionChanged($scope, function (row) {
                    console.log("Test run id: " + JSON.stringify(row.entity));
                    $cookieStore.put('TestRunName', row.entity.testrunName);
                    $cookieStore.put('TestRunDescription', row.entity.testrunDescription);

                    var id = row.entity.testrunId;
                    var testrunID = row.entity.testrunId;
                    $cookieStore.put('TestRunId', id);
                   

                    var testrunID = $cookieStore.get('TestRunId');
                    //Get devices service
                    promise = testScriptService.ViewTestRunDeviceService(userId, token, testrunID);
                    promise.then(
                            function (data) {
                                $scope.gridOptions2.data = data.testRunDeviceData;


                            },
                            function (err) {
                                console.log(err);
                            }
                    );




                });

                gridApi.selection.on.rowSelectionChangedBatch($scope, function (rows) {


                });
            };
            $scope.gridOptions2.onRegisterApi = function (gridApi) {

                //set gridApi on scope
                $scope.gridApi = gridApi;
                gridApi.selection.on.rowSelectionChanged($scope, function (row) {
                    var selectdata = row.entity.testrunId;
                    console.log(JSON.stringify(row.entity))

                    $cookieStore.put('JobDeviceId', row.entity.jobDeviceId);

                    $scope.next_testrundevice = function () {
                        $location.path('/dashboard/testScript/TestRunSchedule')
                    }




                });

                gridApi.selection.on.rowSelectionChangedBatch($scope, function (rows) {


                });
            };



            promise = testScriptService.ViewTestRunService(userId, token, testplanId);
            promise.then(
                    function (data) {
                        $location.path('/dashboard/testScript/TestRunforTestplans')
                        $scope.gridOptions.data = data.testRunsForTestPlan;

                    },
                    function (err) {
                        console.log(err);
                    }
            );





        });


