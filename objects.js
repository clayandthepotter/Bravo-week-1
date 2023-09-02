// objects in javaScript are data structures that allow you to store information in key-value pairs

// example object contacts

let contacts = {
    'John' : '817-123-4567',
    'Susie' : '214-123-4567',
    'Mark' : '972-123-4567',
}

// console.log(contacts);

// you can look things up in objects

// look up 'Mark''s number and store as separate variable
let marksNum = contacts['Mark'];
// console.log(marksNum);

// add things to the object
// Mary's number is 214-567-8901. Add her to contacts object
contacts["Mary"] = '214-567-8901';
// console.log(contacts);

//You have a video rental store 
//Create a movie object that stores the following properties for the movie
//title, releaseYear, rating, numCopies

const movie1 = {
    title : 'Barbie',
    releaseYear : '2023',
    rating : 'PG-13',
    numCopies :  0,
}

console.log(movie1);

//print out a statement summary of the movie info
//eg. "Barbie was released in 2023 and has a pg-13 rating. we have 3 copies."
let summary1 =
    (`${movie1.title} was released in ${movie1.releaseYear} and has a ${movie1.rating} rating. We have ${movie1.numCopies} copies.`)

console.log(summary1)

const movie2 = {
    title : 'Oppenheimer',
    releaseYear : '2023',
    rating : 'R',
    numCopies :  1,
}

console.log(movie2);


let summary2 =
    (`${movie2.title} was released in ${movie2.releaseYear} and has a ${movie2.rating} rating. We have ${movie2.numCopies} copies.`)

console.log(summary2)



let inventory = [movie1, movie2];

// write a function that lets people check out a movie by returning its title
// we need to find the correct movie and decrease the number of copies by 1 and return


function rentMovie(title) {
    for (let movie of inventory) {
        // if the movies title equals the title parameter passed in
        if (movie.title.toLowerCase() == title.toLowerCase()) {
            // check if any copies are available
            if (movie.numCopies > 0) {
                //decreased the movies copies by 1 and return/end function 
                movie.numCopies--;
                console.log(`Here is your movie`)
                return;
            } else {
                console.log("All copies are rented currently.")
                return;
            }
        }
    }
    //if loop finishes without returning, we don't have 
    console.log("We don't have that title.")
    return;
}


rentMovie('barbie')
rentMovie('the lion king')
rentMovie('oppenheimer')
