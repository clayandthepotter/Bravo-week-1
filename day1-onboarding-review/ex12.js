//array methods

let days = ["Mon", "Tues", "Wed", 'Thurs', 'Fri']

days.pop() // removes and returns the last item in the array

// days.push('Sat') // adds to the end of the array

// days.shift(); // remove the first item in the array

// days.unshift('Sun'); // adds item to front of array


// // console.log(days)

// let grades = [99, 100, 45, 67, 94]
// let grade = grades.pop()

// if (grade >= 70) {
//     console.log('PASS')
// } else {
//     console.log('FAIL')
// }



// console.log(grades)

//You've decided to start with last night's menu and decide what adjustments to make from there
const menu = ["steak", "fish", "lobster", "chicken", "duck", "eggplant", "pork chop", "pasta"]

//You've decided to switch out the lobster at index 2 for crab and the eggplant at index 5 for lasagna
//The first replacement is done for you, add the code for the second replacement beneath it


menu[2] = "crab"
//add your code on this line
menu[5] = 'lasagna'

//You've been persuaded to add beef wellington to the menu, but you really hope no one orders it so you add it to the end of the menu and hopefully no one will see.
//Conversely, you have some really great prawns that you'd like to feature. Add them to the beginning of the menu to highlight them.

menu.push("beef wellington");
//add your code on this line
menu.unshift('prawns')
//You've decided you're happy with the menu now, so it's time to split the work between your sous chefs, Nico and Maria.
//You want to assign the first half of the menu to Maria and the second half to Nico. 

//You need to know which index position is the halfway point. Determine that by finding the length of the array and dividing by 2
const halfIndex = menu.length / 2//add your code on this line

//Use the array slice() method to assign the first half of the menu to Maria
const mariasDishes = menu.slice(0, halfIndex)//add your code here

//Use the array slice() method to assign the second half of the menu to Nico
const nicosDishes = menu.slice(halfIndex)//add your code here

console.log("Today's final menu is", menu);
console.log("Maria will be preparing", mariasDishes);
console.log("Nico will be preparing", nicosDishes);