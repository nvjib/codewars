// Write a function sumMul(n, m) that returns the sum of all multiples of n below m.

// Constraints:

// n and m are natural numbers (positive integers).
// m is excluded from the multiples.
// If n or m is invalid (e.g., m <= 0 or n <= 0), return "INVALID".

// Solution
function sumMul(n, m){
    if (n <= 0 || m <= 0 || n >= m) return "INVALID"

    let sum = 0
    for (let i = n; i < m; i += n) {
        sum += i
    }

    return  sum
 }

console.log(sumMul(0, 0))

