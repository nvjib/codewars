// Write a function which reduces fractions to their simplest form! Fractions will be presented as an array/tuple (depending on the language) of strictly positive integers, and the reduced fraction must be returned as an array/tuple:

// input:   [numerator, denominator]
// output:  [reduced numerator, reduced denominator]
// example: [45, 120] --> [3, 8]

// solution
function gcd(a, b) {
    return b === 0 ? a : gcd(b, a % b);
}

function reduce(fraction) {
    let [a, b] = fraction;
    let divisor = gcd(a, b);
    return [a / divisor, b / divisor];
}

console.log(reduce([45, 120]))