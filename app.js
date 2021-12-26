// const { require } = require("yargs");

const yargs = require("yargs");
const cmd = require("./cmd");

let command = yargs.argv._[0];
let item = yargs.argv.item;
let price = yargs.argv.price;

if (command == "add") {
  if (item && price) {
    cmd.add(item, price);
  }
} else if (command == "remove") {
  if (item) {
    cmd.remove(item);
  }
} else if (command == "print") {
  cmd.print();
} else if (command == "priceOf") {
  if (item) {
    cmd.priceOf(item);
  }
} else {
  console.log("ok, this is not exits");
}
