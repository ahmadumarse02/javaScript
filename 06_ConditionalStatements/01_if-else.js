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
