// Create a function that takes parameters and adds an object to the array
function addObjectToArray(name, age, city) {
  // Create an object using the parameters
  const newObj = {
    name: name,
    age: age,
    city: city
  };

  // Add the object to the array
  objectArray.push(newObj);
}

// Call the function with parameters to add an object to the array
addObjectToArray('Alice', 30, 'New York');
addObjectToArray('Bob', 25, 'Los Angeles');

// The objectArray now contains the objects added by the function
console.log(objectArray);