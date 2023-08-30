// variables
// scope

// cont vs. let

// const used to indicate a variable as a constant that does not change
// let is used to indicate a variable that might change

// var also exists but is outdated
// var is GLOBALLY scoped

// the scope of a variable is the 
// section or block of code that the vriable
// exists in and is accessible from

var myName = 'Clay'; // globally scoped
// accessible everywhere in this code file

for (let i = 0; i < 5; i++) {
    console.log(myName)
}

if (myName.length < 6){
    var firstLetter = myName [0];
    console.log(firstLetter);
}

var streetName = 'County Road'
var firstLetter = streetName [0]

// avoid global variables in a local block
// easiests way to avoid that is avoid using var

const mikesMeal = 23.99
const mikesDrinks = 24.00
const juansMeal = 26.49
const juansDrinks = 18.00
const sheasMeal = 21.99
const sheasDrinks = 10.00

const mealsTotal =  mikesMeal + juansMeal + sheasMeal; //complete the line to calculate the total price for all of the meals
const drinksTotal = mikesDrinks + juansDrinks + sheasDrinks; //complete the line to calculate the total price for all of the meals

const subtotal = mealsTotal + drinksTotal; //calculate the subtotal for the entire bill (both drinks and meals)

const tax = .1 * subtotal; //calculate the tax on the bill assuming a 10% tax rate
const tip = .2 * subtotal; //calculate what a 20% tip on the bill would be

const billTotal = subtotal + tax + tip; //calculate the total due for the bill
const splitAmount = billTotal / 3; //calculate how much each person pays if they decide to split the bill evenly

console.log("The total due is", billTotal.toFixed(2));
console.log("Split 3 ways is", splitAmount.toFixed(2), "each");