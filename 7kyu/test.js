// Write a function newAvg(arr, newavg) that calculates the amount the next donor should contribute in order to reach the target average.

// If the next donation is zero or negative, throw an error.
// The result should be rounded up to the nearest integer 
// If the given array is empty, assume the current total sum is 0.

// Solution
const newAvg = (arr, newavg) => {
    const add = arr.reduce((a, b) => a + b, 0); 
    const newTotalSum = newavg * (arr.length + 1); 
    const nextDonation = newTotalSum - add; 

    if (nextDonation <= 0) {
        throw new Error("Expected New Average is too low");
    }

    return Math.ceil(nextDonation); 
}

console.log(newAvg([14, 30, 5, 7, 9, 11, 16], 30)); 
