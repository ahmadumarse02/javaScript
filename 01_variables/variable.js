// Variables

// var
{
  //  The var statement declares globally-scoped variables, optionally initializing each to a value.

  var emailId = "ahmadumarse02@gmail.com";

  console.log(emailId);

  var emailId = "ahmad02@gmail.com"; //allowed , not error because its global scope and we change the value of variable.

  console.log(emailId);

  {
    console.log(emailId); // allowed , we access in the the curly bracess.
  }
}

// let
{
  let accountId = 1012344;

  // let accountId = 12333;    We cannot be redeclared because const is a block-scoped local variable.

  console.log(accountId);

  {
    let accountId = 101234555;
    console.log(accountId); // we can declard same name variable in the file but in one block(means on {})
  }

  {
    let accountid = 101234555;
    console.log(accountid); // we can declard same name variable in the file but in one block(means on {})
  }

  // console.log(accountid);   not allowed we cannot accessed this variable outside the {}.
}

// const
{
  const number = 1234;

  // const number = 321123;  We cannot be redeclared because const is a block-scoped local variable.

  console.log(number);

  {
    const number = 123409; // we can declard same name variable in the file but in one block(means on {})
    console.log(number);
  }

  {
    const numbers = 123409; // not error we cannot accessed this variable outside the {}.
  }

  //console.log(numbers);  Error
}
