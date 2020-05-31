(function(){

    'use strict';
    angular.module('myApp')
           .service('categoryService', categoryService);
         
           categoryService.$inject = [
             '$http', 
    ];
        
  function categoryService($http) {
    var baseUrl = "http://localhost:8081/api";
    return {
     /*fetch data from server*/
     getCategories: function () {
        return $http.get(baseUrl+'/Category');
     }
  }
}

})();