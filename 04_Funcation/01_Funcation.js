/*

Funcation:-
    funcation is a block of that performs a perticular tasks.
    A funcation is executed when something invoke it(calls it).
    A funcation is defined with funcation keyword , followed by a name , followed by praentheses().

Syntax:-
    funcation name() {
        code to be executed 
    }
*/

let x = myFunaction(4, 3); // we pass the arguments.

function myFunaction(a, b) {
  //we pass the parameters.
  return a * b;
}

console.log(x);

//Objects
const user = {
    userName: "Ahmad",
    rollNo: 232654,
    class: "BS(SE)",
}

function userInfo(userObj){
    console.log(`UserName is ${userObj.userName} and rollNumber is ${userObj.rollNo} and class name is ${userObj.class}`)
}

userInfo(user)

//Array

const myArray = [200 , 300 , 400 , 500]

function myFunction(getElements){
    return getElements[2]
}

console.log(myFunction(myArray))

                  