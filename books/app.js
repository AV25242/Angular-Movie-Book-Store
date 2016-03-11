var app = angular.module('myApp', []);
app.controller('customersCtrl', function($scope, $http) {
  $http.get("books_new.json").then(function (response) {
      $scope.myData = response.data.records;
  });
});

/*
//add an item to cart
function addItem(sku, Tittle, price, quantity)
{
    if (quantity != 0)
    { 
       
    //add a new item to cart
    var item = new cartItem(sku,Tittle,price,quantity )
    var items.push(item);
    }
  
}
*/









