// Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

// Solution
const removeEveryOther = (arr) => {
  return arr.filter((word, index) => index % 2 === 0)
}

console.log(removeEveryOther(["Hello", "Goodbye", "Hello Again"]));
