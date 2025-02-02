// You are given an array of numbers, where each number represents an ASCII character code. Your task is to write a function that takes this array as input and returns a string by converting each number to its corresponding character using String.fromCharCode().

// Solution
const ArrowFunc = (arr) => arr.map(x => String.fromCharCode(x) ).join('');
console.log(ArrowFunc([72, 101, 108, 108, 111])) // Output: Hello
