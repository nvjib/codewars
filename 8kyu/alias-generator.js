// Write a function aliasGen(first, last) that takes a first and last name and returns a hacker alias. You are given two objects, firstName and surname, which map the first letter of each name (A-Z) to an alias. If either name does not start with a letter (A-Z), return "Your name must start with a letter from A - Z.", otherwise return "<First Name Alias> <Surname Alias>". The function should be case insensitive.

let firstName = { 
    A: 'Alpha', B: 'Beta', C: 'Cache', D: 'Delta', E: 'Echo', 
    F: 'Foxtrot', G: 'Glitch', H: 'Hyper', I: 'Indigo', J: 'Jolt',
    K: 'Kilo', L: 'Logic', M: 'Matrix', N: 'Neon', O: 'Omega',
    P: 'Phantom', Q: 'Quantum', R: 'Rogue', S: 'Shadow', T: 'Turbo',
    U: 'Ultra', V: 'Vector', W: 'Wildcard', X: 'Xenon', Y: 'Yield',
    Z: 'Zenith'
};
  
let surname = { 
    A: 'Analogue', B: 'Bomb', C: 'Catalyst', D: 'Destroyer', E: 'Echo',
    F: 'Flux', G: 'Genesis', H: 'Havoc', I: 'Inferno', J: 'Jinx',
    K: 'Kraken', L: 'Legend', M: 'Mirage', N: 'Nemesis', O: 'Overlord',
    P: 'Pulse', Q: 'Quasar', R: 'Rift', S: 'Storm', T: 'Tornado',
    U: 'Umbra', V: 'Vortex', W: 'Warp', X: 'Xenon', Y: 'Yonder',
    Z: 'Zen'
  };


// Solution
function aliasGen(first, last) {
    let firstChar = first[0].toUpperCase()
    let secondChar = last[0].toUpperCase()

    if (!/^[A-Za-z]$/.test(firstChar) || !/^[A-Za-z]$/.test(secondChar)) {
        return "Your name must start with a letter from A - Z."
    }

    return firstName[firstChar] + " " + surname[secondChar]
    
}

console.log(aliasGen("123abdi", "iman"))

  



  