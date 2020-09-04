// Given array of integers, for each position i, 
// search among the previous positions for the last (from the left) position that contains a smaller value. 
// Store this value at position i in the answer. If no such value can be found, store -1 instead.
// Example
// For items = [3, 5, 2, 4, 5], the output should be arrayPreviousLess(items) = [-1, 3, -1, 2, 4].

const arrayPreviousLess = items => {
    let res = []

    for (let i = items.length - 1; i >= 0; i--) {
        for (let j = i; j >= 0; j--) {
            if (items[i] > items[j]) {
                res.unshift(items[j])
                break
            } else if (j === 0) {
                res.unshift(-1)
            }
        }
    }
    return res
}

console.log(arrayPreviousLess([3, 5, 2, 4, 5]));