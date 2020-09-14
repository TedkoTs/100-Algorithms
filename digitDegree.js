// Let's define digit degree of some positive integer as the number of times we need to replace this number 
// with the sum of its digits until we get to a one digit number.
// Given an integer, find its digit degree.
// Example
// For n = 5, the output should be digitDegree(n) = 0;
// For n = 100, the output should be digitDegree(n) = 1. 1 + 0 + 0 = 1.
// For n = 91, the output should be digitDegree(n) = 2. 9 + 1 = 10 -> 1 + 0 = 1.

const digitDegree = n => {
    let count = 0
    let digit = n

    if (n <= 9) {
        return count;
    }
    while (true) {
        count++
        digit = digit.toString().split('').reduce((a, b) => parseInt(a) + parseInt(b), 0)
        if (digit <= 9) {
            break
        }
    }

    return count
}

console.log(digitDegree(5));
console.log(digitDegree(10));
console.log(digitDegree(91));