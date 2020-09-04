// Given an array of integers, find the maximal absolute difference between any two of its adjacent elements.
// Example
// For inputArray = [2, 4, 1, 0], the output should be arrayMaximalAdjacentDifference(inputArray) = 3.
// For inputArray = [2, 9, 1, 0], the output should be arrayMaximalAdjacentDifference(inputArray) = 8.

const arrayMaximalAdjacentDifference = inputArray => {
    let max = 0

    inputArray.forEach((el, index) => {
        if (index + 1 < inputArray.length) {
            let sum = Math.abs(el - inputArray[index + 1])
            if (sum > max) {
                max = sum
            }
        }
    })

    return max
}

console.log(arrayMaximalAdjacentDifference([2, 4, 1, 0]));
console.log(arrayMaximalAdjacentDifference([2, 9, 1, 0]));