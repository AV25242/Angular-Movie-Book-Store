var myapp = angular.module('myapp', ['ui.router', 'ui.bootstrap']);

myapp.config(function($stateProvider, $urlRouterProvider) {
	
	// for any unmatched url, send to /home
	$urlRouterProvider.otherwise('/home');
	
	$stateProvider
	
		// for home page and nested view
		.state('home', {
			url: '/home',
			templateUrl: 'templates/home.html',
			controller:'MainController'
			})
			
		// for movies page and multiple named views
		.state('movies', {
			url: '/Movies',
			templateUrl: 'templates/movies.html'
			
			})
			
		// for books page and multiple names=d views
		.state('books', {
			url: '/Books',
			templateUrl: 'templates/books.html'
			
			})
});

myapp.controller('MainController', function ($scope) {
  $scope.myInterval = 1000;
  var slides = $scope.slides = [];
  $scope.addSlide = function() {
    var newWidth = 1000 + slides.length + 1;
    slides.push({
      image: 'http://placekitten.com/' + newWidth + '/300',
      text: ['More','Extra','Lots of','Surplus'][slides.length % 4] + ' ' +
        ['Cats', 'Kittys', 'Felines', 'Cutes'][slides.length % 4]
    });
  };
  for (var i=0; i<4; i++) {
    $scope.addSlide();
  }
});