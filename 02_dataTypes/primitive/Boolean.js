/*

Boolean :-
    Boolean values can be one or two values: true and false that representing the the truth value of a logical proposition. 

*/

{
  let x = 10;
  let y = 20;
  let z = Boolean(x > y);
  console.log(z);
}

//   The boolean values of "" (empty string) is false.

{
  let x = "";
  console.log(Boolean(x));
}

//   The boolean values of 0 is false.

{
  let x = 0;
  console.log(Boolean(x));
}

//   The boolean values of 1 is true.

{
  let x = 1;
  console.log(Boolean(x));
}

{
  let x = 10; //Number
  let y = "10"; //String
  console.log(Boolean(x == y));
}

{
  let x = 10; //Number
  let y = "10"; //String
  console.log(Boolean(x === y));
}
