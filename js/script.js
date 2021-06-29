
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

  totalPurchase = smallPizza.addTotalCost() * smallQuantity + mediumPizza.addTotalCost() *mediumQuantity + (largePizza.addTotalCost() * largeQuantity);

  return totalPurchase;
}