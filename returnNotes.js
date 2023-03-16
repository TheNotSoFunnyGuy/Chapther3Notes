//Parameters are placeholder variables that allow
//us to reuse functions

//Example 1: Without Parameter(s)
function printYes(){
    console.log("Yes");
}

printYes();
printYes();

//Example 2: With Parameter
function printText(text){     //text is a parameter
    console.log(text);
}

printText("Juan");
printText("Jose");

//Return statements provide values to the rest of the program
//Returned values can be used by other parts of the code
//console.log only produces "side effects" that cannot be used by other parts of the code

//Example 3: Without Return
function double(num){
    console.log(num*2);
}

double(3);
double(5);

//Example 4: With Return
function triple(num){
    return (num*3);
}

// console.log(triple(7));
let answer = triple(12);
answer -=2;
console.log(answer);

//Example 5: Another return
function loseLife(lives){
    return (lives - 1);
}

let totalLives = 10;
totalLives = loseLife(totalLives);
console.log(totalLives);

//Scope is the part of the program where the binding
//(value of the variable) is visible. Global scope:
//created outside all {} and accessible everywhere
//Local scope: Created inside a specific {} and only
//accessible inside those {}

//Example 6" Different Scopes
let x = 10; //global x
if (true){
    let y = 20; //local y
    let z = 30; //local z
    console.log(x+y+z);
}
console.log(x); //y and z are not accessible outside {}

//Example 7: no naming conflict
function half(n){ //local n
    return (n/2);
}

let n = 10; //global n
console.log(half(100));
console.log(n); //since there is no {} or function call, use global n