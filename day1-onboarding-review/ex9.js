// string indexing

let myString = "California"

// let firstLetter = myString[0]

let firstLetter = myString.charAt(0)

// console.log(firstLetter);

// last lettter

lastLetter = myString.charAt(myString.length - 1)

// console.log(lastLetter)

const fullString = "SOFTWARE DEV";

const vanityLetter1 = fullString.charAt(0) //your code here
const vanityLetter2 = fullString[2];//your code here
const vanityLetter3 = fullString[3]; //use this as an example
const vanityLetter4 = fullString[4];//your code here
const vanityLetter5 = fullString[6];//your code here
const vanityLetter6 = fullString[9];//your code here
const vanityLetter7 = fullString[11];//your code here

const vanityPlate = (vanityLetter1 + vanityLetter2 + vanityLetter3 +
                    vanityLetter4 + vanityLetter5 + vanityLetter6 + 
                    vanityLetter7); //your code here

console.log(`The new vanity plate is ${vanityPlate}`);