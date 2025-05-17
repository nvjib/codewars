// Given a person's age age (1 ≤ age ≤ 100), return a string "min-max" representing their dating age range.

// Use these rules:

// If age > 14:
// min = age / 2 + 7
// max = 2 * (age - 7)

// If age ≤ 14:
// min = age - 0.10 * age
// max = age + 0.10 * age

// Floor both values before returning.

// Solution
function datingRange(age){
    let min, max

    if (age <= 14) {
        min = age - (0.10 * age)
        max = age + (0.10 * age)
    } else {
        min = (age / 2) + 7
        max = 2 * (age - 7)
    }

    return `${Math.floor(min)}-${Math.floor(max)}`

  }

console.log(datingRange(40))