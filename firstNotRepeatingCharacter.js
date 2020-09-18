// Note: Write a solution that only iterates over the string once and uses O(1) additional memory,
// since this is what you would be asked to do during a real interview.
// Given a string s, find and return the first instance of a non-repeating character in it. 
// If there is no such character, return '_'.
// Example
// For s = "abacabad", the output should be firstNotRepeatingCharacter(s) = 'c'.
// There are 2 non-repeating characters in the string: 'c' and 'd'. Return c since it appears in the string first.
// For s = "abacabaabacaba", the output should be firstNotRepeatingCharacter(s) = '_'.
// There are no characters in this string that do not repeat.

const firstNotRepeatingCharacter = s => {
    const obj = {}
    let indx = Number.MAX_SAFE_INTEGER
    let res = '_'

    s.split('')
        .forEach((el, index) => {
            if (!obj.hasOwnProperty(el)) {
                obj[el] = { count: 1, index }
            } else {
                obj[el].count++
                obj[el].index = index
            }
        });

    for (const key in obj) {
        if (obj[key].count === 1 && obj[key].index < indx) {
            res = key
            indx = obj[key].index
        }
    }

    return res
}

console.log(firstNotRepeatingCharacter('abacabad'));
console.log(firstNotRepeatingCharacter('abacabaabacaba'));