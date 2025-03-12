// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Solution
const XO = (str) => {
    const lower = str.toLowerCase()
    return lower.split("x").length === lower.split("o").length
}

console.log(XO("xxOo"))