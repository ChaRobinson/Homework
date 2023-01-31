const pizzaToppings = ["pepperoni", "onion", "sausage", "peppers"];
function greetCustomer() {
  let message =
    "Welcome to the Pizza Palace!  These are the following toppings we offer: ";
  for (let topping of pizzaToppings) {
    message += `${topping}, `;
  }
  console.log(message);
}
greetCustomer();

function getPizzaOrder(size, crust, ...toppings) {
  console.log(`One ${size}, ${crust} crust pizza with ${toppings} coming up!`);
  return [size, crust, toppings];
}

let preparePizza = ([size, crust, toppings])=> {
  console.log(`...Cooking Pizza`);
  let pizzaObject = {
    size: size,
    crust: crust,
    toppings: toppings
  };
  return pizzaObject;
}


servePizza = (pizzaObject) => {
console.log( `Pizza is ready, you ordered a: ${pizzaObject.size}, ${pizzaObject.crust} crust pizza, with ${pizzaObject.toppings}`);
return pizzaObject;
};

servePizza(preparePizza(getPizzaOrder("Small", "thin", "pepperoni", "onion", "sausage", "peppers")));
