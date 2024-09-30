//  The var statement declares function-scoped or globally-scoped variables, optionally initializing each to a value.

var emailId = "ahmadumarse02@gmail.com";

console.log(emailId);     


var emailId = "ahmad02@gmail.com"       //allowed , not error because its global scope and we change the value of variable.

console.log(emailId)

{
    console.log(emailId)      // allowed , we access in the the curly bracess.
}