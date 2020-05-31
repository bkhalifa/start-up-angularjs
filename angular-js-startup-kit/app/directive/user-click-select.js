myApp.directive('userClickSelect',   ['$state',
function($state) {

    return {
        
        link:function(scope, el ,attrs){
            el.on('click',function(){
           
               scope.$watch(attrs['userClickSelect'], function(newVal){
                   
                   el.css('font-size', newVal +'%')
               })
            })
        }
    }
}]
)