// sting interpolation and concatenation

const firstName = 'Clayton' //add your first name
const lastName = 'Prickett' //add your last name
const fullNameConcat = firstName + " " + lastName //create your full name from the first two variables using concatenation 
const fullNameInterp = `${firstName} ${lastName}`;//create your full name from the first two variables using interpolation

console.log(fullNameInterp)

//don't change the following line, checks to see that concatenation and interpolation gave results

console.log("Are your fullNameConcat and fullNameInterp variables equal?")
console.log(fullNameConcat == fullNameInterp); 

let myAge = 29 //add your age
let faveFood = 'hamburgers' //add your favorite food
let faveColor = 'blue' //add your favorite color
let miniBio = `My name is ${fullNameInterp}, my age is ${myAge}, my favorite food is ${faveFood}.`;//use string interpolation to create summary that includes your full name, age, favorite food, and favorite color
console.log("Your mini bio is:");
console.log(miniBio);