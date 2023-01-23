let pizzaPlace = "House of Pizza";
let numberOfToppings = 5;
console.log(pizzaPlace, typeof pizzaPlace);
console.log(numberOfToppings, typeof numberOfToppings);
// Template literal next line

console.log(`Welcome to the ${pizzaPlace}, we currenly offer ${numberOfToppings} toppings at the moment.`);
if (numberOfToppings < 10) {
  console.log("Quality, not quantity.");
} else {
  console.log("A whole lot of pizza.");
}
for (let i = 2; i <= 10; i+=2) {
  if (i === 10) {
    break
  }
}
  console.log(`At the ${pizzaPlace}, we have ${i} toppings.  Quality, not quantity.`);
// It prints four times for each of the four even numbers (2, 4, 6 and 8).  Need them to clarify
// the final portion of the homework which is "The House of Pizza string 8 number At the House of Pizza,
// we have 8 toppings.  Quality, not quantity. "

