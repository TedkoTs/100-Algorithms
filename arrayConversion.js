// Given an array of 2k integers (for some integer k), 
// perform the following operations until the array contains only one element:
// On the 1st, 3rd, 5th, etc. iterations (1-based) replace each pair of consecutive elements with their sum;
// On the 2nd, 4th, 6th, etc. iterations replace each pair of consecutive elements with their product. 
// After the algorithm has finished, there will be a single element left in the array. Return that element.
// Example
// For inputArray = [1, 2, 3, 4, 5, 6, 7, 8], the output should be arrayConversion(inputArray) = 186.
// We have [1, 2, 3, 4, 5, 6, 7, 8] -> [3, 7, 11, 15] -> [21, 165] -> [186], so the answer is 186.
const arrayConversion = inputArray => {
    let isOdd = true

    while (inputArray.length !== 1) {
        inputArray = sumProd(inputArray, isOdd)
        isOdd = !isOdd
    }

    return inputArray[0]
}

function sumProd(nums, isOdd) {
    const sum = []
    if (isOdd) {
        for (let i = 0; i < nums.length; i += 2) {
            sum.push(nums[i] + nums[i + 1])
        }
    } else {
        for (let i = 0; i < nums.length; i += 2) {
            sum.push(nums[i] * nums[i + 1])
        }
    }
    return sum
}

console.log(arrayConversion([1, 2, 3, 4, 5, 6, 7, 8]));