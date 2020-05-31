

myApp.directive('userInfoCard',   ['$state','productService',
function($state, productService) {

    var directive = {
        bindToController:true,
        controller:['$scope', controller],
        controllerAs:'ctrl',
        replace:true,
        scope:{
          products : '=',
          collapsed : '@',
          notifyParent:'&method'
        },
        restrict:'E',
        templateUrl:'../templates/user-card-info.html'
    
    };
    
    return directive;
       
       function controller($scope){

         vm = this;
         vm.products = $scope.ctrl.products.data;
       
        debugger;
        console.log($scope)
         this.name = "bilel";
    
         $scope.collapse = function(){
          $scope.collapsed = !this.collapsed;
         }

       }


}]);
