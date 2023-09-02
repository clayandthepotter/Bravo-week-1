//Additional exercises to practice functions

//1. Create a function named "calculate" that takes three parameters: 
//two numbers and a string representing an arithmetic operation (+, -, *, /). 
//The function should perform the specified operation on the two numbers and return the result.

// function calculate(num1, num2, operator) {
//     if (operator == '+') {
//         return num1 + num2
//     } 
//     else if (operator == '*') { 
//         return num1 * num2
//     } 
//     else if (operator == '/') {
//         return num1 / num2
//     } 
//     else if (operator == '-') {
//         return num1 - num2
//     }
// }

// //Test: Uncomment the following four lines before running your code. Verify the results.

// console.log(calculate(10, 5, '+') == 15) //true
// console.log(calculate(100, 4, '/') == 20) //false
// console.log(calculate(-5, -10, '-') == 5) //true
// console.log(calculate(5, 0, "*") == 5) //false

//2. Create a function named "reverseString" that takes two parameters:
//a string containing only letters and spaces (no punctuation or special characters),
//and a boolean indicating whether or not you should preserve capitalization
//and returns a reversed version of that string

function reverseString(myString, presCap) {
    if (!presCap) {
        myString = myString.toLowerCase(); // coverts string to lowercase and saves to myString
    } 
    
    let reversedString = '';
    
    // helpful when using for loops to think about middle steps vs first step
    for (let i = 0; i < myString.length; i++) {
       let letter = myString.charAt(i)
       reversedString = letter + reversedString;
    }
    // console.log(reversedString)
    return reversedString;
}


// //Test: Uncomment the following three lines before running your code. Verify the results.
// console.log(reverseString("Alan Turing", true) == "gniruT nalA"); //true
// console.log(reverseString("California", false) == "ainrofilac"); //true
// console.log(reverseString("Racecar", true) == "racecar"); //false


//3. Write a function named "isPalindrome" that takes a string as input 
//and returns true if the string is a palindrome (reads the same forwards and backwards), 
//and false otherwise. You can assume your string will only contain letters and spaces.
//You can ignore capitalization (e.g. "Racecar" should be considered a palindrome)
//and also ignore spaces (e.g. "taco cat" should be considered a palindrome).
//Consider how your reverseString function above can be used!


// function isPalindrome(myString) {
    
//     // remove spaces and change to lowerCase
//     myString = myString.replaceAll(' ', '').toLowerCase();

//     // create a variable to store the result of calling reverseString on myString
//     // pass in false to reverseString because we dont care about caps
//     let myStringReverse = reverseString(myString, false);
    
//     //check if reverseString is equal to original
//     if (myStringReverse == myString) {
//         //if so return true
//         return true;
//     } else {
//         // if else return false
//         return false;
//     }
// }


// function isPalindrome(myString) {
    
//     // remove spaces and change to lowerCase
//     myString = myString.replaceAll(' ', '').toLowerCase();

//     // create a variable to store the result of calling reverseString on myString
//     // pass in false to reverseString because we dont care about caps
//     let myStringReverse = reverseString(myString, false);
    
//     //check if reverseString is equal to original
//     if (myStringReverse == myString) {
//         //if so return true
//         return true;
//     }   // if else return false
//         return false;
//  }

// function isPalindrome(myString) {
    
//     // remove spaces and change to lowerCase
//     myString = myString.replaceAll(' ', '').toLowerCase();

//     // create a variable to store the result of calling reverseString on myString
//     // pass in false to reverseString because we dont care about caps
//     let myStringReverse = reverseString(myString, false);

//     return (myStringReverse == myString); // returns true or false as neded    

//  }

function isPalindrome(myString) {
   
    myString = myString.replaceAll(' ', '').toLowerCase();

    return (reverseString(myString, false) == myString.replaceAll(' ', '').toLowerCase());  

 }



//Test: Uncomment the following four lines before running your code. Verify the results.
console.log(isPalindrome("Racecar") == true); //true
console.log(isPalindrome("madam") == true); //true
console.log(isPalindrome("hello") == false); //true
console.log(isPalindrome("A man a plan a canal Panama") == true); //true
console.log(isPalindrome("TACO CAT") == true); //true