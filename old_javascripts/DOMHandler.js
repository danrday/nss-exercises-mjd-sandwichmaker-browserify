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


