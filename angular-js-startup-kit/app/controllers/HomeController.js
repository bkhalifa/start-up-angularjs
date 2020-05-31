(function(){

    myApp.controller('HomeController', 
    ['$scope', '$state','$stateParams',
     function($scope, $state, $stateParams) {
    
     var vm = this ;
    vm.Name = "Bilel Ben Khalifa :)";

    vm.refresh = function(){
      
        $log.debug($state.current);
        console.log($state.current);
        $state.reload();
    }
    }]);
  
   
})();