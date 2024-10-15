const array = ["javaScript", "c++", "ruby", "python", "TypeScript"];

array.map((item) => console.log(item));

const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const mynum = num.map((number) => number * 10)

// const mynum = num.map((number) => number * 10).map((number) => number+2)

const mynum = num
  .map((number) => number * 10)
  .map((number) => number + 2)
  .filter((number) => number >= 50);

console.log(mynum);
