const fs = require("fs");

const readFile = (filename) => {
  try {
    return JSON.parse(fs.readFileSync("grocerylist.json"));
  } catch (e) {
    return [];
  }
};

const add = (item, price) => {
  let grocerylist = readFile('grocerylist.json');
let index = grocerylist.findIndex((x) => x.item == item);
  if (index == -1) {
    grocerylist.push({ item, price });
    console.log(grocerylist);
  } else {
    grocerylist[index].price += price;
  }

  fs.writeFileSync("grocerylist.json", JSON.stringify(grocerylist));
};

const remove = (item) => {
  let grocerylist = readFile("grocerylist.json");
  const filteredList = grocerylist.filter((x) => x.item != item);
  fs.writeFileSync("grocerylist.json", JSON.stringify(filteredList));
};

const print = () => {
  let grocerylist = readFile('grocerylist.json');
  console.log(grocerylist);
};
const priceOf = (item) => {
 let grocerylist = readFile('grocerylist.json');
  let index = grocerylist.findIndex((x) => x.item == item);
  if (index != -1) {
    console.log(`price of ${item} is ${grocerylist[index].price}`);
  }
};

module.exports = {
  add,
  remove,
  print,
  priceOf,
};
