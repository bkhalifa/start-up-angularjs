


   myApp.controller('DemoParentController',   ['$scope', '$state','$stateParams','product',
    function($scope, $state, $stateParams, product) {
   
var vm = this ;


vm.product = product.data;

vm.page = "info page";


   }]);

  
