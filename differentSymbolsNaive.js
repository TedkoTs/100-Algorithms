// Given a string, find the number of different characters in it.
// Example
// For s = "cabca", the output should be differentSymbolsNaive(s) = 3.
// There are 3 different characters a, b and c.

const differentSymbolsNaive = s => {
    return new Set(s).size
}

console.log(differentSymbolsNaive('cabca'));