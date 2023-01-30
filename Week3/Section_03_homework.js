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
  console.log(size);
  console.log(crust);
  console.log(toppings);
  console.log(`One ${size}, ${crust} crust pizza with ${toppings} coming up!`);
}
getPizzaOrder(
  "Large",
  "Thin",
  "Anchovies",
  " Extra Cheese",
  " Olives",
  " Peppers",
  " and Pineapples"
);

let preparePizza2 = (size, crust, listOfToppings) => {
  console.log(size);
  console.log(crust);
  console.log(listOfToppings);
  console.log(`...Cooking Pizza`);
  this.size = "Large";
  this.crust = "Thin";
  (this.listOfToppings = "Extra Cheese"), "Onions", "Peppers";
};

function printArray(array) {
  const object = {
    pizza: "pizza supreme",
    chips: "Lays",
    cheetos: "Not good"
  };
  for (let array in object) {
    console.log(`${array} ${[object.pizza]}`);
    console.log(`${array} ${[object.chips]}`);
    console.log(`${array} ${[object.cheetos]}`);
  }
}
printArray();

function servePizza(size, crust, toppings) {
  for (const pizza of servePizza) {
    const pizza = (size = "Large"),
      crust = "Thin",
      toppings = ["pepperoni", "sausage", "onion"];
  }
  console.log(
    `One ${pizza.size}, ${pizza.crust} pizza with ${pizza.toppings} coming right up!`
  );
}

servePizza(size, crust, toppings);

// I apologize it's incomplete, but I have zero idea of where to take this anymore.
