// Given two points P and Q, output the symmetric point of point P about Q. Each argument is a two-element array of integers representing the point's X and Y coordinates. Output should be in the same format, giving the X and Y coordinates of point P1. You do not have to validate the input.

// Solution
function symmetricPoint(p, q) {
    let xP1 = 2 * q[0] - p[0]
    let yP1 = 2 * q[1] - p[1]

    return [xP1, yP1]
}

console.log(symmetricPoint([2, 6], [-2, -6]))