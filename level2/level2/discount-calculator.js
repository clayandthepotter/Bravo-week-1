/*
You're creating a discount calculator for a store. 
Given an array of item prices, calculate and print the discounted price for each item. 
Apply a 10% discount to items priced at or above $50 and a 5% discount to all other items.

Print out a message indicating the original price and the new price of the item.

Example input: [70, 25, 50, 10]

Example output:
Original price: $70, Discount price: $63
Original price: $25, Discount price: $23.75
Original price: $50, Discount price: $45
Original price: $10, Discount price: $9.50
 */

const itemPrices = [25, 60, 30, 75, 15];

// Calculate and print the discounted price for each item.

// add your code below this line, include comments describing your code

for (i = 0; i < itemPrices.length; i++) {
    //store each price in variable
    currItem = itemPrices[i]
    // Log current item price
    console.log("Item price", currItem.toFixed(2))
    //Use a conditional to check if price is $50 or above
    if (currItem >= 50) {
        // Apply a 10% discount
        currItem = currItem *.9
        // Log current item with discount
        console.log("Price with discount", currItem.toFixed(2))
    } else {
        // I price is less than 50
        if (currItem < 50) {
            // apply 5% discount
            currItem = currItem * .95
        }
        // log price with discount
        console.log("Price with discount", currItem.toFixed(2))
    }
}

