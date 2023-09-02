// a function allows you to group together and name multiple
// lines of code so that you can more easily run them all at
// once whenever you need to just by calling the function with its name

//standard function syntax

/*
1. function keyword
2. name of the function
3. parentheses
4. any parameter







*/

// function simpleGreeting() {
//     console.log('welcome to our company!');
//     console.log('have a nice day!');
// }

// //parameterless function

// function cheerfulGreeting() {
//     console.log("hello!");
//     simpleGreeting();
// }

// // call the function
// cheerfulGreeting();

// // // single parameter function
// function greetByName(theirName) {
//     console.log(`Hello ${theirName}!`)
//     console.log('welcome to our company!')
// }

// // greetByName("Steve")

// // // calling visitors within a loop
// let visitors = ['Abby', 'Brian', 'Carla', 'Dennis', 'Edgar']

// for (let visitor of visitors) {
//     greetByName(visitor);
// }


// // multi-parameter functions

// function calcSqFt(length, width) {
//     let sqft = length * width;
//     console.log(`The square footage for a ${length} by ${width} room is ${sqft}`)
//     return sqft;
// }

// let bedroom1 = calcSqFt(10, 20)
// let bedroom2 = calcSqFt(11, 12)
// let livingRoom = calcSqFt(16, 24)

// let roomsSqFt = bedroom1 + bedroom2 + livingRoom;

// console.log("The total sqft of rooms is", roomsSqFt)
// // if we want our functions to give us back their final result,
// // we use a return statement
// //functions automatically terminate when they reach their return




function maxNumArr(myArray) {
    let largestNum = myArray[0]; 
        for (let num of myArray) {
            if (num > largestNum) {
             largestNum = num;
            }
        }
    console.log(largestNum)    
    return largestNum;
} 

let myArray = [1, 3, 7, 45, 2, 4, 13, 7, 345, 34, 3, 7, 98, 45] 

maxNumArr(myArray);
