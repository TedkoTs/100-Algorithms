// Given an array of integers, find the pair of adjacent elements that has the largest product and return that product.
// Example
// For inputArray = [3, 6, -2, -5, 7, 3], the output should be adjacentElementsProduct(inputArray) = 21.
// 7 and 3 produce the largest product.

const adjacentElementsProduct = (inputArray) => {
    let result = 0

    for (let i = 0; i < inputArray.length - 1; i + 1) {
        const temp = inputArray[i] * inputArray[i + 1]

        if (result <= temp) {
            result = temp
        }
    }

    return result
}

console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3]))