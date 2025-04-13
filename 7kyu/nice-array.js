// Write a function named isNice/IsNice that returns true if its array argument is a Nice array, else false. An empty array is not considered nice.

// Solution
const isNice = (arr) => arr.length > 0 && arr.every((num) => arr.includes(num - 1) || arr.includes(num + 1)) 
console.log(isNice([2, 3, 6])) 