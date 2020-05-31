

    var myApp = angular.module('myApp', ['ui.router']);
    
    // Initialize the main module
    myApp.run(['$rootScope', '$state','$stateParams', function ($rootScope, $state, $stateParams) {
        'use strict';  
        // Expose $state to scope for convenience
        $rootScope.$state = $state;
        
    }]);
    
    // Configure the main module
    myApp.config(['$stateProvider', '$urlRouterProvider', '$httpProvider',
                        function ($stateProvider, $urlRouterProvider, $httpProvider) {
    
        'use strict';
        
        // Enable CORS
        $httpProvider.defaults.useXDomain = true;
        delete $httpProvider.defaults.headers.common['X-Requested-With'];
        
        $urlRouterProvider.otherwise('/home');
        
        $stateProvider
            
        .state('home', {
                          url:'/home',
                          controller:'HomeController',
                          controllerAs:'home',
                          templateUrl:'/templates/home.html'
                  })
         .state('product',{
                            url:'/product',
                            controller:'productCtrl',
                            controllerAs:'prod',
                            templateUrl:'/templates/product.html',
                             resolve:{
                                 products : function(productService){
                                     return productService.getProducts();
                                 }
                             }
                  })
         .state('view2',{
                             url:'/view2',
                             controller:'view2Ctrl',
                             templateUrl:'/templates/view2.html',
                             onEnter: function(){
                                   console.log("entering the view 2 ctrl")
                                    },
                             onExit: function(){
                                     console.log('exiting the view 2 ctrl')
                                  }
                                                    
                })
         .state('category',{
                    url:'/category',
                    controller:'categoryController',
                    controllerAs:'category',
                    templateUrl:'/templates/category.html',
                    resolve: {
                           categories: function(categoryService) {
                                      return    categoryService.getCategories()
                             }
                   },
                   toto: {
                      name :' category ',
                      desc : 'fun !'
                               },
                    foo: {
                       myFoo: 'bar'
                        }
        })
          
                // abstract states : nested state
        .state('produt_detail',{
                  absrtact:true,          // url:'/product/:id',
                              url:'/product/:id',//{id:[0-9]}
                              controller:'productDetailController',
                              controllerAs:'d',
                              templateUrl:'/templates/productdetail.html',
                              params : {
                                      productMessage :{value : 'product Message ! '}
                                     },
                              resolve:{
                                        details : function($stateParams, productService){
                                           return productService.getProductDetail($stateParams.id) 
                                        }
                                    }
                                           
               })

       .state('produt_detail.summary',{
                url:'/summary/:id',
                templateUrl:'/templates/demo_summary.html',
               })

      
              //demo : multiple views

       .state('v.mv',{
                 
                  url:'/demo',
                  views:{
                      'Info':{
                          templateUrl : '/templates/Info.html',
                          controller : 'DemoParentController',
                          controllerAs:'ctrl',
                          resolve:{
                            product : function($stateParams , productService){
                                return productService.getProductDetail($stateParams.id);
                            }
                        }
                      },
                      'Message':{
                          templateUrl:'/templates/Message.html',
                          controller:'DemoDetailController',
                          controllerAs :'ctrl'
                      }
                  }
                 
              })
            
        .state('v',{
                 url:'/demo/:id',
                 templateUrl:'/templates/demo_parent.html',
               
              })

              .state("demo", {
                  url:'/demo',
                views: {
                  "": {
                    templateUrl: '/templates/demo_parent.html'
                  },
                  "Info": {
                    template: "<h2> info </h2>"
                  },
                  "Message": {
                    template: "<h3> message <h3/>"
                  }
                }
              })

           //directive   
              .state('dir',{
                url:'/directive',
                template:"<user-info-card  products = 'products' collapsed = 'true' method = 'hello()'></user-info-card>",
                resolve:{
                    products : function(productService){
                        return productService.getProducts();
                    } 
                },
                controller: function($scope, products){
                    $scope.products = products;
                    console.log($scope);

                   $scope.hello = function(){
                      return 'hello method from directive';
                    }
                  }
            })
    }]);
 
