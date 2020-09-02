// You are given a two-digit integer n. Return the sum of its digits.
// Example
// For n = 29, the output should be addTwoDigits(n) = 11.

const addTwoDigits = n => {

    return n.toString().split('').reduce((a, b) => a + Number(b), 0)
}

console.log(addTwoDigits(99))