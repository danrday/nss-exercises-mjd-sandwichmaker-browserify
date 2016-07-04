var sandwichMaker = (function(maker) {

  console.log("condiments.js is loaded");
  // Private variable to store the different meat prices


    var condimentPrices = {"ketchup": .59,
      "yellowMustard": .76,
      "greyPoupon": .80};

      maker.addCondiments = function(topping) {
        return condimentPrices[topping];
      }

      return maker;

    })(sandwichMaker);