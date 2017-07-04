oTech.controller('TestRunScheduleController',
        function ($scope, $rootScope, $location, AppServices, GraphServices, GraphMaximizeServices, $stateParams, testScriptService, uiGridConstants, $cookieStore) {

            $scope.testRunName = $cookieStore.get('TestRunName');
            $scope.jobTemplateDescription = $cookieStore.get('TestRunDescription');
            var deviceId = $cookieStore.get('JobDeviceId');
            var userName = sessionStorage.username;
            var userID = sessionStorage.userId;
            $scope.stop = function () {
                var ScheduleData = JSON.stringify({
                    "jobId": 98,
                    "jobName": $scope.testRunName,
                    "jobDescription": $scope.jobTemplateDescription,
                    "jobCreatedBy": -2,
                    "jobStartDate": $scope.StartDate,
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
                            if (data.status == "error") {
                                alert(data.errorDescription)
                            } else
                            {
                                alert(data.status)
                            }

                        },
                        function (err) {
                            console.log(err);
                        }
                );
            }

            $scope.schedule = function () {
                var ScheduleData = JSON.stringify({
                    "jobId": 98,
                    "jobName": $scope.testRunName,
                    "jobDescription": $scope.jobTemplateDescription,
                    "jobCreatedBy": -2,
                    "jobStartDateTime": $scope.Datendtime,
                    "jobStartDate": $scope.StartDate,
                    "jobEndDate": $scope.EndDate,
                    "recurrence": $scope.recurrence,
                    "deviceId": deviceId,
                    "operation": "trigger_job",
                })
                console.log(ScheduleData);
                promise = testScriptService.Schedule(ScheduleData);
                promise.then(
                        function (data) {
                            if (data.status == 'error') {
                                alert(data.errorDescription)
                            } else
                            {
                                alert(data.status)
                            }

                        },
                        function (err) {
                            console.log(err);
                        }
                );
            }

            $scope.startnow = function () {
                var ScheduleData = JSON.stringify({
                    "jobId": 98,
                    "jobName": $scope.testRunName,
                    "jobDescription": $scope.jobTemplateDescription,
                    "jobCreatedBy": -2,
                    "jobStartDateTime": $scope.Datendtime,
                    "jobStartDate": $scope.StartDate,
                    "jobEndDate": $scope.EndDate,
                    "recurrence": $scope.recurrence,
                    "deviceId": deviceId,
                    "operation": "restart_trigger_job",
                })
                console.log(ScheduleData);
                promise = testScriptService.Schedule(ScheduleData);
                promise.then(
                        function (data) {
                            if (data.status == "error") {
                                alert(data.errorDescription)
                            } else {
                                alert(data.status)
                            }


                        },
                        function (err) {
                            console.log(err);
                        }
                );
            }



        })