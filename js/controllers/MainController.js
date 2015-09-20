myApp.controller('MainController', ['$scope', '$modal', '$log', '$http', function($scope, $modal, $log, $http){
	$http.get('../js/ingredients.json').
    success(function(data, status, headers, config) {
      $scope.ingredients = data;
    }).
    error(function(data, status, headers, config) {
      console.log("Error getting ingredients");
    });
	$scope.total = {
			calories:0,
			totalFat:0,
			saturated:0,
			trans:0,
			cholesterol:0,
			sodium:0,
			carbs:0,
			fiber:0,
			sugar:0,
			protein:0
	};
	$scope.addTotal = function(index){
		$scope.ingredients[index].amount += 1;
		$scope.total.calories += $scope.ingredients[index].calories;
		$scope.total.totalFat += $scope.ingredients[index].totalFat;
		$scope.total.saturated += $scope.ingredients[index].saturated;
		$scope.total.trans += $scope.ingredients[index].trans;
		$scope.total.cholesterol += $scope.ingredients[index].cholesterol;
		$scope.total.sodium += $scope.ingredients[index].sodium;
		$scope.total.carbs += $scope.ingredients[index].carbs;
		$scope.total.fiber += $scope.ingredients[index].fiber;
		$scope.total.sugar += $scope.ingredients[index].sugar;
		$scope.total.protein += $scope.ingredients[index].protein;
	};

	$scope.removeFromTotal = function(index){
		$scope.ingredients[index].amount -= 1;
		$scope.total.calories -= $scope.ingredients[index].calories;
		$scope.total.totalFat -= $scope.ingredients[index].totalFat;
		$scope.total.saturated -= $scope.ingredients[index].saturated;
		$scope.total.trans -= $scope.ingredients[index].trans;
		$scope.total.cholesterol -= $scope.ingredients[index].cholesterol;
		$scope.total.sodium -= $scope.ingredients[index].sodium;
		$scope.total.carbs -= $scope.ingredients[index].carbs;
		$scope.total.fiber -= $scope.ingredients[index].fiber;
		$scope.total.sugar -= $scope.ingredients[index].sugar;
		$scope.total.protein -= $scope.ingredients[index].protein;
	};

	$scope.reset = function(){
		for (key in $scope.ingredients){
			$scope.ingredients[key].amount = 0;
		}
		for(key in $scope.total){
			$scope.total[key] = 0;
		}
		
	};
											

	$scope.animationsEnabled = true;

	$scope.open = function (size) {

	var modalInstance = $modal.open({
		animation: true,
		templateUrl: 'template.html',
		controller: ['$scope', '$modalInstance', 'items', 'testitems', function($scope, $modalInstance, items, testitems) {
			$scope.total = items;
		}],
		size: size,
		resolve: {
			items: function () {
				return $scope.total;
			}, 
			testitems: function() {
				return "mytest";
			}
		}
	});

	modalInstance.result.then(function (selectedItem) {
		$scope.selected = selectedItem;
	}, function () {
		$log.info('Modal dismissed at: ' + new Date());
	});
	};
}]);