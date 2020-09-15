// Check if all digits of the given integer are even.
// Example
// For n = 248622, the output should be evenDigitsOnly(n) = true;
// For n = 642386, the output should be evenDigitsOnly(n) = false.

const evenDigitsOnly = n => {
    const isEven = number => number % 2 === 0

    return n.toString().split('').every(isEven)
}

console.log(evenDigitsOnly(248622));
console.log(evenDigitsOnly(642386));