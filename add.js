// Write a function that returns the sum of two numbers.
// Write a function that returns the sum of all numbers regardless of # of params.
// Example
// For param1 = 1 and param2 = 2, the output should be add(param1, param2) = 3.
const add = (param1, param2) => param1 + param2

const add2 = (...param1) => {
    return param1.reduce((a, b) => a + b, 0)
}
console.log(add(1, 2));
console.log(add(3, 2));

console.log(add2(1, 2, 3, 4, 5));
console.log(add2(2, 3));

