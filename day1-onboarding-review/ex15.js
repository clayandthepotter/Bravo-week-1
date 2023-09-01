// for loops

// for (let i = 1; i <= 5; i+=2) {
//     console.log(`Now we're on number ${i}`);
// }

/*

for (ITERATION VARIABLE, CONTINUATION CONDITION, ITERATION CHANGE) {
    whatever code you want to run for each iteration
}
*/


// const drinksMenu = ["soda", "tea", "coffee", "juice", "milk", "water"]

// // for...in loop
// // USED IF YOU NEED TO IDENTIFY POSITION/INDEX
// console.log("Welcome in! Here are your drink options:");
// for (let i in drinksMenu) {
//     console.log(drinksMenu[i]);
// }

// // for...of loop (PREFERRED)
// for (let drink of drinksMenu) {
//     console.log(drink)
// }



//Write a loop that displays the square and the cube of each 
//integer from 0 up to 5, inclusive
//Remember the exponentiation operator **

// for (let i = 0; i <= 5; i++) {
//     let square = i ** 2;
//     let cube = i ** 3;

//     console.log(`The square of ${i} is ${square}`);
//     console.log(`The cube of ${i} is ${cube}`);//your code here for second console.log() statement
// }

// array of products for sale
// our system can only store firstFiveLetters of product name
// loop through the array and log out just the firstFiveLetters of each item

let inventory = ['television', 'refrigerator', 'bed', 'oven', 'dishwasher']

// loop thru each item of inventory array
for (let eachProduct of inventory) {
    // store the firstFiveLetters in a variable
    let firstFiveLetters = eachProduct.slice(0, 5);
    console.log(firstFiveLetters)
}

