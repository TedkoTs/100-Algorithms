// Write a function that splits an array (first argument) into groups the length of size (second argument) 
// and returns them as a two-dimensional array.
// Example
// chunkyMonkey(["a", "b", "c", "d"], 2) should return [["a", "b"], ["c", "d"]].
// chunkyMonkey([0, 1, 2, 3, 4, 5], 4) should return [[0, 1, 2, 3], [4, 5]].

const chunkyMonkey = (arr, size) => {
    const res = []

    res[0] = arr.slice(0, size)
    res[1] = arr.slice(size)

    return res
}

console.log(chunkyMonkey(["a", "b", "c", "d"], 2));
console.log(chunkyMonkey([0, 1, 2, 3, 4, 5], 4));