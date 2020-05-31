(function(){
  myApp.service('productService', 
    ['$http',
     function($http) {


      var baseUrl = "http://localhost:8081/api";
      return {
       /*fetch data from server*/
       getProducts: function () {
          return $http.get(baseUrl+'/Product');
       },
       getProductDetail: function(id){
         return $http.get(baseUrl+'/Product/details?productId='+id);
       }
      } 
     }]
  )

})();




