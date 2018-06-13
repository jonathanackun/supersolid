var app = angular.module('app', []);

app.controller('GameController', function($scope, GameService) {
	$scope.submitEntry = function() {
		if (typeof $scope.name === 'undefined' || typeof $scope.word === 'undefined') {
			return;
		}
		var entry = {
			name: $scope.name,
			word: $scope.word
		};
		GameService.submitEntry(entry)
			.success(function(points) {
				$scope.word = undefined;
				GameService.getScores()
					.success(function(scores) {
						$scope.scores = scores;
					});
			});
	};

	GameService.getScores()
		.success(function(scores) {
			$scope.scores = scores;
		});
});

app.service('GameService', function($http) {
	this.getScores = function() {
		console.log("Angular test getScore");
		return $http.get('/api/getScores');
	};	
	this.submitEntry = function(entry) {
		console.log("Angular test submitEntry");
		return $http.post('/api/submitEntry', entry);
	};
});
