//for loop

for (let index = 0; index <= 10; index++) {
  const element = index;
  console.log(element);
}

//for loop and if condition
for (let index = 0; index < 10; index++) {
  const element = index;
  if (element == 5) {
    console.log("5 is best number");
  }
  console.log(element);
}

//nested loop

for (let i = 1; i <= 10; i++) {
  console.log(`outer loop: ${i}`);
  for (let j = 1; j <= 10; j++) {
    console.log(`inner loop: ${j} and outer loop ${i}`);
    console.log(i + " * " + j + " = " + i * j);
  }
}

//Array

const array = ["ahmad", "umar", "umair", "afzal"];

for (let index = 0; index < array.length; index++) {
  const element = array[index];
  console.log(element);
}

// break and continue

for (let i = 1; i <= 20; i++) {
  if (i == 5) {
    console.log("detected 5");
    continue;
  }
  console.log(`value of i is ${i}`);
}
