var myapp = angular.module('myapp', ['ui.router', 'ui.bootstrap']);

myapp.config(function ($stateProvider, $urlRouterProvider) {
	
	// for any unmatched url, send to /home
	$urlRouterProvider.otherwise('/home');
	
	$stateProvider
	
		// for home page and nested view
		.state('home',  {
            url: '/home',
			templateUrl: 'templates/home.html',
			controller: 'MainController'
			})
        
      // for movies page and multiple named views
		.state('movies', {
			url:'/Movies', 
			templateUrl: 'templates/movies.html',
			controller: 'MoviesController'			
			})
    
    
    // for books page and multiple names=d views
		.state('books', {
			url:'/Books',
			templateUrl: 'book_index.html'
			})
    
    // for more books pages
        
        .state('book', {
            abstract: true,
            url: '/book',
            templateUrl: 'book.html',
            controller: 'booksCtrl',
            onEnter: function(){
              console.log("enter books");
            }
    		
        })
        .state('book.list', {
            url: '/list',
            // loaded into ui-view of parent's template
            templateUrl: 'book.list.html',
            onEnter: function(){
              console.log("enter books.list");
            }
        })
    
        .state('book.detail', {
            url: '/:sku',
            // loaded into ui-view of parent's template
            templateUrl: 'book.detail.html',
            controller: function($scope, $stateParams){
              $scope.person = $scope.books[$stateParams.sku];
            },
            onEnter: function(){
              console.log("enter books.detail");
            }
        })
    
		// for login page 
		.state('SignIn', {
			url: '/SignIn',
			templateUrl: 'templates/login.html'
			})
});

// controller for home page
myapp.controller('MainController', function ($scope) {
  $scope.myInterval = 1000;
  $scope.slides = [
      {
          image: './images/BatmanBadBlood.jpg'
      },
      {
          image: './images/Everest.jpg'
      },
      {
          image: './images/Room.jpg'
      },
      {
          image: './images/Minions.jpg'
      }
  ];
});

// controller for movies list 
myapp.controller('MoviesController', function($scope, $http) {
	$http.get("./app/moviesCollection.json").then(function (response) {
		$scope.myMovies = response.data.moviesRecords;
	});
});

// controller for books list
 myapp.controller('booksCtrl', function($scope, $http) {
  $http.get("json/books.json").then(function (response) {
      $scope.books = response.data.records;
  });
});