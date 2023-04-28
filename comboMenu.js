const readline = require('readline-sync');


const sandwichOptions = {
    chicken: 5.25,
    beef: 6.25,
    tofu: 5.75
};

let sandwichChoice = readline.question("What type of sandwich would you like? (beef, chicken, or tofu): ");

let sandwichPrice = sandwichOptions[sandwichChoice.toLowerCase()];
console.log(`You selected a ${sandwichChoice} sandwich for ${sandwichPrice.toFixed(2)}`);

const beverageOptions = {
    small: 1.00,
    medium: 1.75,
    large: 2.25
};

let beverageChoice = readline.question("Would you like a beverage? (yes/no): ");
let beverage = 0;
let beverageSize = "no"
let beveragePrice = 0
if (beverageChoice.toLowerCase() === "yes") {
    beverageSize = readline.question("What size beverage would you like? (small, medium, or large): ");
    beveragePrice = beverageOptions[beverageSize.toLowerCase()];
    console.log(`You selected a ${beverageSize} beverage for ${beveragePrice.toFixed(2)}`);
}
else {
    beverageSize = "no"
    beveragePrice = 0
}

let total1 = sandwichPrice + beveragePrice;

console.log(`${sandwichChoice} sandwich: ${sandwichPrice.toFixed(2)}`);
if (beverageChoice.toLowerCase() === "yes") {
    console.log(`${beverageSize} beverage: ${beveragePrice.toFixed(2)}`);
}else{
    console.log("No beverage")
}
console.log(`Your total is ${total1} dollars`)




// const friesOptions = {
//     small: 1.00,
//     medium: 1.50,
//     large: 2.00
// };
//
// let friesChoice = readline.question("would you like fries? (yes/no): ");
//
// let friesPrice = 0;
// if (friesChoice.toLowerCase() === "yes"){
//     let friesSize = readline.question("What size fries would you like? (small, medium, or large): ");
//     friesPrice = friesOptions[friesSize.toLowerCase()];
// }
//
//     if (friesSize.toLowerCase() === "small"){
//         let megaFries = readline.question("Would you like to mega-size your fries? (yes/no): ");
//         if (megaFries.toLowerCase() === "yes"){
//             friesPrice = friesOptions["large"];
//
//         }
//     }
//
//
// const ketchupPackPrice =0.25;
//
// let ketchupPackets = readline.question("How many ketchup packets would you like?");
// let ketchupPrice = ketchupPackets * ketchupPackPrice;
//
// const taxRate = 0.07;
// const ComboDiscount = 1.00;
//
//
// let subtotal = sandwichPrice + beveragePrice + friesPrice + ketchupPrice;
// let comboDiscount = 0;
// if (sandwichPrice > 0 && beveragePrice > 0 && friesPrice > 0){
//     subtotal -= ComboDiscount;
//     comboDiscount = ComboDiscount;
// }
//
// let tax = subtotal * taxRate;
// let total = subtotal + tax;
//
// console.log("------------------------");
// console.log(`${sandwichChoice} sandwich: ${sandwichPrice.toFixed(2)}`);
// console.log(`${beverageSize} beverage: ${beveragePrice.toFixed(2)}`);
// console.log(`${friesSize} fries: ${friesPrice.toFixed(2)}`);
// console.log(`${ketchupPackets} Ketchup packets: ${ketchupPrice.toFixed(2)}`);
// console.log("------------------------");
// // console.log(`Combo discount: ${comboDiscount.toFixed(2)}`);
// console.log(`${tax.toFixed(2)}`);
// console.log(`Subtotal: ${total.toFixed(2)}`);
// console.log("------------------------");