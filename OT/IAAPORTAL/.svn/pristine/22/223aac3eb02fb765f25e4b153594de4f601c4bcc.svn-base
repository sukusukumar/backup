oTech.controller('createTestRunGridController',
        function ($scope, $rootScope, $location, AppServices, GraphServices, GraphMaximizeServices, $stateParams, testScriptService, uiGridConstants, $cookieStore) {

            var userId = sessionStorage.userId;
            var token = sessionStorage.token;
            var TestPlanId = $cookieStore.get('TestPLANId');
           // alert(TestPlanId)
            $scope.TestRunName = $cookieStore.get('TestRunName');
            $scope.VirtualSelectedName = $cookieStore.get('VirtualDeviceNamesel');
            $scope.testRunName = $cookieStore.get('TestRunName');
            var TestRunSelectedData = $cookieStore.get('TestRunGridData');
            console.log("DAta: " + JSON.stringify(TestRunSelectedData))
            $scope.TestplanName = $cookieStore.get('TestplanName');


//Create Test Run Virtual Device
            $scope.CreateTestRunVirtualDeviceOptions = {
                enableColumnResize: true,
                enableFiltering: true,
                enableRowHeaderSelection: false,
                enableRowSelection: true,
                multiSelect: false,
                columnDefs: [
                    {field: 'testrunId', name: 'Test Run Id', headerCellClass: $scope.highlightFilteredHeader},
                    {field: 'testrunName', name: 'Test Run Name', headerCellClass: $scope.highlightFilteredHeader},
                    {field: 'testrunDescription', name: 'Test Run Description', headerCellClass: $scope.highlightFilteredHeader},
                    {field: 'testrunCreatedDate', name: 'Test Run Created Date', headerCellClass: $scope.highlightFilteredHeader},
                ]
            };

            //Get Devices grid
            $scope.CreateTestRunRealDeviceOptions = {
                enableFiltering: true,
                enableRowHeaderSelection: false,
                enableRowSelection: true,
                multiSelect: false,
                columnDefs: [
                    {field: 'jobDeviceId', name: 'Device ID', headerCellClass: $scope.highlightFilteredHeader},
                    {field: 'deviceName', name: 'Device Name', headerCellClass: $scope.highlightFilteredHeader},
                    {field: 'deviceMsisdn', name: ' MSISDN', headerCellClass: $scope.highlightFilteredHeader},
                    {field: 'deviceManufacturer', name: ' Manufacturer', headerCellClass: $scope.highlightFilteredHeader},
                    {field: 'devcieImei', name: ' IMIE', headerCellClass: $scope.highlightFilteredHeader},
                ]
            };

            promise = testScriptService.ViewTestRunService(TestPlanId);
            promise.then(
                    function (data) {

                        console.log("Fetch Test Plan: " + JSON.stringify(data.testRunsForTestPlan))
//                        $scope.tesplanData = data;
                        $scope.CreateTestRunVirtualDeviceOptions.data = data.testRunsForTestPlan;

                        sessionStorage.setItem('TestplanId', data.testplanId);
                        //Fetching test plans

                    },
                    function (err) {
                        console.log(err);
                    }
            );

            $scope.CreateTestRunVirtualDeviceOptions.onRegisterApi = function (gridApi) {

                //set gridApi on scope
                $scope.gridApi = gridApi;
                gridApi.selection.on.rowSelectionChanged($scope, function (row) {


//                    console.log("Row Selection: " + JSON.stringify(row.entity))
                    $scope.TestRunName = row.entity.testrunName;
                    $cookieStore.put('TestRunName', $scope.TestRunName);
                    $cookieStore.put('TestRunDescription', row.entity.testrunDescription);
                    var testrunID = row.entity.testrunId;
                    $cookieStore.put('TestRunId', testrunID);
//                   

                    var testrunID = $cookieStore.get('TestRunId');
                    //Get devices service
                    promise = testScriptService.ViewTestRunDeviceService(userId, token, testrunID);
                    promise.then(
                            function (data) {
                                
                                console.log(JSON.stringify(data.testRunDeviceData))
                                $scope.CreateTestRunRealDeviceOptions.data = data.testRunDeviceData;


                            },
                            function (err) {
                                console.log(err);
                            }
                    );




                });

                gridApi.selection.on.rowSelectionChangedBatch($scope, function (rows) {


                });
            };


            $scope.CreateTestRunRealDeviceOptions.onRegisterApi = function (gridApi) {

                //set gridApi on scope
                $scope.gridApi = gridApi;
                gridApi.selection.on.rowSelectionChanged($scope, function (row) {
                    console.log(row.entity)
                    var selectdata = row.entity.testrunId;
                    console.log(JSON.stringify(row.entity))

                    $cookieStore.put('JobDeviceId', row.entity.deviceId);

//                    $scope.next_testrundevice = function () {
//                        $location.path('/dashboard/testScript/TestRunSchedule')
//                    }




                });

                gridApi.selection.on.rowSelectionChangedBatch($scope, function (rows) {


                });
            };


        });




