const readLine = require('readline-sync')

//1
// function nameSwapper(){
//     let first = readLine.question("first name:");
//     let last = readLine.question("Last name:");
//     return (`${last}, ${first}`)
// }
// console.log(nameSwapper());

//2
// function numberGenerator(){
//     let num1 = readLine.question("Enter a digit: ");
//     let num2 = readLine.question("Enter a digit: ");
//     return (`Your number is ${num1}${num2}`)
// }
// console.log(numberGenerator());

//3
// function averageTemperature(){
//     let temp1 = readLine.question("Temperature 1: ");
//     let temp2 = readLine.question("Temperature 2: ");
//     let temp3 = readLine.question("Temperature 3: ");
//     let temp4 = readLine.question("Temperature 4: ");
//     let temp5 = readLine.question("Temperature 5: ");
//     let temp6 = readLine.question("Temperature 6: ");
//     let temp7 = readLine.question("Temperature 7: ");
//     return ((temp1 + temp2 + temp3 + temp4 + temp5 + temp6 + temp7) / 7).toFixed(2);
// }
// console.log(averageTemperature());

//4
function charityCollectionRevisited(x, y, z){
    let people = readLine.question("How many people are raising money: ");
    if (x + y + z > 1000 && x + y + z < 2000) {
        console.log(`The money collected will be doubled to $${(x + y + z) * 2} and given to the charity.`)
    } else if (x + y + z > 2000) {
        console.log(`The charity will receive ${x + y + z + 2000}.`)
    } else if (x + y + z < 1000){
        console.log(`The money collected will get an additional $100 making the new total $${x + y + z + 100}.`)
    }
}

charityCollectionRevisited(2000, 5, 60);
