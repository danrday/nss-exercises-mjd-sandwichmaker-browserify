"use strict";

// Private variable to store the price
var totalPrice = 0;

var toppingList = [];

//methods to return

  let getTotalPrice = function () {
    return totalPrice;
  }

  let addTopping = function(toppingPrice) {
      console.log("BEFORE", totalPrice);
      totalPrice += toppingPrice;
      console.log("AFTER", totalPrice);
    }

  let oneBread = function(lastToppingPrice) {
    totalPrice -= lastToppingPrice;
  }

  let getToppingList = function () {
    return toppingList;
  }

  let addToppingList = function(topping) {
    toppingList += topping + " + ";
  }

module.exports = {getTotalPrice, addTopping, oneBread, getToppingList, addToppingList};