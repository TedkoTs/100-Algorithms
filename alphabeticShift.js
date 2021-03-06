// Given a string, replace each its character by the next one in the English alphabet (z would be replaced by a).
// Example
// For inputString = "crazy", the output should be alphabeticShift(inputString) = "dsbaz".

const alphabeticShift = inputString => {

    return inputString
        .split('')
        .map(el => {
            if (el === 'z') {
                return 'a'
            } else {
                return String.fromCharCode(el.charCodeAt(0) + 1)
            }
        })
        .join('')
}

console.log(alphabeticShift('crazy'));