

myApp.directive('userInfoCard',   ['$state','productService',
function($state, productService) {

    var directive = {
    
        controller:['$scope', controller],
        controllerAs:'ctrl',
        bindToController:true,
        replace:true,
        scope:{
          products : '=',
           collapsed : '=',//@
          notifyParent:'&method'
        },
        restrict:'E',
        templateUrl:'../templates/user-card-info.html',
        link:function(scope, el, attr){
          el.on('click',function(){
              $(this).css('color','red')
        })
        }
    };
    
    return directive;
       
       function controller($scope){
          $scope.size = 150;
         vm = this;
         vm.products = $scope.ctrl.products;
       
 
        console.log($scope)
         vm.name = "bilel";
    
         $scope.collapse = function(){
          $scope.collapsed = !this.collapsed;
         }

       }


}]);
