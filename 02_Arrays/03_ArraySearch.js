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
    const fruits = ["apple", "banana", "orange" , "apple"];
    console.log(fruits.indexOf('apple'))

    console.log(fruits.indexOf('Grapes')) // it return the -1 value because the value is not found in the array.

    console.log(fruits.indexOf('apple' , 1)) // it return the 3 index.
}