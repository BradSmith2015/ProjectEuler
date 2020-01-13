/*

PROJECT EULER 

Problem 3 - 01/13/2020

The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the given number?*/

function largestPrimeFactor(number) {
  let primeFactor = 2;
  while (number !== 1) {
    let modOfPrime = number % primeFactor;
    if (modOfPrime === 0) {
      number = number / primeFactor;
    } else {
      primeFactor += 1;
    }
  }
  return primeFactor;
  // Good luck!
}

console.log(largestPrimeFactor(600851475143));
