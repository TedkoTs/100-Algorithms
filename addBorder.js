// Given a rectangular matrix of characters, add a border of asterisks(*) to it.
// Example
// For
// picture = ["abc",
//        "ded"]
// the output should be
// addBorder(picture) = ["*****",
//                   "*abc*",
//                   "*ded*",
//                   "*****"]


const addBorder = (picture) => {
    picture.push('*'.repeat(picture[0].length + 2))
    picture.unshift('*'.repeat(picture[0].length + 2))

    for (let i = 1; i < picture.length - 1; i++) {
        picture[i] = '*'.concat(picture[i], '*')
    }
    return picture
}

console.log(addBorder(["abc", "ded"]));