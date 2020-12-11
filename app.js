(function() {
'use strict';  // variables must be declared with a var
var list = [
  {name: "Milk", quantity:"2"},
  {name: "Donut", quantity: "10"},
  {name: "Cookie", quantity: "20"},
  {name: "Chocolate", quantity: "50"},
  {name: "Peanut Butter", quantity: "100"},
  {name: "Pepto Bismol", quantity: "5"},
];

angular.module('MyApp', [])
.controller('ToBuyListController', ToBuyListController)
.controller('AlreadyBoughtListController', AlreadyBoughtListController)
.service('ShoppingListService', ShoppingListService);

ToBuyListController.$inject = ['ShoppingListService'];
function ToBuyListController(ShoppingListService) {
  var toBuyList = this; // refers to this ShoppingListAddController
  toBuyList.items = ShoppingListService.getToBuyList();
  toBuyList.buy = function(itemIndex) {
    ShoppingListService.buy(itemIndex);
  }
}

AlreadyBoughtListController.$inject =  ['ShoppingListService'];
function AlreadyBoughtListController(ShoppingListService) {
  var alreadyBoughtList = this; //refers to this ShoppingListShowController
  alreadyBoughtList.items = ShoppingListService.getBoughtList();
}

function ShoppingListService() {
  var service = this; // refers to this ShoppingListService
  var toBuyList =  [
    {name: "Milk", quantity:"2"},
    {name: "Donut", quantity: "10"},
    {name: "Cookie", quantity: "20"},
    {name: "Chocolate", quantity: "50"},
    {name: "Peanut Butter", quantity: "100"},
    {name: "Pepto Bismol", quantity: "5"},
  ];
  var boughtList = []; // array of shopping items; initialized to empty array

  service.buy = function(idx) {
    var item = {
      name: toBuyList[idx].name,
      quantity: toBuyList[idx].quantity
    };
    boughtList.push(item);
    toBuyList.splice(idx,1);
  }
  service.getToBuyList = function() {
    return toBuyList;
  };
  service.getBoughtList = function() {
    return boughtList;
  };
} // function

})(); // end module Immediately Invoked Function (IIFE)
