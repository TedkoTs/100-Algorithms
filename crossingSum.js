// Given a rectangular matrix and integers a and b, 
// consider the union of the ath row and the bth (both 0-based) column of the matrix 
// (i.e. all cells that belong either to the ath row or to the bth column, or to both). 
// Return sum of all elements of that union.
// Example
// For
// matrix = [[1, 1, 1, 1], [2, 2, 2, 2], [3, 3, 3, 3]] a = 1 and b = 3, 
// the output should be crossingSum(matrix, a, b) = 12.
// Here (2 + 2 + 2 + 2) + (1 + 3) = 12.
const crossingSum = (matrix, a, b) => {
    const totalRow = matrix[a].reduce((a, b) => a + b, 0)
    let totalCol = 0

    for (let i = 0; i < matrix.length; i++) {
        totalCol += i !== a ? matrix[i][b] : 0
    }

    return totalCol + totalRow
}

console.log(crossingSum(
    [
        [1, 1, 1, 1],
        [2, 2, 2, 2],
        [3, 3, 3, 3]
    ],
    1, 3));