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