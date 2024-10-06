//  Array Methods:-

{
  //  1) letgth(): this methods is used to return the length of the Array.

  let fruits = ["Apple", "Banana", "Mango", "Grappes"];

  console.log(fruits.length);
}


{
  // 2) toString(): this method is used to convert array into the string seprated by comma.

  let fruits1 = ["Apple", "Banana", "Mango", "Grappes"];

  console.log(fruits1.toString())

}

{
  // 3) at(): this method is used to access the an elements at a specified index.

  let fruits1 = ["Apple", "Banana", "Mango", "Grappes"];

  console.log(fruits1.at(2))
}

{
  // 4) join(): this method is used to join the array elements into a single string with a specified separator between each elements.

  let fruits1 = ["Apple", "Banana", "Mango", "Grappes"];

  console.log(fruits1.join())
  console.log(fruits1.join('-'))
}
