// Some people just have a first name; some people have first and last names and some people have first, middle and last names.

// You task is to initialize the middle names (if there is any).

// Solution
function initializeNames(name){
    const parts = name.trim().split(" ")

    if (parts.length <= 2) return name

    const first = parts[0]
    const last = parts[parts.length - 1]
    const middle = parts.slice(1, -1).map(n => n[0].toUpperCase() + ".").join(" ")

    return `${first} ${middle} ${last}`
}

console.log(initializeNames('Alice Betty Catherine Davis')) 