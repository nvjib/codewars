// Your task is to write an update for a lottery machine. Its current version produces a sequence of random letters and integers (passed as a string to the function). Your code must filter out all letters and return unique integers as a string, in their order of first appearance. If there are no integers in the string return "One more run!"

// Solution
function lottery(str){
    let onlyNumbers = str.replace(/\D/g, "")
    let uniqueNumbers = [...new Set(onlyNumbers)]

    if (!onlyNumbers) {
        return "One more run!"
    }

    return uniqueNumbers.join("")
}

 console.log(lottery("dsgfgfsgsgfdsg"))

