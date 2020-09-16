// Fermat's factorization method is: 
// If a · b = n (where a ≤ b), then there exist some c and d such that n = c^2 - d^2. 
// Your goal is to return for given n such c and d as an array. Since we want c and d to be uniquely determined, 
// in all test cases n is a semiprime number.
// Example
// For n = 15, the output should be fermactor(n) = [4, 1]. 15 = 4^2 - 1^2.

const fermactor = n => {

    for (let i = 1; i < n; i++) {
        for (let j = 1; j < i; j++) {
            let total = i ** 2 - j ** 2
            if (total === n) {
                return [i, j]
            }
        }
    }
}

console.log(fermactor(15));