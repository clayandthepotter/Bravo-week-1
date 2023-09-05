// Task 1: Define a Book
// Create a minimum of three book objects with properties for title, author, book id, and availability (true or false).
//The first one has been created for you.

let book1 = {
  title: 'The Great Gatsby',
  author: 'F. Scott Fitzgerald',
  bookId: '345',
  availability: true
};

let book2 = {
  title: 'The Hobbit',
  author: 'J. R. R. Tolkien',
  bookId: '346',
  availability: true
};

let book3 = {
  title: 'The Lord of The Rings',
  author: 'J. R. R Tolkien',
  bookId: '347',
  availability: true
};



// Task 2: Create a Collection of Books
// Create an array of books which will act as the library's collection.
// Populate the array with 3-5 book objects as defined in Task 1.

let library = [
  book1,
  book2,
  book3,
];

console.log(`Current library:`, library)

// // Task 3: Add a Book to the Collection
// // Write a function `addBook` which takes a book object as a parameter and adds it to the collection of books.

function addBook(title, author, bookId, availability) {
  // Create an book using the parameters
  const book = {
  title: title,
  author: author,
  bookId: bookId,
  availability: availability,
  };
  // Add the book to the library
  library.push(book);
  console.log(`You have added ${title} to the library.`);
}

addBook('The Bible', 'God', '777', true);
console.log(`Updated library:`, library);

// Task 4: Remove a Book from the Collection
// Write a function `removeBook` which takes a Book ID number as a parameter and removes the corresponding book from the collection.

// your code here

function removeBook(bookId) {
  library = library.filter(function searchFor(book) {
    return book.bookId !== bookId;
  });
  console.log(`You have removed book ${bookId} from the Library.`)
  console.log(`Updated library:`, library)
}


removeBook('345')



// // Task 5: Find a Book
// // Write a function `findBook` which takes a string as a parameter and searches the collection for a book with a matching title or author.
// // The function should return an array of all books that match the search query.

function findBook(query) {
  // loop through library
  for (let book of library) {
    // if (clean)title includes (clean)query, log book 
    if (book.title.toLowerCase().includes(query.toLowerCase())) {
      console.log(`We have ${book.title}.`)
      //terminate function if above is true
      return;
    } else {
        // if (clean)author is same as (clean)query, log book
        if (book.author.toLowerCase().includes(query.toLowerCase())) {
        console.log(`We have ${book.title} by ${book.author}.`)
        // terminate function
        return;
        }
      }
    }
  console.log(`We do not have the book you are looking for at the moment.`)
  return;
}


findBook('god')


// // Task 6: Display the Collection
// // Write a function `displayBooks` which displays the entire collection of books.

function displayBooks() {
  // log library
  console.log('These are the available books in the Library.')
  for (let book of library) {
    console.log(book);
  }
}

displayBooks()

// Task 7: Test Your Functions
// Use the functions you have written to add, remove, find, and display books in the collection.
// Predict the outcomes before you run the code and compare the results to your predictions.




// Extended Tasks

// Task 8: Book Availability
// Write a function called `toggleAvailability` which takes a Book ID number as an argument and changes the availability status 
// of the corresponding book in the collection.

function toggleAvailability(bookId) {
  // your code here
  for (let book of library) {
    
  }
}


// Task 9: Multiple Copies
// Modify your book object structure to include a `copies` property that indicates the number of available copies.
// Update your `addBook` function to increment the `copies` property if the book already exists in the collection, 
// instead of adding a duplicate entry.

// function addBook(book) {
//   // your updated code here
// }

// Task 10: Advanced Search
// Extend the `findBook` function to also search by the number of copies available, so it can find all books that have at least a certain number of copies.
// Also, allow it to accept an array of queries for more complex search scenarios.

// function findBook(query) {
//   // your updated code here
// }


// Task 11: Book Ratings
// Add a property called `rating` to your book object. It should hold a number between 0 and 5.
// Write a function called `setRating` that takes a Book ID and a rating as arguments and sets the rating of the corresponding book.

// function setRating(bookId, rating) {
//   // your code here
// }


// Task 12: Summary Function
// Write a function called `librarySummary` that provides a summary of the library. 
// It should display the total number of books, the total number of available books, and the average rating of all books.

// function librarySummary() {
//   // your code here
// }