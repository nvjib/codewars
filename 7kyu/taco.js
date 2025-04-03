// Write a function tacoTranslate(word) that takes a single string word and returns an array representing that word as a taco.

// Taco Ingredient Key
// Use the following rules to translate each letter:

// Vowels (a, e, i, o, u) → "beef"

// t → "tomato"

// l → "lettuce"

// c → "cheese"

// g → "guacamole"

// s → "salsa"

// Ignore all other letters.

// The taco must always include "shell" as the first element in the array.

function tacofy(word) {    
    const ingredients = {
        "t": "tomato",
        "l": "lettuce",
        "c": "cheese",
        "g": "guacamole",
        "s": "salsa"
    };
    
    const taco = ["shell"];

    word.toLowerCase().split("").forEach((char) => {
        if ("aeiou".includes(char)) taco.push("beef"); 
            
        if (ingredients[char]) taco.push(ingredients[char]); 
    });

    taco.push("shell");

    return taco;
}

console.log(tacofy("gjygygugu"))

