// Write a function mouthSize(animal) that takes a string animal as input and returns "small" if the animal is an alligator (case-insensitive), otherwise return "wide". 

// For example, mouthSize("alligator") and mouthSize("ALLIGATOR") should return "small", while mouthSize("cat") and mouthSize("dog") should return "wide". 

// The function should handle different letter cases correctly and assume that the input will always be a valid string containing only letters.

// Solution
const mouthSize = animal => animal.toLowerCase() === "alligator" ? "small" : "wide"
console.log(mouthSize("lion"))
