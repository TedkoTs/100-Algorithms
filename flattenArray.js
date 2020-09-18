// Flatten a nested array. You must account for varying levels of nesting.
// Example
// steamrollArray([[["a"]], [["b"]]]) should return ["a", "b"].
// steamrollArray([1, [2], [3, [[4]]]]) should return [1, 2, 3, 4]
const flattenArray = arr => {

    const deepFlat = x => {
        x.forEach(el => {
            if (Array.isArray(el)) {
                deepFlat(el)
            } else {
                res.push(el)
            }
        });
    }

    const res = []

    deepFlat(arr)

    return res
}

console.log(flattenArray([[["a"]], [["b"]]]));
console.log(flattenArray([1, [2], [3, [[4]]]]));