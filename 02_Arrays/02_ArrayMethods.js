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

{
  // 5) pop(): this method is used to remove the last elements of the array.It change the original array by removing the last element and returns that element. If the array is empty, it returns undefined.

  let fruits1 = ["Apple", "Banana", "Mango", "Grappes"];
  let removeElement = fruits1.pop();
  console.log(removeElement);
  console.log(fruits1);
}




{
  //  1) push() :  this method is used to add elements of the array.It change the original array by add the last element and returns that element. 

  let fruits1 = ["Apple", "Banana", "Mango", "Grappes"];
  console.log(fruits1.push("Orange"));
  console.log(fruits1);
  fruits1.push("Pineapple", "Strawberry");
  console.log(fruits1);
}
