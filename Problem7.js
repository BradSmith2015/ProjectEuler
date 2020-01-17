/*

PROJECT EULER 

Problem 5 - 01/16/2020

By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

What is the nth prime number? */
function nthPrime(n) {
  let i = 1;
  let primes = [2];
  let currentNum = 3;
  if (n == 1) return 2;
  while (i < n) {
    let isCurrentNumPrime = false;
    for (let t = 0; t < primes.length; t++) {
      if (currentNum % primes[t]) {
        console.log(
          "this is the ",
          currentNum,
          "this is what your primes is ",
          primes[t]
        );
        isCurrentNumPrime = true;
      } else {
        isCurrentNumPrime = false;
        t = primes.length;
      }
    }
    if (isCurrentNumPrime) {
      primes.push(currentNum);
      i++;
    }
    currentNum += 2;
  }
  return primes;
}

console.log(nthPrime(6));
