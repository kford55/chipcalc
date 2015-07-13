myApp.directive('totalAmounts', function() { 
  return { 
    restrict: 'E', 
    scope: {
    	info: "="
    }, 
    templateUrl: 'js/directives/total.html',
  };
});