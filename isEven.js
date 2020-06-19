"use strict";

let main = function () {
  const N = 9;

  function isOdd(N) {
    if (!(N % 2 == 0)) {
      console.log("isOdd:", true);
    }
  }
  function isEven(N) {
    if (N % 2 == 0) {
      console.log("isEven:", true);
    }
  }
  if (isOdd(N)) {
    console.log("Weird");
  }
  if (isEven(N)) {
    console.log("Even Weirder");
  } else if (N == isEven && N > 2 && N <= 5) {
    return console.log("Not Weird");
  } else if (N == isEven && N > 6 && N <= 20) {
    return console.log("Weird");
  } else if (N == isEven && N > 20) {
    return console.log("Not Weird");
  } else console.log("something is amiss");
};

main();
