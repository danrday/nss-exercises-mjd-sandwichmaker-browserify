var sandwichMaker = (function () {


// Private variable to store the price
var totalPrice = 0;

var toppingList = [];

//methods to return

return {

  getTotalPrice: function () {
    return totalPrice;
  },

  addTopping: function(toppingPrice) {
      console.log("BEFORE", totalPrice);
      totalPrice += toppingPrice;
      console.log("AFTER", totalPrice);
    },

  oneBread: function(lastToppingPrice) {
    totalPrice -= lastToppingPrice;
  },

  getToppingList: function () {
    return toppingList;
  },

  addToppingList: function(topping) {
    toppingList += topping + " + ";
  }


}

})();