// Write a function which calculates the average of the numbers in a given array.

// Note: Empty arrays should return 0.

// Solution
const findAverage = arr => arr.length === 0 ? 0 : arr.reduce((a, b) => a + b) / arr.length
console.log(findAverage([1, 2 , 3]))


