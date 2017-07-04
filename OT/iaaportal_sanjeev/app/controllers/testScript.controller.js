
oTech.controller('testScriptController',
        function ($scope, $rootScope, $location, AppServices, GraphServices, GraphMaximizeServices, $stateParams) {
            var userId = sessionStorage.userId;
            var token = sessionStorage.token;
            var testrun;
            $rootScope.slideContent();
            $scope.createTestPlan = " ";
            $scope.editTestPlan = " ";

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
                }
                else {
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
                    alert("Schedule Test Run");
                } else if (testrun == "Quick Run") {
                    $location.path('/dashboard/quickRun');
                } else {
                    alert("create test run");
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
        });