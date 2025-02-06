/* 
Write a function describeAge(age) that returns:

"You're a(n) kid" if age ≤ 12
"You're a(n) teenager" if 13 ≤ age ≤ 17
"You're a(n) adult" if 18 ≤ age ≤ 64
"You're a(n) elderly" if age ≥ 65
Limit: Max 137 characters. Shorten as much as possible!
*/

// TODO: Refactor and shorten the function
const describeAge = (age) => age <= 12 ? "You're a(n) kid" : age <= 17 ? "You're a(n) teenager" : age <= 64 ? "You're a(n) adult" : "You're a(n) elderly"
console.log(describeAge(100)) // Output: You're a(n) elderly
