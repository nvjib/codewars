// Write a function whoAteTheCookie(input) that returns:

// "Who ate the last cookie? It was Zach!" if input is a string.
// "Who ate the last cookie? It was Monica!" if input is a number.
// "Who ate the last cookie? It was the dog!" for anything else.

// Solution
function cookie(x){
    if (typeof x === "string") {
        return "Who ate the cookie? It was Zach!"
    }

    else if (typeof x === "number") {
        return "Who ate the cookie? It was Monica!"
    }

    else {
        return "Who ate the cookie? It was the dog!"
    }
  }

console.log(cookie("goat"))

