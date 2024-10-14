// IIFE stands for Immediately Invoked Function Expressions are function that is excuted immediately after they are defined.

// Simple function
(function one() {
    console.log("ahmad umar");
  })();
  
  // arrow function
  (() => console.log("Ahmad Umar"))();
  
  var counter = (function () {
    var count = 0;
  
    return {
      increment: function () {
        count++;
      },
      decrement: function () {
        count--;
      },
      getCount: function () {
        return count;
      },
    };
  })();
  
  // Increment the counter
  counter.increment();
  counter.increment();
  counter.increment();
  counter.increment();
  counter.increment();
  
  console.log(counter.getCount()); // Output: 3
  
  // Trying to access the private count variable directly
  console.log(counter.count); // Output: undefined (cannot access private variable)
  