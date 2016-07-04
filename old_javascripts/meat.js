var sandwichMaker = (function(maker) {

  console.log("meat.js is loaded");
  // Private variable to store the different meat prices


    var meatPrices = {"salamiMeat": .59,
      "capicolaMeat": .76,
      "roastBeefMeat": .80,
      "hamMeat": .90};

      maker.addMeat = function(topping) {
        return meatPrices[topping];
      }

      return maker;

    })(sandwichMaker);
