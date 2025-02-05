// Write a function in JavaScript that takes an integer num (from 1 to 10) as input and returns a string representing its multiplication table from 1 to 10.

// Solution
function multiTable(number) {
    let result = ""
    for (let i = 1; i <= 10; i++) {
        result += `${i} x ${number} = ${i * number}\n`
    }

    return result.trim()
}

console.log(multiTable(5)) 
 
// Output:
/* 
1 x 5 = 5
2 x 5 = 10
3 x 5 = 15
4 x 5 = 20
5 x 5 = 25
6 x 5 = 30
7 x 5 = 35
8 x 5 = 40
9 x 5 = 45
10 x 5 = 50
*/