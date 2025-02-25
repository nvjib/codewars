// Don Drumphet struggles to read and can only remember two letters from each neighbor’s name.

// Task: Write a function that takes a name and returns:

// [Full name, First 2 letters] if the name has more than 2 characters.
// [Full name] if it has 2 or fewer characters.


// Solution
const whoIsPaying = name =>  name.length > 2 ? [name, name.slice(0, 2)] : [name]
console.log(whoIsPaying("Mexico"))