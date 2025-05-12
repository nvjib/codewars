// Your task is to create userlinks for the url, you will be given a username and must return a valid link.

// Solution
const generateLink = (user) =>`http://www.codewars.com/users/${encodeURIComponent(user)}`
console.log(generateLink("najibiman")) 
