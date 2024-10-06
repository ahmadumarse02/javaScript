// Adding Arrary Elements

// Modifying an Array
{
  //  push

  let fruits1 = ["Apple", "Banana", "Mango", "Grappes"];
  console.log(fruits1.push("Orange"));
  console.log(fruits1);
  fruits1.push("Pineapple", "Strawberry");
  console.log(fruits1);
}

{
  // unshift(): This method add one or more elements begining of an array and return the new lenght of array.

  let fruits1 = ["Apple", "Banana", "Mango", "Grappes"];
  console.log(fruits1.unshift("Orange"));
  console.log(fruits1);
  fruits1.unshift("Pineapple", "Strawberry");
  console.log(fruits1);
}
