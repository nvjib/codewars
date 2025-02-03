/*
Write a function `calculateTip(amount, rating)` that takes a bill total (`amount`) and a service rating (`rating`) 
and returns the tip amount. 

Tip percentages: "Terrible" → 0%, "Poor" → 5%, "Good" → 10%, "Great" → 15%, 
"Excellent" → 20%. The function is case-insensitive and should round up the tip using `Math.ceil()`. 
Return `"Rating not recognised"` for invalid ratings.
*/

// Solution
function calculateTip(amount, rating) {
    const updatedRating = rating.toUpperCase();

    if (updatedRating === "TERRIBLE")  {
      return Math.ceil(amount * 0/100);
    } 
    else if (updatedRating === "POOR")  {
      return Math.ceil(amount * 5/100);
    } 
    else if (updatedRating === "GOOD")  {
      return Math.ceil(amount * 10/100);
    } 
    else if (updatedRating === "GREAT")  {
      return Math.ceil(amount * 15/100);
    } 
    else if (updatedRating === "EXCELLENT")  {
      return Math.ceil(amount * 20/100);
    } 
    else {
        return "Rating not recognised";
    }
}

console.log(calculateTip(26.95, "good")); // Output: 3
