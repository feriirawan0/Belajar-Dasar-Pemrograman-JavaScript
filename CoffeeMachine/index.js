// console.log("Menyalakan mesin kopi");
// console.log("Menggiling biji kopi");
// console.log("Memanaskan air");
// console.log("Mencampurkan air dan kopi");
// console.log("Menuangkan kopi ke dalam gelas");
// console.log("Menuangkan susu ke dalam gelas");
// console.log("Kopi Anda sudah siap!");

// const coffeeStock = require("./state");
// const { coffeeStock, isCoffeeMachineReady } = require("./state");
// const makeCoffee = (type, miligrams) => {
//   if (coffeeStock[type] >= miligrams) {
//     console.log("Kopi berhasil dibuat!");
//   } else {
//     console.log("Biji kopi habis!");
//   }
// };

// makeCoffee("robusta", 80);

// ES6 Module
import { coffeeStock as stock, isCoffeeMachineReady } from "./state.js";
console.log(stock);
console.log(isCoffeeMachineReady);
// import { coffeeStock } from "./state.js";
// const displayStock = (stock) => {
//   for (const type in stock) {
//     console.log(type);
//   }
// };

// displayStock(stock);
