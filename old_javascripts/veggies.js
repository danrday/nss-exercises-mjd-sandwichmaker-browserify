var sandwichMaker = (function(maker) {

  console.log("veggies.js is loaded");
  // Private variable to store the different meat prices


    var veggiePrices = {"tomatoVeg": .59,
      "zucchiniVeg": .76,
      "roastBeefMeat": .80,
      "eggplantVeg": .90};

      maker.addVeggies = function(topping) {
        return veggiePrices[topping];
      }

      return maker;

    })(sandwichMaker);