"use strict";

let oneBread = require("./sandwichCalc").oneBread;

  console.log("bread.js is loaded");
  // Private variable to store the different meat prices

    var breadPrices = {"whiteBread": .59,
      "wheatBread": .76,
      "pitaBread": .80};

      var lastBreadSelected = 0;

    let addBread = function(topping) {
        console.log("HOW MANY TIMES?", lastBreadSelected);
        oneBread(lastBreadSelected); 
        lastBreadSelected = breadPrices[topping];
        return breadPrices[topping];
      }

module.exports = addBread;