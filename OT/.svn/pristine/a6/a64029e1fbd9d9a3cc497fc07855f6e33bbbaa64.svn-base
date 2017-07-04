
oTech.controller('testScriptController',
        function ($scope, $rootScope, $location, AppServices, GraphServices, GraphMaximizeServices, $stateParams, testScriptService, uiGridConstants, $cookieStore) {
            var userId = sessionStorage.userId;
            var token = sessionStorage.token;

            var testrun;
            $rootScope.slideContent();
            $scope.createTestPlan = " ";
            $scope.editTestPlan = " ";
//            var cmd = ' ';

            window.onresize = function (event) {
                $rootScope.slideContent();
            }
            $scope.name = sessionStorage.getItem("username");
            /*
             To get dashboard menu data
             */
            $scope.getDashBoardMenu = function () {
                if ($rootScope.menuData == undefined) {
                    $rootScope.getMenuData();
                }
            }
            /*
             To get favourite reports
             */
            $scope.getFavouriteReports = function () {
                if ($rootScope.Favourites == undefined) {
                    $rootScope.getFavouriteReports();
                }
            }

            $scope.testPlanGo = function () {

                if ($scope.radioValue == "createTestPlan") {
                    $location.path('/dashboard/testScript/createTestPlan');
                } else {
                    $location.path('/dashboard/testScript/editTestPlan');
                }



            }

            $scope.radioValue = 1;
            // go function
            $scope.go = function () {
                if (document.getElementById('runtest').checked) {
                    testrun = document.getElementById('runtest').value;

                }
                if (document.getElementById('Schedule').checked) {
                    testrun = document.getElementById('Schedule').value;

                }
                if (document.getElementById('Quick').checked) {
                    testrun = document.getElementById('Quick').value;

                }
                if (testrun == "Schedule Test Run") {
                    $location.path('/dashboard/testScript/TestRunSchedule');
                } else if (testrun == "Quick Run") {
                    $location.path('/dashboard/quickRun');
                } else {

                    $location.path('/dashboard/testScript/editTestRun');
                }
            }
            $scope.getDashBoardMenu();
            $scope.getFavouriteReports();

            /*Navigate Between Menus*/

            $scope.navigatememus = function (e) {
                if (e.currentTarget.id == "menu1") {
                    $("#plan").addClass("in active");
                    $("#Run").removeClass("in active");
                } else {
                    $("#plan").removeClass("in active");
                    $("#Run").addClass("in active");
                }
            }

            $scope.create = function () {

//                var createData = JSON.stringify({
//                    "jobName": "Test Plan 5",
//                    "jobDescription": "",
//                    "taskId": 0,
//                    "jobCreatedBy": -2,
//                    "jobCreateDate": "2016-01-14",
//                    "jobStartDate": "2016-01-14",
//                    "jobEndDate": "2016-01-14",
//                    "scheuleGroupId": 0,
//                    "jobStartDateTime": "2016-01-14",
//                    "deviceGroupId": 0,
//                    "recurrence": "Daily", "isCompleted": "N", "runNum": 0,
//                    "lastTriggeredRunDateTimeUTC": "1439471945791",
//                    "taskVOList": [{
//                            "taskName": "Task Tue Jan 12 19:51:50 GMT+530 2016",
//                            "taskLoop": "1",
//                            "taskCreated": "2016-01-12",
//                            "taskDescription": "",
//                            "taskCreatedBy": -2, "useCaseId": 1,
//                            "taskExecutorVOList": [{"taskExecutorName": "tstexe",
//                                    "commandExecutorVOList": [{"commandExecutorName": "cmd exec 3",
//                                            "commandExecutorCommandVOList": [{"commandId": 1, "commandSeqNo": 1, "commandExecutorId": 1, "commandParams": "actionduration=1m"},
//                                                {"commandId": 2, "commandSeqNo": 4, "commandExecutorId": 1, "commandParams": "actionduration=2m,collectinterval=60s"}
//                                            ]
//                                        }]
//                                }]
//                        }]
//                })
//                console.log(createData);
//                promise = testScriptService.CreateSrvc(createData);
//                promise.then(
//                        function (data) {
//                            $location.path('/dashboard/testScript/create')
//                            console.log("Create Data: " + JSON.stringify(data))
//
//                        },
//                        function (err) {
//                            console.log(err);
//                        }
//                );

                $location.path('/dashboard/testScript/create')
            };

            $scope.commandParameters_next = function () {
                $location.path('/dashboard/testScript/commandParameters')
            }
            $scope.gridOptions = {
                enableFiltering: true,
                enableRowHeaderSelection: false,
                enableRowSelection: true,
                multiSelect: false,
                columnDefs: [
                    {field: 'testplanId', headerCellClass: $scope.highlightFilteredHeader},
                    {field: 'testplanName', headerCellClass: $scope.highlightFilteredHeader},
                ]
            };

            //Row selection 
            $scope.gridOptions.onRegisterApi = function (gridApi) {
                //set gridApi on scope
                $scope.gridApi = gridApi;
                gridApi.selection.on.rowSelectionChanged($scope, function (row) {

                    $scope.testplanId = row.entity.testplanId;
                    
                    var TestPlanId = row.entity.testplanId;

                    $cookieStore.put('selected_testplanid', $scope.testplanId);

                    $scope.testplanId_selected = $cookieStore.get('selected_testplanid');
                    var msg = 'row selected ' + row.isSelected;
                    $scope.view_testrun = function () {
                       
                        $location.path('/dashboard/testScript/createTestRun')
                    }



                });

                gridApi.selection.on.rowSelectionChangedBatch($scope, function (rows) {
                    var msg = 'rows changed ' + rows.length;

                });
            };

            promise = testScriptService.FetchingTestService(userId, token);
            promise.then(
                    function (data) {
//                        $scope.tesplanData = data;
                        $scope.gridOptions.data = data;
                        console.log("Fetch Test Plan: " + JSON.stringify(data))

                        //Fetching test plans

                    },
                    function (err) {
                        console.log(err);
                    }
            );





            $scope.testplan_id = sessionStorage.getItem("selected_testplanid");
            var testplanId = sessionStorage.selected_testplanid;







            $scope.editTestplans = function () {
                $location.path('/dashboard/testScript/editTestRun');
            }
        });


