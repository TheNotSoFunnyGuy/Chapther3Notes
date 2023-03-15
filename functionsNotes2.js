//1
// function findAreaOfRectangle(length, width){
//     console.log(`The area of the rectangle is ${length * width}.`);
// }
//
// findAreaOfRectangle(4, 8)

//2
// function findAreaOfCircle(radius){
//     console.log(`the area of the circle is ${radius * 3.14}.`)
// }
//
// findAreaOfCircle(6)

//3
// function findMin(x, y){
//     if (x < y){
//         console.log(`The smallest number is ${x}.`);
//     }else {
//         console.log(`The smallest number is ${y}.`);
//     }
// }
//
// findMin(82, 35)

//4
// function checkEquality(x, y){
//     if (x == y){
//         console.log(`${x} and ${y} are equal`);
//     }else {
//         console.log(`${x} and ${y} are not equal`);
//     }
// }
//
// checkEquality(32, 32);

//5
// function calculateLargestRectangle(length1, width1, length2, width2){
//     if (length1 * width1 > length2 * width2){
//         console.log(`The rectangle with a length of ${length1}, a width of ${width1}, and an area of ${length1 * width1} is bigger.`);
//     }else {
//         console.log(`The rectangle with a length of ${length2}, a width of ${width2}, and an area of ${length2 * width2} is bigger.`);
//     }
// }
//
// calculateLargestRectangle(20, 40, 60, 100);

//6
// function charityCollection(x, y, z){
//     if (x + y + z > 1000) {
//         console.log(`The money collected will be doubled to $${(x + y + z) * 2} and given to the charity.`)
//     } else {
//         console.log(`The charity will receive $${x + y + z}.`)
//     }
// }
//
// charityCollection(5, 40, 60);

//7
// function stateOfMatter(temp){
//     if (temp <= 35){
//         console.log(`The water will become a solid.`)
//     }else if (temp >= 200 ){
//         console.log(`The water will become a gas.`)
//     }else {
//         console.log(`The water will remain a liquid.`)
//     }
// }
//
// stateOfMatter(60);

//8
// function findMaximumValue(x, y, z){
//     if (x > y && x > z){
//         console.log(`${x} is bigger than ${y} and ${z}.`)
//     }else if (y > z && y > x){
//         console.log(`${y} is bigger than ${x} and ${z}.`)
//     }else {
//         console.log(`${z} is bigger than ${y} and ${x}.`)
//     }
// }
//
// findMaximumValue(10, 50, 6);

//9
// function findMinimumValue(x, y, z){
//     if (x < y && x < z){
//         console.log(`${x} is smaller than ${y} and ${z}.`)
//     }else if (y < z && y < x){
//         console.log(`${y} is smaller than ${x} and ${z}.`)
//     }else {
//         console.log(`${z} is smaller than ${y} and ${x}.`)
//     }
// }
//
// findMinimumValue(10, 50, 100);

//10
// function updatedCharityCollection(x, y, z){
//     if (x + y + z > 1000 && x + y + z < 2000) {
//         console.log(`The money collected will be doubled to $${(x + y + z) * 2} and given to the charity.`)
//     } else if (x + y + z > 2000) {
//         console.log(`The charity will receive ${x + y + z + 2000}.`)
//     } else if (x + y + z < 1000){
//         console.log(`The money collected will get an additional $100 making the new total $${x + y + z + 100}.`)
//     }
// }
//
// updatedCharityCollection(2000, 5, 60);