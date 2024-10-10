// Global Scope
let a = 10;
const b = 20;
var c = 30;

if (true) {
  // Block Scoped
  let a = 1;
  const b = 2;
  var c = 3;
  console.log(a);
  console.log(b);
  console.log(c);
}

console.log(a);
console.log(b);
console.log(c);

function one() {
  const username = "Ahmad";

  function two() {
    const rollNo = 10;
    console.log(rollNo);
    console.log(username); // Allowed
  }
  //  console.log(rollNo); // Not Allowed
  two();
}

one();

console.log(addOne(4)); //WE can access addOne() before initialization
function addOne(num) {
  return num + 1;
}

//console.log(addOne(4)) WE cannot access addOne() before initialization
function addTwo(num) {
  return num + 2;
}

console.log(addTwo(10));
