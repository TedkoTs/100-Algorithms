// Given a sorted integer array that does not contain any duplicates, 
// return a summary of the number ranges it contains.
// Example
// For nums = [-1, 0, 1, 2, 6, 7, 9], the output should be composeRanges(nums) = ["-1->2", "6->7", "9"].

const composeRanges = nums => {
    const range = [{
        start: nums[0], end: nums[0]
    }]

    for (let i = 1; i < nums.length; i++) {
        if (range[range.length - 1].end + 1 === nums[i]) {
            range[range.length - 1].end = nums[i]
        } else {
            range.push({ start: nums[i], end: nums[i] })
        }
    }

    for (let i = 0; i < range.length; i++) {
        if (range[i].start !== range[i].end) {
            range[i] = `${range[i].start}->${range[i].end}`
        } else {
            range[i] = range[i].start.toString()
        }
    }

    return range
}

console.log(composeRanges([-1, 0, 1, 2, 6, 7, 9]));