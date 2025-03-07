// Write a function that returns the total surface area and volume of a box.

// The given input will be three positive non-zero integers: width, height, and depth.

// The output will be language dependant, so please check sample tests for the corresponding data type, (list, tuple, struct, query, et cetera).

// Solution
function getSize(width, height, depth) {
    const surfaceArea = 2 * (width * height + height * depth + width * depth)
    const volume = width * height * depth
    return [surfaceArea, volume]
  }

console.log(getSize(4, 2, 6))