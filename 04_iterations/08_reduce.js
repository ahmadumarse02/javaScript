const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let total = array.reduce((acc, currentval) => {
  console.log(`acc: ${acc} and current value: ${currentval}`);
  return acc + currentval;
}, 0);

console.log(total);

const shoppingCard = [
  {
    item: "js course",
    price: 3000,
  },
  {
    item: "python course",
    price: 1000,
  },
  {
    item: "c++ course",
    price: 2000,
  },
  {
    item: "c course",
    price: 3300,
  },
  {
    item: "TypeScript course",
    price: 2000,
  },
  {
    item: "ruby course",
    price: 3000,
  },
];

let price = shoppingCard.reduce((acc, item) => acc + item.price, 0);

console.log(price);
