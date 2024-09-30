const number = 1234;

// const number = 321123;  We cannot be redeclared because const is a block-scoped local variable.

console.log(number)

{
    const number = 123409; // we can declard same name variable in the file but in one block(means on {})
    console.log(number); 
}

{
    const numbers = 123409; // not error we cannot accessed this variable outside the {}.
}

//console.log(numbers);  Error