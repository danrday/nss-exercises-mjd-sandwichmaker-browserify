(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

let sandwichMaker = require("./sandwichModule");

function toppingFunc() {

console.log("target id", event.target.id);

//if you click in the div but not on a button... ignore click. otherwise, get id name of the button \//

 if (event.target.id === event.currentTarget.id) {
  throw event.currentTarget;
 }  else {

  //the div ID for each topping is the same as the method name for adding them... \//
  var currTargId = event.currentTarget.id;
  console.log("price of this item:", sandwichMaker[currTargId](event.target.id))

  var itemPrice = sandwichMaker[currTargId](event.target.id);

  sandwichMaker.addTopping(itemPrice)

  console.log("Total Price:", sandwichMaker.getTotalPrice());
 }

    // sandwichMaker.getToppingList += sandwichMaker[currTargId](event.target.value) + " ";

    sandwichMaker.addToppingList(event.target.value);

    console.log("toppinglist", sandwichMaker.getToppingList());

   var totalPriceDOM = document.getElementById("totalPrice");
  totalPriceDOM.innerHTML = `<p>Total Price: $${sandwichMaker.getTotalPrice().toFixed(2)}</p><p>${sandwichMaker.getToppingList()}</p>`;

};


function breadFunc() {

console.log("target id", event.target.id);
console.log("target value", event.target.value);
console.log("currTargetID", event.currentTarget.id);

if (event.target.value === event.currentTarget.id) {
  throw event.currentTarget;
 }  else {

  //the div ID for each topping is the same as the method name for adding them... \//
  var currTargId = event.currentTarget.id;
  // console.log("price of this item:", sandwichMaker[currTargId](event.target.value))

  var itemPrice = sandwichMaker[currTargId](event.target.value);

  sandwichMaker.addTopping(itemPrice);

   // sandwichMaker.addToppingList(event.target.value);


  console.log("Total Price:", sandwichMaker.getTotalPrice());
 }
  var totalPriceDOM = document.getElementById("totalPrice");
  totalPriceDOM.innerHTML = `<p>Total Price: $${sandwichMaker.getTotalPrice().toFixed(2)}</p><p>${sandwichMaker.getToppingList()}</p>`;
};


//getting elements by id
var meatOptions = document.getElementById("addMeat");

//event listeners
meatOptions.addEventListener("click", toppingFunc);


//getting elements by id
var veggieOptions = document.getElementById("addVeggies");

//event listeners
veggieOptions.addEventListener("click", toppingFunc);

//getting elements by id
var cheeseOptions = document.getElementById("addCheese");

//event listeners
cheeseOptions.addEventListener("click", toppingFunc);

//getting elements by id
var breadOptions = document.getElementById("addBread");

//event listeners
breadOptions.addEventListener("change", breadFunc);

//getting elements by id
var condimentOptions = document.getElementById("addCondiments");

//event listeners
condimentOptions.addEventListener("click", toppingFunc);
},{"./sandwichModule":8}],2:[function(require,module,exports){
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
},{"./sandwichCalc":7}],3:[function(require,module,exports){
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
},{}],4:[function(require,module,exports){
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
},{}],5:[function(require,module,exports){
"use strict";

// let mySandwichMaker = require("./sandwichmaker");

let DOMHandler = require("./DOMhandler");
},{"./DOMhandler":1}],6:[function(require,module,exports){
"use strict";

  console.log("meat.js is loaded");
  // Private variable to store the different meat prices


    var meatPrices = {"salamiMeat": .59,
      "capicolaMeat": .76,
      "roastBeefMeat": .80,
      "hamMeat": .90};

    let addMeat = function(topping) {
        return meatPrices[topping];
      }

    module.exports = addMeat;


},{}],7:[function(require,module,exports){
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
},{}],8:[function(require,module,exports){
"use strict";

let getTotalPrice = require("./sandwichCalc").getTotalPrice;
let addTopping = require("./sandwichCalc").addTopping;
let getToppingList = require("./sandwichCalc").getToppingList;
let addToppingList = require("./sandwichCalc").addToppingList;

let addCheese = require("./cheese");
let addBread = require("./bread");
let addMeat = require("./meat");
let addVeggies = require("./veggies");
let addCondiments = require("./condiments");


let sandwichMaker = {
  getTotalPrice, addTopping, getToppingList, addToppingList, addCheese, addBread, addMeat, addVeggies, addCondiments
};


module.exports = sandwichMaker;
},{"./bread":2,"./cheese":3,"./condiments":4,"./meat":6,"./sandwichCalc":7,"./veggies":9}],9:[function(require,module,exports){
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
},{}]},{},[5])


//# sourceMappingURL=bundle.js.map
