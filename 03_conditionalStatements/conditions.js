// if-else-if

{
  let temp = 27;

  if (temp == 25) {
    console.log("tempereture is less than 50");
  } else {
    console.log("tempereture is greater than 25");
  }

  const score = 100;
  if (score) {
    const power = "fly";
    console.log(`user power ${power}`); //allowed and access
  }
  //console.log(`user power ${power}`); // not allowed and cannot access

  const balance = 1000;

  if (balance < 500) {
    console.log("less than 500");
  } else if (balance < 750) {
    console.log("less than 750");
  } else if (balance < 900) {
    console.log("less than 900");
  } else {
    console.log("greater than 1000");
  }

  const userLoggedIn = true;

  const debitCard = true;

  const loggedInGoogle = true;

  const loggedInEmail = true;

  if (userLoggedIn && debitCard) {
    console.log("Allow to buy course");
  } else {
    console.log("not Allow to buy course");
  }

  if (loggedInGoogle || loggedInEmail) {
    console.log("user loggedIn");
  }
}

//switch

{
  // Syntax

  // switch (key) {
  //     case value:

  //         break;

  //     default:
  //         break;
  // }

  const month = 4;

  switch (month) {
    case 1:
      console.log("January");
      break;
    case 2:
      console.log("February");
      break;
    case 3:
      console.log("march");
      break;
    case 4:
      console.log("april");
      break;
    case 5:
      console.log("may");
      break;

    default:
      console.log("Invalid Input");
      break;
  }
}

//Nullish opreator

{
  /*
Nullish opreator:-
    The nullish coalescing (??) operator is a logical operator 
    that returns its right-hand side operand when its left-hand side 
    operand is null or undefined, and otherwise returns its left-hand side operand.
*/

  let val1;
  val1 = 3 ?? 10;

  console.log(val1);

  let val2;
  val2 = null ?? 10;

  console.log(val2);

  let val3;
  val3 = undefined ?? 10;

  console.log(val3);
}

// Terniary Opreator

{
  // syntax  condition ? true : false

  const num = 100;

  num <= 80 ? console.log("less than 80") : console.log("more than 80");
}