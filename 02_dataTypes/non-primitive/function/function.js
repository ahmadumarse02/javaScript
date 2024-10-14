/*

function:-
    function is a block of that performs a perticular tasks.
    A function is executed when something invoke it(calls it).
    A function is defined with function keyword , followed by a name , followed by praentheses().

Syntax:-
    function name() {
        code to be executed 
    }
*/

let x = myFunction(4, 3); // we pass the arguments.

function myFunction(a, b) {
  //we pass the parameters.
  return a * b;
}

console.log(x);

//Objects
const user1 = {
  userName: "Ahmad",
  rollNo: 232654,
  class: "BS(SE)",
};

function userInfo(userObj) {
  console.log(
    `UserName is ${userObj.userName} and rollNumber is ${userObj.rollNo} and class name is ${userObj.class}`
  );
}

userInfo(user1);

//Array

const myArray1 = [200, 300, 400, 500];

function myFunction(getElements) {
  return getElements[2];
}

console.log(myFunction(myArray1));


// Scope

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


//arroe functions

//Objects

const user = {
    username: 'AHmad',
    age: 30,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`) // when we reffer to the current context we use this keyword
        console.log(this) // it return all current context
    }
}

user.welcomeMessage()

console.log(this) // it return the empty braces


//Function

function one() {
    let user = "AHmad Umar"
    console.log(this.user) // it return empty braces and it does not work in function and it work in objects
}

one()


// Arrow Function

const two = () => {
    let user = "AHmad Umar"
    console.log(this.user) // it return empty braces and it does not work in function
}

two()

const addTwo = (num1 , num2) => {
    return num1 + num2
}

console.log(addTwo(2 , 3))

// If we are using braces and we use return keyword.

const addThree = (num1 , num2 , num3) => (num1 + num2 + num3)

console.log(addThree(2 , 3, 4))

// const addThree = (num1 , num2 , num3) => num1 + num2 + num3

// console.log(addThree(2 , 3, 4))

const myArray = [1 , 2 , 3 , 4 , 5 , 6]

myArray.forEach((index)  => (console.log(index)));