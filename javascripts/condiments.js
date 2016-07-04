 "use strict";

 console.log("condiments.js is loaded");
  // Private variable to store the different meat prices


    var condimentPrices = {"ketchup": .59,
      "yellowMustard": .76,
      "greyPoupon": .80};

    let addCondiments = function(topping) {
        return condimentPrices[topping];
      }

    module.exports = addCondiments; 