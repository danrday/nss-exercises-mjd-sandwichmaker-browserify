  "use strict";

  console.log("cheese.js is loaded");
  // Private variable to store the different meat prices


    var cheesePrices = {"provoloneCheese": .59,
      "swissCheese": .76,
      "cheddarCheese": .80};

    let addCheese = function(topping) {
        return cheesePrices[topping];
      }

module.exports = addCheese;