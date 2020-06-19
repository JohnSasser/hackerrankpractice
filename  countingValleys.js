"use strict";

let n = 8;
let s = "U, D, D, U, D, U, U, U, D";

function countingValleys(n, s) {
let uphill = '';
let downhill = '';
let numberOfValleysTraversed;

for (let i = 0; i <= n; i++) {
    if (s[i] === "U") {
        uphill + "/";
    } if (s[i] === "D") {
      // escape backslash by using \\ so .js doesn't move to the next line.
        downhill + "\\";
    }
}
console.log(`uphill: ${uphill} || downhill: ${downhill}`)
}

countingValleys();