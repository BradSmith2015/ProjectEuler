/*

PROJECT EULER 

Problem 4 - 01/14/2020

A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

Find the largest palindrome made from the product of two n-digit numbers.
*/
function largestPalindromeProduct(n) {
  let res = []; // array to hold all the palidromes
  let max = Math.pow(10, n); //the max number that palindromes can be
  let min = Math.pow(10, n - 1); // the min
  for (let i = max; i > min; i--) {
    for (let j = max; j > min; j--) {
      let currentProd = i * j;
      let numToString = String(currentProd);

      if (
        numToString ===
        numToString
          .split("")
          .reverse()
          .join("") // if string palindorme
      ) {
        res.push(currentProd); // push current prod
        break; // break to increase in eff
      }
    }
  }
  return Math.max(...res);
}

console.log(largestPalindromeProduct(3));
