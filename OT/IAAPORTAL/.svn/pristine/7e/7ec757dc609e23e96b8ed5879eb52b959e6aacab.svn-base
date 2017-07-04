oTech.controller('TestRunScheduleController',
        function ($scope, $rootScope,$timeout, $location, AppServices, GraphServices, GraphMaximizeServices, $stateParams, testScriptService, uiGridConstants, $cookieStore) {


            $scope.testplanname = sessionStorage.getItem("TestPlan_Name");
//            alert($scope.testplanname)
            $scope.testRunName = $cookieStore.get('TestRunName');
            $scope.jobTemplateDescription = $cookieStore.get('TestRunDescription');
            console.log("description: "+ $scope.jobTemplateDescription)
            var deviceId = $cookieStore.get('JobDeviceId');
            var userName = sessionStorage.username;
            var userID = sessionStorage.userId;
            $scope.testplan_name = $cookieStore.get('TestPlan_Name');
            $scope.TestRunName = $cookieStore.get('TestRunName');
            $scope.VirtualSelectedName = $cookieStore.get('VirtualDeviceNamesel')
//            alert($scope.VirtualSelectedName);
             $scope.TestplanName = $cookieStore.get('TestplanName');
            
           var testRunID = $cookieStore.get('TestRunId');

            $scope.stop = function () {
                var ScheduleData = JSON.stringify({
                    "jobId": testRunID,
                    "jobName": $scope.testRunName,
                    "jobDescription": $scope.jobTemplateDescription,
                    "jobCreatedBy": -2,
//                    "jobStartDate": $scope.StartDate,
                    "jobStartDateTime": $scope.Datendtime,
                    "jobEndDate": $scope.EndDate,
                    "recurrence": $scope.recurrence,
                    "deviceId": deviceId,
                    "operation": "stop_job",
                })
                console.log(ScheduleData);
                promise = testScriptService.Schedule(ScheduleData);
                promise.then(
                        function (data) {
                            console.log('schedule');
                            console.log(data);
                            if (data.status == "error") {
                             
                                          $rootScope.Message="Error occured during Test run stop ";
                                
                                $('#MessageColor').css("color", "red");
         $('#MessagePopUp').modal('show');
        $timeout(function(){ $('#MessagePopUp').modal('hide'); }, 2000);
                            }
                            
                            if(data.status=="success"){
                                
                                $rootScope.Message=" Test run stopped successfully ";
                                
                                $('#MessageColor').css("color", "green");
         $('#MessagePopUp').modal('show');
        $timeout(function(){ $('#MessagePopUp').modal('hide'); }, 2000);
                            }

                        },
                        function (err) {
                            console.log(err);
                        }
                );
            }

            $scope.schedule = function () {
                var ScheduleData = JSON.stringify({
                    "jobId": testRunID,
                    "jobName": $scope.testRunName,
                    "jobDescription": $scope.jobTemplateDescription,
                    "jobCreatedBy": -2,
                    "jobStartDateTime": $scope.Datendtime,
//                    "jobStartDate": $scope.StartDate,
                    "jobEndDate": $scope.EndDate,
                    "recurrence": $scope.recurrence,
                    "deviceId": deviceId,
                    "operation": "trigger_job",
                })
                console.log(ScheduleData);
                promise = testScriptService.Schedule(ScheduleData);
                promise.then(
                        function (data) {
                            console.log(JSON.stringify(data));
                          
                           if (data.status == "error") {
                             
                                          $rootScope.Message="Error occured during Test run schedule ";
                                
                                $('#MessageColor').css("color", "red");
         $('#MessagePopUp').modal('show');
        $timeout(function(){ $('#MessagePopUp').modal('hide'); }, 2000);
                            }
                            
                            if(data.status=="success"){
                                
                                $rootScope.Message=" Test run scheduled successfully ";
                                
                                $('#MessageColor').css("color", "green");
         $('#MessagePopUp').modal('show');
        $timeout(function(){ $('#MessagePopUp').modal('hide'); }, 2000);
                            }

                        },
                        function (err) {
                            console.log(err);
                        }
                );
            }

            $scope.startnow = function () {
                var ScheduleData = JSON.stringify({
                    "jobId": testRunID,
                    "jobName": $scope.testRunName,
                    "jobDescription": $scope.jobTemplateDescription,
                    "jobCreatedBy": -2,
                    "jobStartDateTime": $scope.Datendtime,
//                    "jobStartDate": $scope.StartDate,
                    "jobEndDate": $scope.EndDate,
                    "recurrence": $scope.recurrence,
                    "deviceId": deviceId,
                    "operation": "trigger_job",
                })
                console.log(ScheduleData);
                promise = testScriptService.Schedule(ScheduleData);
                promise.then(
                        function (data) {
                        
                        if (data.status == "error") {
                             
                                          $rootScope.Message="Error occured during Test run start ";
                                
                                $('#MessageColor').css("color", "red");
         $('#MessagePopUp').modal('show');
        $timeout(function(){ $('#MessagePopUp').modal('hide'); }, 2000);
                            }
                            
                            if(data.status=="success"){
                                
                                $rootScope.Message=" Test run started successfully ";
                                
                                $('#MessageColor').css("color", "green");
         $('#MessagePopUp').modal('show');
        $timeout(function(){ $('#MessagePopUp').modal('hide'); }, 2000);
                            }

                        },
                        function (err) {
                            console.log(err);
                        }
                );
            }



        })