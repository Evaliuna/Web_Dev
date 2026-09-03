// const score = 100
// console.log(score)

// const balance = new Number(100)
// console.log(balance)

// console.log(balance.toString().length)
// console.log(balance.toFixed(2))

// const otherBalance = 100.823456789
// console.log(otherBalance.toPrecision(3)) // Formats to three significant digits.
// console.log(otherBalance.toPrecision(2)) // May use scientific notation.

// const hundreds = 1000000000000
// console.log(hundreds.toLocaleString()) // Formats using US-style separators.
// console.log(hundreds.toLocaleString('bn-BD')) // Formats using Bangladeshi-style separators.
// console.log(hundreds.toLocaleString('en-BD'))

// ********************* Maths *********************

console.log(Math)
console.log(Math.abs(-100)) // Returns the absolute value.
console.log(Math.ceil(4.2)) // Rounds up to the next integer.
console.log(Math.floor(4.8)) // Rounds down to the previous integer.
console.log(Math.round(4.5)) // Rounds to the nearest integer.
console.log(Math.max(1, 2, 3, 4, 5)) // Returns the largest value.
console.log(Math.min(1, 2, 3, 4, 5)) // Returns the smallest value.

console.log(Math.random()) // Returns a number from 0 to less than 1.
console.log(Math.random() * 10 + 1) // Returns a decimal from 1 to less than 11.
console.log(Math.floor(Math.random() * 10) + 1) // Returns an integer from 1 to 10.

const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max - min + 1)) + min) // Generates a random integer between min and max, inclusive.