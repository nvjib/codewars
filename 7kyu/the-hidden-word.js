// Write a function in JavaScript that takes a number (100 - 999999) as input and returns a word. The number only contains the digits 0,1,3,4,5,6,7,8,9, which map to letters as follows: 

// "6": "a",
// "1": "b",
// "7": "d",
// "4": "e",
// "3": "i",
// "2": "l",
// "9": "m",
// "8": "n",
// "0": "o",
// "5": "t"

// Convert each digit to its corresponding letter and return the word as a lowercase string.

// Solution
function hiddenWord(num) {
    const key = {
        "6": "a",
        "1": "b",
        "7": "d",
        "4": "e",
        "3": "i",
        "2": "l",
        "9": "m",
        "8": "n",
        "0": "o",
        "5": "t"
      };
    
    return String(num).split("").map((e) => key[e]).join("")
  }

console.log(hiddenWord(637)) 
