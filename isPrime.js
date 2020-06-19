"use strict";

// STILL WORKING ON THIS, IDK WHAT I DID WRONG LOL.....

function isPrime(int) {
  // see if argument is natural number,
  // create a loop and iterate up to the integer
  // see if the number is devisable by any numbers other than 1 & the int

  for (let i = 2; i < int; i++) {
    if (int % int[i]) return false;
    else return true;
  }
}

// TEST CASES
isPrime(1); // false
isPrime(29); // true
isPrime(30); // false
