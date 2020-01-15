/*

PROJECT EULER 

Problem 5 - 01/15/2020

2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

What is the smallest positive number that is evenly divisible by all of the numbers from 1 to n?
*/
function smallestMult(n) {
  if (n === 1 || n === 2) {
    return n;
  }
  let num = 1;
  for (let i = 2; i <= n; i++) {
    num = (num * i) / GCD(num, i);
  }
  return num;
}

function GCD(a, b) {
  if (a < b) {
    let temp = b;
    b = a;
    a = temp;
  }
  if (b === 0) {
    return a;
  } else {
    r = a % b;
    return GCD(b, r);
  }
}

console.log(smallestMult(5));
