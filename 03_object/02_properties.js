// Adding New Properties

{
  const person = {
    firstname: "John",
    lastname: "Doe",
    age: 50,
    eyecolor: "blue",
  };

  person.nationality = "English";

  console.log(person)
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
  