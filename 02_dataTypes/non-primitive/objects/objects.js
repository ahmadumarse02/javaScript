/*

JavaScript objects:-
    JavaScript objects are collections of key-value pairs, where each key is a string (or symbol) 
    and its value can be any data type, including another object, array, function, etc. 
    They are fundamental in JavaScript and are used to store and manage data in a structured way.

*/

// Create an Object: two methods of creating the objects.

{
  const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    isStudent: false,
  };
  console.log(person);
}

{
  const person = new Object();
  (person.firstName = "John"),
    (person.lastName = "Doe"),
    (person.age = 30),
    (person.isStudent = false),
    console.log(person);
}

// Accessing Object Properties

{
  {
    const person = {
      firstName: "John",
      lastName: "Doe",
      age: 30,
      isStudent: false,
    };
    console.log(person.firstName);
    console.log(person["age"]);
  }
}

//properties

// Adding New Properties

{
  const person = {
    firstname: "John",
    lastname: "Doe",
    age: 50,
    eyecolor: "blue",
  };

  person.nationality = "English";

  console.log(person);
}

// Delete Properties

{
  const person = {
    firstname: "John",
    lastname: "Doe",
    age: 50,
    eyecolor: "blue",
  };

  person.nationality = "English";

  delete person.age;

  console.log(person);
}
