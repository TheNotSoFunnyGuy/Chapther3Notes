//create an object of key-value pairs
let contacts = {
    bff: 1234567,
    mom: 5555555,
    bro: 9876543
}

//log all
console.log(contacts);

//access a specific entry by its key (name)
console.log(contacts.bff);

//can't access if the key doesn't exist
console.log(contacts.myself);

//add a new entry
contacts.sis = 3456677;
console.log(contacts);

//update an entry
contacts.bff = 1111111;
console.log(contacts)

//delete an entry
delete contacts.mom;
console.log(contacts);

//is there a key called ___ in there?
console.log("bff" in contacts);
console.log("myself" in contacts);

//objects are like arrays - pass by reference (location) not by value
//notice the following
let a = {
    value:20
};
let b = a;
let c = {
    value:20
};

console.log(a==b);
console.log(a==c);
console.log(b==c);

console.log(a.value == c.value);

//create 5 objects below:
let dog = {
    dogName: 'Zelda',
    breed: 'Terrier',
    age: 9,
    size: 'medium',
    barks: true
}
console.log(dog);

let ant = {
    type: 'Fire ant',
    legs: 6,
    size: 'tiny',
    bites: true,
    color: 'red'
}
console.log(ant);

let house = {
    color: 'gray',
    size: 'big',
    garage: true,
    fence: true,
    pet: false
}
console.log(house);

let car = {
    color: 'red',
    gasPowered: false,
    type: 'tesla',
    fast: true,
    loud: false
}
console.log(car);

let phone = {
    color: 'white',
    type: 'iphone',
    gigs: '70',
    size: 'medium',
    model: 'Iphone 7'
}
console.log(phone);