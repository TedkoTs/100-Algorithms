// Given two cells on the standard chess board, determine whether they have the same color or not.
// Example
// For cell1 = "A1" and cell2 = "C3", the output should be chessBoardCellColor(cell1, cell2) = true.
// For cell1 = "A1" and cell2 = "H3", the output should be chessBoardCellColor(cell1, cell2) = false.

const chessBoardCellColor = (cell1, cell2) => {
    const board = {
        'a': 1,
        'b': 2,
        'c': 3,
        'd': 4,
        'e': 5,
        'f': 6,
        'g': 7,
        'h': 8
    }

    const first = (board[cell1[0]] + parseInt(cell1[1])) % 2
    const second = (board[cell2[0]] + parseInt(cell2[1])) % 2

    return first === second
}

console.log(chessBoardCellColor('a1', 'c3'));
console.log(chessBoardCellColor('a1', 'h3'));