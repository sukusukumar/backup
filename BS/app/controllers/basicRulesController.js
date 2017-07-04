/*
	Controller for Basic Rules
*/
BS.controller('basicRulesController',['$scope', '$rootScope', '$location', 'BoardService', 'CommonService',
	function ($scope, $rootScope, $location, BoardService, CommonService) {
		$scope.kanbanBoard = BoardService.kanbanBoard(BSApp.config.kanban);
		$scope.destDetails = [];
		CommonService.suku();
		$scope.kanbanSortOptions = {
			clone: true,
			allowDuplicates: false,
			itemMoved: function (event) {
				$scope.destDetails = event.dest.sortableScope.modelValue;
				/*if(event.dest.sortableScope.modelValue[event.dest.sortableScope.modelValue.length - 1].title == "("){
					var obj = {"details":")", "status":"Operators", "title":")"};
					$scope.destDetails.push(obj);
				}
				else if(event.dest.sortableScope.modelValue[event.dest.sortableScope.modelValue.length - 1].title == "{"){
					var obj = {"details":"}", "status":"Operators", "title":"}"};
					$scope.destDetails.push(obj);
				}*/
				console.log($scope.destDetails);
			
			},
			orderChanged: function (event) {
			},
			containment: '#board'
		};
		$scope.kanbanSortOptions1 = {
			accept: function (sourceItemHandleScope, destSortableScope) {
				var success = true;
				angular.forEach($scope.destDetails, function(value, key) {
					if((sourceItemHandleScope.itemScope.modelValue.status) == value.status)
						success = false;
				});
				//console.log(sourceItemHandleScope.itemScope.modelValue.status);
				if(($scope.destDetails.length == 0) && (sourceItemHandleScope.itemScope.modelValue.status == 'Operators'))
					success = false;
				return success;
			},
			clone: false,
			allowDuplicates: true,
			itemMoved: function (event) {	
			},
			orderChanged: function (event) {
			},
			containment: '#board'
		};
		$scope.removeCard = function (column, card) {
			BoardService.removeCard($scope.kanbanBoard, column, card);
		};

		$scope.addNewCard = function (column) {
			//BoardService.addNewCard($scope.kanbanBoard, column);
		};
		$scope.save = function(){
		}
		$scope.clear = function(){	
		}
		$scope.edit = function(){	
		}
		
	}]);