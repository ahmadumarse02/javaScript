// for each loop

const array = ["javaScript", "c++", "ruby", "python"];

//using simple function
// array.forEach(function (val) {
//   console.log(val);
// });

// array.forEach((val) => (console.log(val)));

// array.forEach((val) => console.log(val));

array.forEach((val) => {
  //console.log(val);
});

function copy(item, index, arr) {
  console.log(item, index, arr);
}

array.forEach(copy);

// Array and objects

const coding = [
  {
    languageName: "javascript",
    languageFileName: "js",
  },
  {
    languageName: "java",
    languageFileName: "java",
  },
  {
    languageName: "python",
    languageFileName: "py",
  },
];

coding.forEach((item) => {
  console.log(item.languageName);
});

const array1 = ["javaScript", "c++", "ruby", "python", "TypeScript"];

const values = array1.forEach(function (val) {
  console.log(val);
  return val;
});

console.log(values);

// Foreach loop does return the value it return undefined
