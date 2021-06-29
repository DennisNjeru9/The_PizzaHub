
function Pizza(price, crust,  toppings, quantity){
  this.price = price;
  this.crust = crust;
  this.toppings = toppings;
  this.quantity = quantity;
}

var smallPizza = new Pizza(500, 50, 100, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
var mediumPizza = new Pizza(800, 150, 250, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
var largePizza = new Pizza(1300, 250, 450, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

const deliveryFeeWithinCBD = 100;
const deliveryFeeOutsideCBD = 200;

Pizza.prototype.addTotalCost = function(){
  return this.price+this.crust+this.toppings;
}