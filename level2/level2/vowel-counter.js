/*
You're going to build a vowel counter. 
Given a string, count and print out the number of vowels in the string. 
For the purpose of this assignment, we will not consider y to be a vowel.
 
Example input: "Do you know where the mall is, Ellie?"

Example output:
Number of vowels: 12

*/

//HINT: The string 'aeiou' has been provided for you if you 
//think it might be helpful. You might want to look into what
//the 'includes' method does and how it might be useful here.

let text = "Hello, how are you today? Enjoy your stay!"; // 14 vowels
let vowels = ['a', 'e', 'i', 'o', 'u'];

//add your code below

// create a function to count the vowels of a sentence and output a response with the sentence and vowel count
function vowelCounter() {
    // set vowel count to zero
    let vowelCount = 0;
    // change text to lowercase
    let sentence = text.toLowerCase();
    //create a for loop to iterate through our sentence variable
    for (i = 0; i < sentence.length; i++) {
        // create a variable to contain currLetter
        let currLetter = sentence.charAt(i);
        //create a conditional statement that checks if letter in currLetter is a vowel
        if (vowels.includes(currLetter)) {
            // if true, add vowel to vowel count
            vowelCount++
        }
    }
    console.log(`There are ${vowelCount} vowels in your input.`)
}


vowelCounter(text)