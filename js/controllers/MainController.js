myApp.controller('MainController', ['$scope', '$modal', '$log', function($scope, $modal, $log){
	$scope.ingredients = [
		{
			name:"Flour Tortilla",
			calories:300,
			totalFat:10,
			saturated:1,
			trans:0,
			cholesterol:0,
			sodium:690,
			carbs:46,
			fiber:3,
			sugar:0,
			protein:7,
			amount:0
		},
		{
			name:"3 Crispy Corn Tortillas",
			calories:210,
			totalFat:7.5,
			saturated:3,
			trans:0,
			cholesterol:0,
			sodium:30,
			carbs:30,
			fiber:6,
			sugar:0.5,
			protein:3,
			amount:0
		},
		{
			name:"3 Soft Corn Tortillas",
			calories:210,
			totalFat:0,
			saturated:0,
			trans:0,
			cholesterol:0,
			sodium:30,
			carbs:45,
			fiber:6,
			sugar:0,
			protein:3,
			amount:0
		},
		{
			name:"3 Soft Flour Tortillas",
			calories:255,
			totalFat:7.5,
			saturated:3,
			trans:0,
			cholesterol:0,
			sodium:570,
			carbs:39,
			fiber:2,
			sugar:0,
			protein:6,
			amount:0
		},
		{
			name:"Chicken",
			calories:180,
			totalFat:7,
			saturated:3,
			trans:0,
			cholesterol:125,
			sodium:310,
			carbs:0,
			fiber:0.5,
			sugar:0,
			protein:32,
			amount:0
		},
		{
			name:"Steak",
			calories:190,
			totalFat:6.5,
			saturated:2,
			trans:0,
			cholesterol:65,
			sodium:320,
			carbs:2,
			fiber:0,
			sugar:1,
			protein:30,
			amount:0
		},
		{
			name:"Carnitas",
			calories:210,
			totalFat:12,
			saturated:6.5,
			trans:0,
			cholesterol:65,
			sodium:450,
			carbs:0,
			fiber:0,
			sugar:0,
			protein:23,
			amount:0
		},
		{
			name:"Barbacoa",
			calories:165,
			totalFat:7,
			saturated:2.5,
			trans:0,
			cholesterol:65,
			sodium:530,
			carbs:2,
			fiber:1,
			sugar:0,
			protein:24,
			amount:0
		},
		{
			name:"Sofritas",
			calories:145,
			totalFat:10,
			saturated:1.5,
			trans:0,
			cholesterol:0,
			sodium:555,
			carbs:9,
			fiber:3.5,
			sugar:4.5,
			protein:8,
			amount:0
		},
		{
			name:"White Rice",
			calories:185,
			totalFat:4,
			saturated:0,
			trans:0,
			cholesterol:0,
			sodium:375,
			carbs:34,
			fiber:1,
			sugar:0,
			protein:3.5,
			amount:0
		},
		{
			name:"Brown Rice",
			calories:200,
			totalFat:7,
			saturated:0,
			trans:0,
			cholesterol:0,
			sodium:165,
			carbs:32,
			fiber:2.5,
			sugar:0.5,
			protein:3.5,
			amount:0
		},
		{
			name:"Black Beans",
			calories:120,
			totalFat:1,
			saturated:0,
			trans:0,
			cholesterol:0,
			sodium:260,
			carbs:22,
			fiber:12,
			sugar:1,
			protein:7,
			amount:0
		},
		{
			name:"Pinto Beans",
			calories:115,
			totalFat:1,
			saturated:0,
			trans:0,
			cholesterol:0,
			sodium:300,
			carbs:21,
			fiber:10,
			sugar:1,
			protein:6,
			amount:0
		},
		{
			name:"Fajita Veg",
			calories:20,
			totalFat:0.5,
			saturated:0,
			trans:0,
			cholesterol:0,
			sodium:170,
			carbs:4,
			fiber:1,
			sugar:2,
			protein:1,
			amount:0
		},
		{
			name:"Fresh Tomato Salsa",
			calories:20,
			totalFat:0,
			saturated:0,
			trans:0,
			cholesterol:0,
			sodium:210,
			carbs:5,
			fiber:1,
			sugar:3,
			protein:1,
			amount:0
		},
		{
			name:"Roasted Chili-Corn Salsa",
			calories:80,
			totalFat:1.5,
			saturated:0,
			trans:0,
			cholesterol:0,
			sodium:300,
			carbs:16,
			fiber:3,
			sugar:4,
			protein:3,
			amount:0
		},
		{
			name:"Tomatillo Green-Chile Salsa",
			calories:15,
			totalFat:0,
			saturated:0,
			trans:0,
			cholesterol:0,
			sodium:255,
			carbs:4,
			fiber:0,
			sugar:1.5,
			protein:0,
			amount:0
		},
		{
			name:"Tomatillo Red-Chile Salsa",
			calories:30,
			totalFat:0,
			saturated:0,
			trans:0,
			cholesterol:0,
			sodium:500,
			carbs:4,
			fiber:1.5,
			sugar:0,
			protein:0,
			amount:0
		},
		{
			name:"Sour Cream",
			calories:115,
			totalFat:9.5,
			saturated:7,
			trans:0,
			cholesterol:40,
			sodium:30,
			carbs:1,
			fiber:0,
			sugar:2,
			protein:2,
			amount:0
		},
		{
			name:"Cheese",
			calories:100,
			totalFat:7.5,
			saturated:5,
			trans:0,
			cholesterol:30,
			sodium:190,
			carbs:1,
			fiber:0,
			sugar:0,
			protein:6,
			amount:0
		},
		{
			name:"Guacamole",
			calories:230,
			totalFat:22,
			saturated:3.5,
			trans:0,
			cholesterol:0,
			sodium:375,
			carbs:8,
			fiber:6,
			sugar:1,
			protein:2,
			amount:0
		},
		{
			name:"Lettuce",
			calories:10,
			totalFat:0,
			saturated:0,
			trans:0,
			cholesterol:0,
			sodium:0,
			carbs:2,
			fiber:1,
			sugar:1,
			protein:1,
			amount:0
		}
	];
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

	$scope.reset = function(){
		for(var i=0;i<$scope.ingredients.length;i++){
			var obj = $scope.ingredients[i];
			obj.amount = 0;
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