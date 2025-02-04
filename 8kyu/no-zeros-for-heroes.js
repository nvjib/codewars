/* 
Numbers ending with zeros are boring.
They might be fun in your world, but not here.
Get rid of them. Only the ending ones.
*/

// Solution
function noBoringZeros(n) {
    while (n % 10 === 0 && n !== 0) { 
        n = n / 10; 
    }
    return n;
}

console.log(noBoringZeros(1240));  // Output: 124
console.log(noBoringZeros(1000));  // Output: 1
console.log(noBoringZeros(0));     // Output: 0


