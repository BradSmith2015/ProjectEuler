/*

PROJECT EULER 

Problem 6 - 01/16/2020

The sum of the squares of the first ten natural numbers is,

12 + 22 + ... + 102 = 385
The square of the sum of the first ten natural numbers is,

(1 + 2 + ... + 10)2 = 552 = 3025
Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 − 385 = 2640.

Find the difference between the sum of the squares of the first n natural numbers and the square of the sum.


*/
function sumSquareDifference(n) {
  return squareOfSum(n) - sumOfSquare(n);
}

function squareOfSum(n) {
  if (n === 1) {
    return 1;
  } else if (n < 1) {
    console.log("This function takes Natural Numbers only ");
    return -1;
  }
  let sum = 1;
  for (let i = 2; i <= n; i++) {
    sum += i;
  }
  return Math.pow(sum, 2);
}

function sumOfSquare(n) {
  if (n === 1) {
    return 1;
  } else if (n < 1) {
    console.log("This function takes Natural Numbers only ");
    return -1;
  }
  let sum = 1;
  for (let i = 2; i <= n; i++) {
    sum = sum + Math.pow(i, 2);
  }
  return sum;
}

console.log(sumSquareDifference(100));
