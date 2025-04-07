// In this Kata, you will be given an array of unique elements, and your task is to rearrange the values so that the first max value is followed by the first minimum, followed by second max value then second min value, etc.

// For example:

// solve([15,11,10,7,12]) = [15,7,12,10,11]
// The first max is 15 and the first min is 7. The second max is 12 and the second min is 10 and so on.

// Solution
function solve(arr) {
    const sortedArr = [...arr].sort((a, b) => a - b);  // Sort the array in ascending order
    const newArr = [];
  
    let low = 0;
    let high = sortedArr.length - 1;
  
    while (low <= high) {
      newArr.push(sortedArr[high]);

      if (low < high) newArr.push(sortedArr[low]);
      low++;
      high--;
    }
  
    return newArr;
  }
  
console.log(solve([15, 11, 10, 7, 18]));  // [15, 7, 12, 10, 11]
  