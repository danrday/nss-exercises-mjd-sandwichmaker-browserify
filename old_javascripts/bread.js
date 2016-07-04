var sandwichMaker = (function(maker) {

  console.log("bread.js is loaded");
  // Private variable to store the different meat prices


    var breadPrices = {"whiteBread": .59,
      "wheatBread": .76,
      "pitaBread": .80};

      var lastBreadSelected = 0;

      maker.addBread = function(topping) {
        console.log("HOW MANY TIMES?", lastBreadSelected);
        sandwichMaker.oneBread(lastBreadSelected); 
        lastBreadSelected = breadPrices[topping];
        return breadPrices[topping];
      }

      

      return maker;

    })(sandwichMaker);