let accountId = 1012344;

// let accountId = 12333;    We cannot be redeclared because const is a block-scoped local variable.

console.log(accountId);


{
    let accountId = 101234555;
    console.log(accountId);     // we can declard same name variable in the file but in one block(means on {})
}



{
    let accountid = 101234555;
    console.log(accountid);     // we can declard same name variable in the file but in one block(means on {})
}

// console.log(accountid);   not allowed we cannot accessed this variable outside the {}.