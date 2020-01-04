/* 
PROJECT EULER 

Problem 1 - 01/04/2020

If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
Find the sum of all the multiples of 3 or 5 below the provided parameter value number.
*/

function multiplesOf3and5(number) {
  let total = 0;
  for (let i = 3; i < number; i++) {
    if (!(i % 3)) total += i;
    else if (!(i % 5)) total += i;
  }
  return total;
}

console.log(multiplesOf3and5(49));
