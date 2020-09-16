// Given an array of integers numbers, we'd like to find the closest pair of elements that add up to sum.
// Return the distance between the closest pair (absolute difference between the two indices). 
// If there isn't a pair that adds up to sum, return -1.
// Example
// For numbers = [1, 0, 2, 4, 3, 0] and sum = 5 the output should be 
// findClosestPair(numbers, sum) = 2. 1 and 4 have a sum of 5, but 2 and 3 are closer.
// For numbers = [2, 3, 7] and sum = 8 the output should be findClosestPair(numbers, sum) = -1. 
// There are no pairs that have a sum of 8.

const findClosestPair = (numbers, sum) => {
    let res = -1

    for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length - 1; j++) {
            const curSum = numbers[i] + numbers[j]
            const indexSum = Math.abs(i - j)

            if (sum === curSum) {
                if (res === -1 || indexSum < res) {
                    res = indexSum
                }
            }
        }
    }

    return res
}

console.log(findClosestPair([1, 0, 2, 4, 3, 0], 5));
console.log(findClosestPair([2, 3, 7], 8));