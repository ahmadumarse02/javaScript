// Number is a primitive data type . Number can be written with and without decimals.

let number = 1000;

console.log(number);

let decimal = 12.32;

console.log(decimal);
console.log(typeof decimal);

// Adding two Number
{
  const x = 10;
  const y = 20;
  const z = x + y;

  console.log(z); // outpunt is a number
}

// Adding number and String

{
  const x = 10;
  const y = "20";
  const z = x + y;

  console.log(z); // outpunt is a 1020 and type of output is string
}

/* JavaScript Number Methods

1) toString() : Returns a number as a String
2) toExponential() : Returns a Number written in Exponential notation
3) toFixed() : Returns a number written with a number of decimals
4) toPrecision() : Returns a number written with a specified lenght

*/

// 1) toString()

{
  let x = 120;
  console.log(typeof x.toString()); // change the typeof Number into String
  console.log(x);
}

// 2) toExponential()

{
  let x = 1.80099;
  console.log(x.toExponential(2));
  console.log(typeof x.toExponential(2)); // When we convert the number into Exponential then the type of number change and convert into the String
  console.log(x);
}

// 3) toFixed()

{
  let x = 9.0987;
  console.log(x.toFixed(0)); // output is 9
  console.log(x.toFixed(1)); // output is 9.1
  console.log(x.toFixed(2)); // output is 9.10
  console.log(x.toFixed(3)); // output is 9.099
  console.log(x.toFixed(4)); // output is 9.0987
  console.log(x.toFixed(5)); // output is 9.09870
  console.log(typeof x.toFixed(0)); // type is String
}

// 4) toPrecision()

{
  {
    let x = 9.0987;
    console.log(x.toPrecision()); // output is 9.0987
    console.log(x.toPrecision(1)); // output is 9
    console.log(x.toPrecision(2)); // output is 9.10
    console.log(x.toPrecision(3)); // output is 9.10
    console.log(x.toPrecision(9)); // output is 9.09870000
    console.log(typeof x.toPrecision()); // Type is String
  }
}
