// Write a JavaScript function to check if a string contains "hello" in different languages. The function should be case-insensitive.

// hello - english
// ciao - italian
// salut - french
// hallo - german
// hola - spanish
// ahoj - czech republic
// czesc - polish

// Solution
const validateHello = (greetings) => {
    return /hello|ciao|salut|hallo|hola|ahoj|czesc/i.test(greetings) 
  }

console.log(validateHello("cIaO"))