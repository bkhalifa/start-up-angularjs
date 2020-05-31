
    'use strict';

    angular.module('myApp').controller('categoryController', categoryController)
   
    categoryController.$inject = [
       '$state',
       '$stateParams',
       'categories'
   ];

     function categoryController($state, $stateParams, categories) {

        var vm = this ;
        vm.categories = categories.data ;
         
     console.log($state.current.toto);
     console.log($state.current.foo);
    };

  
