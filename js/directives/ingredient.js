myApp.directive('ingredient', function() { 
  return { 
    restrict: 'E', 
    scope: {
    	ingred:'=',
    	func:'='
    }, 
    templateUrl: 'js/directives/ingredient.html',
  };
});