/*

Array Search Methods:-
  1) Array sort()
  2) Array reverse()
  3) Array toSorted()
  4) Array toReversed()
  5) Sorting Objects
  6) Numeric Sort
  7) Random Sort

*/

// 1) Array sort();-
// The sort() method sorts an array alphabetically and it change the original array.

{
    const fruits = ["Banana", "Orange", "Apple", "Mango"];
  
    console.log(fruits.sort());
  
    console.log(fruits);
  }
  
  // 1) Array reverse();-
  // The reverse() method sorts an array alphabetically and it change the original array.
  
  {
    const fruits = ["Banana", "Orange", "Apple", "Mango"];
  
    console.log(fruits.sort());
  
    console.log(fruits.reverse());
  
    console.log(fruits);
  }
  
  // 3) Array toSorted():-
  // it is similiarly to sort() method but difference is that it does not change the original array.
  
  {
    const fruits = ["Banana", "Orange", "Apple", "Mango"];
  
    console.log(fruits.toSorted());
  
    console.log(fruits);
  }
  
  // 4) Array toReversed():-
  // it is similiarly to reverse() method but difference is that it does not change the original array.
  
  {
    const fruits = ["Banana", "Orange", "Apple", "Mango"];
  
    console.log(fruits.toReversed());
  
    console.log(fruits);
  }
  
  // 5) Sorting Objects:-
  {
    const cars = [
      { type: "Volvo", year: 2016 },
      { type: "Saab", year: 2001 },
      { type: "BMW", year: 2010 },
    ];
  
    cars.sort(function (a, b) {
      return a.year - b.year;
    });
  
    for (let a = 0; a < cars.length; a++) {
      console.log(cars[a].type + " " + cars[a].year);
    }
  }
  
  // 6) Numeric Sort:-
  // The sort() method sorts an array numeric.
  
  {
    const points = [40, 100, 1, 5, 25, 10];
  
    points.sort(function (a, b) {
      return a - b;
    });
  
    console.log(points);
  }
  
  // 7) Random Sort:-
  
  {
    const points = [40, 100, 1, 5, 25, 10];
  
    points.sort(function (a, b) {
      return 0.5 - Math.random();
    });
  
    console.log(points);
  }
  