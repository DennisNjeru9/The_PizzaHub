
function Pizza(price, crust,  toppings, quantity){
  this.price = price;
  this.crust = crust;
  this.toppings = toppings;
  this.quantity = quantity;
}

var smallPizza = new Pizza(500, ["Crispy", "Stuffed", "Gluten-free"], ["Pepperoni", "Mushroom", "Green Pepper", "Fresh Garlic", "Tomato", "Black Olives", "Sausage", "Onions", "Fresh Basil", "Extra Cheese"], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
var mediumPizza = new Pizza(800, ["Crispy", "Stuffed", "Gluten-free"], ["Pepperoni", "Mushroom", "Green Pepper", "Fresh Garlic", "Tomato", "Black Olives", "Sausage", "Onions", "Fresh Basil", "Extra Cheese"], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
var largePizza = new Pizza(1300, ["Crispy", "Stuffed", "Gluten-free"], ["Pepperoni", "Mushroom", "Green Pepper", "Fresh Garlic", "Tomato", "Black Olives", "Sausage", "Onions", "Fresh Basil", "Extra Cheese"], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);