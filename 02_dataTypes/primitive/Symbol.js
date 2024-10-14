// Symbol is a built-in-funcation whose constructor returns a symbol called a Symbol value that generated a unique.
//   Symbol are often used to add a unique property key to an object.

{
  let id = Symbol("Hello");
  console.log(id);
}

// when we show the description of the symbol we use description method and data type of Symbol description is string.
{
  {
    let id = Symbol("Hello");
    console.log(id.description);
  }
}

{
  let age = Symbol();
  let user = {
    name: "AHmad Umar",
    class: "Bs(SE)",
    [age]: "25",
  };

  for (let key in user) {
    console.log(key);
  }

  console.log(user);
  console.log(user[age]);
  console.log(JSON.stringify(user)); // When we convert into JSON then symbol was not showed.
}
