// You are implementing your own HTML editor. 
// To make it more comfortable for developers you would like to add an auto-completion feature to it.
// Given the starting HTML tag, find the appropriate end tag which your editor should propose.
// If you are not familiar with HTML, consult with this note.
// Example
// For startTag = "", the output should be htmlEndTagByStartTag(startTag) = "";
// For startTag = "", the output should be htmlEndTagByStartTag(startTag) = "".

const htmlEndTagByStartTag = startTag => {
    const input = startTag.split(' ')
    const tag = input[0].split('')
    let endTag = '</'

    for (let i = 1; i < tag.length; i++) {
        endTag += tag[i]
    }

    return endTag[endTag.length - 1] === '>' ? endTag : endTag += '>'
}

console.log(htmlEndTagByStartTag("<button type='button' disabled>"));
console.log(htmlEndTagByStartTag('<i>'))