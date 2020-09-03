// Check whether the given string is a subsequence of the plaintext alphabet.
// Example
// For s = "effg" or s = "cdce", the output should be alphabetSubsequence(s) = false
// For s = "ace" or s = "bxz", the output should be alphabetSubsequence(s) = true.

const alphabetSubsequence = s => {
    let result = s.split('').map(el => el.charCodeAt(0))

    for (let i = 0; i < result.length; i++) {
        if (result[i] >= result[i + 1]) {
            return false
        }
    }

    return (new Set(s)).size === result.length
}

console.log(alphabetSubsequence('zab'))
console.log(alphabetSubsequence('effg'))
console.log(alphabetSubsequence('cdce'))
console.log(alphabetSubsequence('ace'))
console.log(alphabetSubsequence('bxz'))