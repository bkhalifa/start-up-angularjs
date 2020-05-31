

    myApp.controller('productDetailController', 
    ['$state','$stateParams','categoryService','details',
       function($state, $stateParams, categoryService, details) {

             var vm = this ;
    vm.Name = "Bilel Ben Khalifa :)";
    vm.id = $stateParams.id;
    vm.message = $stateParams.productMessage;

    vm.details = details.data;

    // vm.init = function () {
    //    productDetail();
    // };

    // var productDetail = function(){
    //     categoryService.getCategories($stateParams.id).then(function(res){
    //         vm.detail = res.data;
    //         }) 
    // }
   vm.goBack = function(){
    $state.go('product')
   }
  
     }])


