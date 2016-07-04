"use strict";

  console.log("veggies.js is loaded");
  // Private variable to store the different meat prices


    var veggiePrices = {"tomatoVeg": .59,
      "zucchiniVeg": .76,
      "roastBeefMeat": .80,
      "eggplantVeg": .90};

    let addVeggies = function(topping) {
        return veggiePrices[topping];
      }

    module.exports = addVeggies;