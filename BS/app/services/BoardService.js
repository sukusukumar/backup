BS.service('BoardService',['$http', '$rootScope', '$location', '$q', 'BoardManipulator',
	function ( $http,  $location, $rootScope, $q, BoardManipulator) {
		return {
			removeCard: function (board, column, card) {
				if (confirm('Are You sure to Delete?')) {
					BoardManipulator.removeCardFromColumn(board, column, card);
				}
			},
			kanbanBoard: function (board) {
				var kanbanBoard = new Board(board.name, board.numberOfColumns);
				angular.forEach(board.columns, function (column) {
					BoardManipulator.addColumn(kanbanBoard, column.name);
					angular.forEach(column.cards, function (card) {
						BoardManipulator.addCardToColumn(kanbanBoard, column, card.title, card.details, card.details1, card.source);
					});
				});
				return kanbanBoard;
			}
		};
	}]);