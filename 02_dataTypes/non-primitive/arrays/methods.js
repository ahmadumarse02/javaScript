//  Array Methods:-

{
    //  1) letgth(): this methods is used to return the length of the Array.
  
    let fruits = ["Apple", "Banana", "Mango", "Grappes"];
  
    console.log(fruits.length);
  }
  
  {
    // 2) toString(): this method is used to convert array into the string seprated by comma.
  
    let fruits1 = ["Apple", "Banana", "Mango", "Grappes"];
  
    console.log(fruits1.toString());
  }
  
  {
    // 3) at(): this method is used to access the an elements at a specified index.
  
    let fruits1 = ["Apple", "Banana", "Mango", "Grappes"];
  
    console.log(fruits1.at(2));
  }
  
  {
    // 4) join(): this method is used to join the array elements into a single string with a specified separator between each elements.
  
    let fruits1 = ["Apple", "Banana", "Mango", "Grappes"];
  
    console.log(fruits1.join());
    console.log(fruits1.join("-"));
  }
  
  {
    // 5) pop(): this method is used to remove the last elements of the array.It change the original array by removing the last element and returns that element. If the array is empty, it returns undefined.
  
    let fruits1 = ["Apple", "Banana", "Mango", "Grappes"];
    let removeElement = fruits1.pop();
    console.log(removeElement);
    console.log(fruits1);
  }
  
  {
    //  6) push() :  this method is used to add elements of the array.It change the original array by add the last element and returns that element.
  
    let fruits1 = ["Apple", "Banana", "Mango", "Grappes"];
    console.log(fruits1.push("Orange"));
    console.log(fruits1);
    fruits1.push("Pineapple", "Strawberry");
    console.log(fruits1);
  }
  
  {
    //  7) unshift(): This method add one or more elements begining of an array and return the new lenght of array.
  
    let fruits1 = ["Apple", "Banana", "Grappes"];
    console.log(fruits1);
    fruits1.unshift("Pineapple", "Strawberry");
    console.log(fruits1);
  }
  
  {
    // 8) shift(): this method is used to remove the element from the array and change the array.
  
    let fruits1 = ["Apple", "Banana", "Grappes"];
  
    fruits1.shift();
  
    console.log(fruits1);
  }
  
  {
    // 9) delete(): this method is used to remove the element of the array and it does not change the orignal array delete value is undefined.
  
    let fruits1 = ["Apple", "Banana", "Grappes"];
    delete fruits1[1];
    console.log(fruits1);
  }
  
  {
    // 10) concat(): this method add the arrays and change the original array.
  
    const myGirls = ["Cecilie", "Lone"];
    const myBoys = ["Emil", "Tobias", "Linus"];
    console.log(myGirls.concat(myBoys));
  }
  
  {
    /* 11) copyWithin():
  
    The copyWithin() method overwrites the existing values.
  
    The copyWithin() method does not add items to the array.      
  
    The copyWithin() method does not change the length of the array.  
  
    copyWithin(target, start)
  
    copyWithin(target, start, end)
  
    */
  
    let fruits1 = ["Apple", "Banana", "Grappes", "orange"];
  
    console.log(fruits1.copyWithin(1, 0));
  
    console.log(fruits1.copyWithin(2, 0, 3));
  }
  
  {
    // 12) flat(): The flat() method in JavaScript is used to flatten nested arrays.
    //     It creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.
  
    const myArr = [
      [1, 2],
      [3, 4],
      [5, 6],
    ];
    const newArr = myArr.flat();
    console.log(newArr);
    console.log(myArr); // it does not change the original array.
  }
  
  {
    // 13) slice(): this method is used to slices out a piece of an array into a new array and it does not change the original array.
  
    let fruits1 = ["Apple", "Banana", "Grappes", "orange"];
    let slicefruits = fruits1.slice(2);
    console.log(slicefruits);
    console.log(fruits1);
  }
  
  {
    // 14) splice(): this method is used to add and remove and change the original array.
    {
      let fruits1 = ["Apple", "Banana", "Grappes", "orange", "mango"];
      let splicefruits = fruits1.splice(2, 2);
      console.log(splicefruits);
      console.log(fruits1);
    }
    {
      let fruits1 = ["Apple", "Banana", "Grappes"];
      let splicefruits = fruits1.splice(2, 2, "mango", "orange");
      console.log(splicefruits);
      console.log(fruits1);
    }
  }
  