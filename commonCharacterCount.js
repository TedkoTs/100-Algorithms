// Given two strings, find the number of common characters between them.
// Example
// For s1 = "aabcc" and s2 = "adcaa", the output should be commonCharacterCount(s1, s2) = 3.
// Strings have 3 common characters - 2 "a"s and 1 "c".

const commonCharacterCount = (s1, s2) => {

    const obj1 = makeObj(s1.split(''))
    const obj2 = makeObj(s2.split(''))
    let res = 0

    for (const prop in obj1) {
        if (obj2.hasOwnProperty(prop)) {
            if (obj2[prop] < obj1[prop]) {
                res += obj2[prop]
            } else {
                res += obj1[prop]
            }
        }
    }
    return res
}

function makeObj(arr) {
    const countObj = {}

    for (let i = 0; i < arr.length; i++) {
        if (countObj.hasOwnProperty(arr[i])) {
            countObj[arr[i]]++
        } else {
            countObj[arr[i]] = 1
        }
    }

    return countObj
}

console.log(commonCharacterCount('aabcc', 'adcaa'));