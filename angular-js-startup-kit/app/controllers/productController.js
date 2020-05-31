(function(){
'use strict';

    angular.module('myApp').controller('productCtrl', productCtrl)
     
     productCtrl.$inject = [
         '$state',
         '$stateParams',
         '$rootScope',
         'products'
     ];

     function productCtrl( $state, $stateParams, $rootScope, products){
      var vm = this ;
      vm.products = [];
      vm.data = {duree : 1};

      vm.search = function(){
        $state.go('produt_detail', {id : 388})
    }

        vm.name = "bilel ben khalifa";
        vm.products = products.data;
       
    } ; 

})();
    

  
    
    

  
