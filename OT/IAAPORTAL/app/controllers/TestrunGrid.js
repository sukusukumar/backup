oTech.controller('TestRunGrids',
        function ($scope, $rootScope, $location, AppServices, GraphServices, GraphMaximizeServices, $stateParams, testScriptService, uiGridConstants, $cookieStore) {

            var userId = sessionStorage.userId;
            var token = sessionStorage.token;
            var TestPlanId =  $cookieStore.get('TestPLANId');
            $scope.TestRunName = $cookieStore.get('TestRunName');
             $scope.VirtualSelectedName = $cookieStore.get('VirtualDeviceNamesel');
            $scope.testRunName = $cookieStore.get('TestRunName');
            var TestRunSelectedData = $cookieStore.get('TestRunGridData');
            
            console.log("DAta: "+JSON.stringify(TestRunSelectedData))

            $scope.gridOptions = {
                data: [TestRunSelectedData],
                enableColumnResize : true,
                enableFiltering: true,
                enableRowHeaderSelection: false,
                enableRowSelection: true,
                multiSelect: false,
                columnDefs: [
                    {field: 'testrunId', name:'Test Run Id', headerCellClass: $scope.highlightFilteredHeader},
                    {field: 'testrunName', name:'Test Run Name', headerCellClass: $scope.highlightFilteredHeader},
                    {field: 'testrunDescription',name:'Test Run Description', headerCellClass: $scope.highlightFilteredHeader},
                    {field: 'testrunCreatedDate',name: 'Test Run Created Date', headerCellClass: $scope.highlightFilteredHeader},
                ]
            };
            //Get Devices grid
            $scope.gridOptions2 = {
                enableFiltering: true,
                enableRowHeaderSelection: false,
                enableRowSelection: true,
                multiSelect: false,
                columnDefs: [
                    {field: 'jobDeviceId',name:'Device ID', headerCellClass: $scope.highlightFilteredHeader},
                    {field: 'deviceName',name:'Device Name', headerCellClass: $scope.highlightFilteredHeader},
                    {field: 'deviceMsisdn',name:' MSISDN', headerCellClass: $scope.highlightFilteredHeader},
                    {field: 'deviceManufacturer', name:' Manufacturer',headerCellClass: $scope.highlightFilteredHeader},
                    {field: 'devcieImei',  name:' IMIE',headerCellClass: $scope.highlightFilteredHeader},
                ]
            };
            
            //Row selection For testrun id
            $scope.gridOptions.onRegisterApi = function (gridApi) {
                
                //set gridApi on scope
                $scope.gridApi = gridApi;
                gridApi.selection.on.rowSelectionChanged($scope, function (row) {
                    
                    console.log("Row Selection: "+JSON.stringify(row.entity))
                    $scope.TestRunName = row.entity.testrunName;
                    $cookieStore.put('TestRunName',  $scope.TestRunName );
                    $cookieStore.put('TestRunDescription', row.entity.testrunDescription);
                    console.log(row.entity.testrunDescription)
                    var testrunID = row.entity.testrunId;
                    $cookieStore.put('TestRunId', testrunID);
                   

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

                    $cookieStore.put('JobDeviceId', row.entity.deviceId);

//                    $scope.next_testrundevice = function () {
//                        $location.path('/dashboard/testScript/TestRunSchedule')
//                    }




                });

                gridApi.selection.on.rowSelectionChangedBatch($scope, function (rows) {


                });
            };
            
            
//Create Test Run Virtual Device
    $scope.CreateTestRunVirtualDeviceOptions = {            
                enableColumnResize : true,
                enableFiltering: true,
                enableRowHeaderSelection: false,
                enableRowSelection: true,
                multiSelect: false,
                columnDefs: [
                    {field: 'jobId', name:'Test Run Id', headerCellClass: $scope.highlightFilteredHeader},
                    {field: 'jobName', name:'Test Run Name', headerCellClass: $scope.highlightFilteredHeader},
                    {field: 'jobDescription',name:'Test Run Description', headerCellClass: $scope.highlightFilteredHeader},
                    {field: 'jobStartDate',name: 'Test Run Created Date', headerCellClass: $scope.highlightFilteredHeader},
                ]
            };
            
              promise = testScriptService.ViewTestRunService(TestPlanId);
            promise.then(
                    function (data) {
//                        $scope.tesplanData = data;
                        $scope.CreateTestRunVirtualDeviceOptions.data = data;
                        console.log("Fetch Test Plan: " + JSON.stringify(data))
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
                    
                    
                    console.log("Row Selection: "+JSON.stringify(row.entity))
//                    $scope.TestRunName = row.entity.jobName;
//                    $cookieStore.put('TestRunName',  $scope.TestRunName );
//                    $cookieStore.put('TestRunDescription', row.entity.jobDescription);
//                    var testrunID = row.entity.jobId;
//                    $cookieStore.put('TestRunId', testrunID);
//                   

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



        });


