// Check if a string (first argument, str) ends with the given target string (second argument, target).
// This challenge can be solved with the .endsWith() method, which was introduced in ES2015. 
// But for the purpose of this challenge, we would like you to use one of the JavaScript substring methods instead.
// Remember to use Read-Search-Ask if you get stuck. Write your own code.
// Example
// confirmEnding("Abstraction", "action") returns true;
// confirmEnding("Open sesame", "pen") returns false;

const confirmEnding = (str, target) => {
    // return str.endsWith(target)
    return str.substr(str.length - target.length) === target
}

console.log(confirmEnding("Abstraction", "action"));
console.log(confirmEnding("Open sesame", "pen"));