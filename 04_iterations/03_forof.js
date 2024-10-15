// for of

//array

const arr = [1, 2, 3, 4, 5];

for (const num of arr) {
  console.log(num);
}

//string

const str = "Hello World";

for (const i of str) {
  console.log(i);
}

// object

const person = { name: "John", age: 30, city: "New York" };

for (const [key, value] of Object.entries(person)) {
  console.log(`${key}: ${value}`);
}
