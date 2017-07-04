oTech.service('testScriptService',
        ['$http', '$rootScope', '$timeout', '$location', '$q', '$cookieStore', function ($http, $location, $rootScope, $timeout, $q, $cookieStore) {
                var token = sessionStorage.token;
                var username = sessionStorage.username;
                var userID = sessionStorage.userId;
                var testplanId = $cookieStore.get('selected_testplanid');
                var testrunID = $cookieStore.get('testrunId');

                var service = {};

                service.CreateSrvc = function (createData) {
                    var deferred = $q.defer();
                    $.ajax({
                        url: oApp.config.BASE_URL + "rest/testPlan/createTestplan",
                        type: "POST",
                        data: createData,
                        headers: {
                            'Content-Type': 'application/json',
                            'X-Auth-Token': token
                        },
                        success: function (data)
                        {
                            //alert("success");
                            deferred.resolve(data);
                        },
                        error: function (err)
                        {
                            console.log(err);
                            deferred.reject(err);
                        }
                    });
                    return deferred.promise;
                }

                service.FetchingTestService = function (userId, token) {
                    var deferred = $q.defer();
                    $.ajax({
                        url: oApp.config.BASE_URL + " rest/testPlan/fetchTestplans ",
                        type: "POST",
                        data: {token: token, userId: userId},
                        headers: {
                            'Content-Type': 'application/x-www-form-urlencoded'

                        },
                        success: function (data)
                        {
                            //alert("success");
                            deferred.resolve(data);
                        },
                        error: function (err)
                        {
                            console.log(err);
                            deferred.reject(err);
                        }
                    });
                    return deferred.promise;
                }
                service.ViewTestRunService = function (userId, token, testplanId) {
                    var deferred = $q.defer();
                    $.ajax({
                        url: oApp.config.BASE_URL + " rest/testRun/getTestRunsForTestPlan ",
                        type: "POST",
                        data: {token: token, userId: userId, testPlanId: testplanId},
                        headers: {
                            'Content-Type': 'application/x-www-form-urlencoded'

                        },
                        success: function (data)
                        {
                            //alert("success");
                            deferred.resolve(data);
                        },
                        error: function (err)
                        {
                            console.log(err);
                            deferred.reject(err);
                        }
                    });
                    return deferred.promise;
                }
                service.ViewTestRunDeviceService = function (userId, token, testrunID) {
                    var deferred = $q.defer();
                    $.ajax({
                        url: oApp.config.BASE_URL + " rest/testRun/getDevicesForTestRun ",
                        type: "POST",
                        data: {token: token, userId: userId, testRunId: testrunID},
                        headers: {
                            'Content-Type': 'application/x-www-form-urlencoded'

                        },
                        success: function (data)
                        {
                            //alert("success");
                            deferred.resolve(data);
                        },
                        error: function (err)
                        {
                            console.log(err);
                            deferred.reject(err);
                        }
                    });
                    return deferred.promise;
                }
                service.FetchCommands = function (userId, token) {
                    var deferred = $q.defer();
                    $.ajax({
                        url: oApp.config.BASE_URL + " rest/testPlan/fetchCommands ",
                        type: "POST",
                        data: {token: token, userId: userId},
                        headers: {
                            'Content-Type': 'application/x-www-form-urlencoded'

                        },
                        success: function (data)
                        {
                            //alert("success");
                            deferred.resolve(data);
                        },
                        error: function (err)
                        {
                            console.log(err);
                            deferred.reject(err);
                        }
                    });
                    return deferred.promise;
                }

                service.Schedule = function (ScheduleData) {
                    var deferred = $q.defer();
                    $.ajax({
                        url: oApp.config.BASE_URL + "rest/testRun/scheduleTestRun?userId=" + userID,
                        type: "POST",
                        data: ScheduleData,
                        headers: {
                            'Content-Type': 'application/json',
                            'X-Auth-Token': token,
                        },
                        success: function (data)
                        {
                            //alert("success");
                            deferred.resolve(data);
                        },
                        error: function (err)
                        {
                            console.log(err);
                            deferred.reject(err);
                        }
                    });
                    return deferred.promise;
                }
                
                  service.TestPlanDependantData = function (TestPlanId, token) {
                    var deferred = $q.defer();
                    $.ajax({
                        url: oApp.config.BASE_URL + "rest/testRun/ getTestPlanDependantData?userId=3",
                        type: "POST",
                        data: {token: token,  jobId: TestPlanId},
                        headers: {
                            'Content-Type': 'application/x-www-form-urlencoded'

                        },
                        success: function (data)
                        {
                            //alert("success");
                            deferred.resolve(data);
                        },
                        error: function (err)
                        {
                            console.log(err);
                            deferred.reject(err);
                        }
                    });
                    return deferred.promise;
                }

                return service;
            }])

