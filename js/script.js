//Have an empty aray to store toppings selected
//Check  pizza type selected
//Have a variable total to store the total price
//Check pizza size selected and add its price to total
//Check pizza crust selected and add its price to total
//Store the topppings selected in the array
//Check the prices of the toppings selected and add it to total 
//Get the quantity entered and multiply it by its total to get the total price
//Return the total price


function Pizza(price, crust, toppings,){
  this.price = price;
  this.crust = crust;
  this.toppings = toppings;
}

var smallPizza = new Pizza(500, 50, 100);
var mediumPizza = new Pizza(800, 150, 250);
var largePizza = new Pizza(1300, 250, 450);

const deliveryFeeWithinCBD = 100;
const deliveryFeeOutsideCBD = 200;

Pizza.prototype.addTotalCost = function(){
  return this.price+this.crust+this.toppings;
}


function calculateTotal(){

  var smallQuantity = parseInt(document.getElementById("s-quantity").value);
  var mediumQuantity = parseInt(document.getElementById("m-quantity").value);
  var largeQuantity = parseInt(document.getElementById("l-quantity").value);
 
  console.log(smallQuantity);
  console.log(mediumQuantity);
  console.log(largeQuantity);


  totalPurchase = smallPizza.addTotalCost() * smallQuantity + mediumPizza.addTotalCost() *mediumQuantity + (largePizza.addTotalCost() * largeQuantity);

  return totalPurchase;
}