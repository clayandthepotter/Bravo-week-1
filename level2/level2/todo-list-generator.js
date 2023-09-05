/*
You're creating a simple to do list. 

Given an array of tasks to complete, print each task out 
in a numbered list indicating the order of the tasks.

Example input: ["Do dishes", "Sweep floor", "Feed dog"]

Example output:
1. Do dishes
2. Sweep floor
3. Feed dog

Note: This is totally separate/different from the to do list project.
*/

const tasks = ["Buy groceries", "Finish homework", "Go for a run", "Call a friend"];

//add your code below

//create a for loop to iterate through the array
for (i = 0; i < tasks.length; i++) {
    // define a variable to contain the task
    let task = tasks[i]
    //
    console.log(`${i+1}. ${task}`)
}