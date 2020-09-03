// Given an array of strings, return another array containing all of its longest strings.
// Example
// For inputArray = ["aba", "aa", "ad", "vcd", "aba"], 
// the output should be allLongestStrings(inputArray) = ["aba", "vcd", "aba"].

const allLongestStrings = inputArray => {

    return inputArray
        .sort((a, b) => b.length - a.length)
        .filter(el => el.length >= inputArray[0].length)

}

console.log(allLongestStrings(["aba", "aa", "ad", "vcd", "aba"]));