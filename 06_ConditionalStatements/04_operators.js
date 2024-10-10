/*
Nullish opreator:-
    The nullish coalescing (??) operator is a logical operator 
    that returns its right-hand side operand when its left-hand side 
    operand is null or undefined, and otherwise returns its left-hand side operand.
*/

let val1;
val1 = 3 ?? 10

console.log(val1)


let val2;
val2 = null ?? 10

console.log(val2)


let val3;
val3 = undefined ?? 10

console.log(val3)



// Terniary Opreator

// syntax  condition ? true : false

const num = 100

num <= 80 ? console.log("less than 80") : console.log("more than 80")