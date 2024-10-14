/*

JavaScript Array Search:-
  We can search for elements and index of elements is several ways depending on our needs.

Array Search Methods:-
  1) Array indexOf()
  2) Array lastIndexOf()
  3) Array includes()
  4) Array find()
  5) Array findIndex()
  6) Array findLast()
  7) Array findLastIndex()

*/

// 1) Array indexOf():-
// The indexOf() method searches an array for an elements value and return its position.If the value is not found , it return the -1.
// Syntax:   array.indexOf(item, start)

{
    const fruits = ["apple", "banana", "orange", "apple"];
    console.log(fruits.indexOf("apple"));
  
    console.log(fruits.indexOf("Grapes")); // it return the -1 value because the value is not found in the array.
  
    console.log(fruits.indexOf("apple", 1)); // it return the 3 index.
  }
  
  // 2) Array lastIndexOf():-
  // It work similar to the above but the difference is that it return the position of the last occurrence of a specified elements.
  
  {
    const fruits = ["apple", "banana", "orange", "apple"];
    console.log(fruits.lastIndexOf("apple")); // it return the 3 index.
  
    console.log(fruits.lastIndexOf("Grapes")); // it return the -1 value because the value is not found in the array.
  
    console.log(fruits.lastIndexOf("apple", 1)); // it return the 0index.
  }
  
  // 3) Array includes():-
  // This method is allow you to check the elements is present in an array.
  
  {
    const fruits = ["apple", "banana", "orange", "apple"];
  
    console.log(fruits.includes("apple")); //true
  
    console.log(fruits.includes("Grapes")); // false
  }
  
  // 4) Array find():-
  // The find() method return the value of the first array elements that passes a test funcation.
  
  {
    const number = [1, 2, 3, 28, 34, 43];
  
    let find = number.find(myFuncation);
  
    function myFuncation(value) {
      return value > 18;
    }
  
    console.log(find);
  }
  
  // 5) Array findIndex():-
  // The findIndex() method return the index of the first array elements that passes a test funcation.
  
  {
    const number = [1, 2, 3, 28, 34, 43];
  
    let find = number.findIndex(myFuncation);
  
    function myFuncation(value) {
      return value > 18;
    }
  
    console.log(find);
  }
  
  // 6) Array findLast():-
  // The findLast() method return the value of the last array elements that passes a test funcation.
  
  {
    const number = [1, 2, 3, 28, 34, 4];
  
    let find = number.findLast(myFuncation);
  
    function myFuncation(value) {
      return value > 18;
    }
  
    console.log(find);
  }
  
  // 7) Array findLastIndex():-
  // The findLastIndex() method return the index of the last array elements that passes a test funcation.
  
  {
    const number = [1, 2, 3, 28, 34, 4];
  
    let find = number.findLastIndex(myFuncation);
  
    function myFuncation(value) {
      return value > 18;
    }
  
    console.log(find);
  }