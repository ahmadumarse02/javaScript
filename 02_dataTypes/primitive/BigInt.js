// BigInt variables are stored big integer values that are too big to be represented by normal JavaScript.

let x = 10000000000000000000000000;
console.log(x);

let y = 1000000n;
console.log(y);

// we can only store the Integer values and we cannot store the float values.

let z = 100000000000000000000000000.4854444444;
console.log(z);

// we cannot solve any arithmetics operation with number and BigInt.
// we can only apply arithmetics operation on two BigInt values.
