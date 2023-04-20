const readline = require('readline-sync');

let diceRolled = [];
let character1 = {
    //empty to start
}

createChar(character1, diceRolled);


function rolld6(){
    return Math.ceil(Math.random()*6);
}

function rollDice(amount, list){
    for (let i=0; i<amount; i++){
        let roll = rolld6();
        console.log(`You rolled a ${roll}!`);
        list.push(roll);
    }
}

function sum(list){
    let sum = 0;
    for (let i=0; i<list.length; i++){
        sum += list[i]
    }
    return sum;
}

function rollStat(list){
    list = [];
    rollDice(4, list);
    return sum(list);
}

function createChar(character, list){
    character.name1 = readline.question("Enter character name: ");
    character.height1 = readline.question("How tall will your character be: ");
    character.race1 = readline.question("What is their race: ");
    character.skill1 = readline.question("Enter a special Skill: ");
    character.name2 = readline.question("Enter character name: ");
    character.height2 = readline.question("How tall will your character be: ");
    character.race2 = readline.question("What is their race: ");
    character.skill2 = readline.question("Enter a special Skill: ");
    character.name3 = readline.question("Enter character name: ");
    character.height3 = readline.question("How tall will your character be: ");
    character.race3 = readline.question("What is their race: ");
    character.skill3 = readline.question("Enter a special Skill: ");
    console.log("Rolling STR");
    character.strength1 = rollStat(diceRolled);
    console.log("Rolling DEX");
    character.dexterity1 = rollStat(diceRolled);
    console.log("Rolling CON");
    character.constitution1 = rollStat(diceRolled);
    console.log("Rolling INT");
    character.intelligence1 = rollStat(diceRolled);
    console.log("Rolling WIS");
    character.wisdom1 = rollStat(diceRolled);
    console.log("Rolling CHA");
    character.charisma1 = rollStat(diceRolled);
    displayChar(character);
    console.log("Rolling STR");
    character.strength2 = rollStat(diceRolled);
    console.log("Rolling DEX");
    character.dexterity2 = rollStat(diceRolled);
    console.log("Rolling CON");
    character.constitution2 = rollStat(diceRolled);
    console.log("Rolling INT");
    character.intelligence2 = rollStat(diceRolled);
    console.log("Rolling WIS");
    character.wisdom2 = rollStat(diceRolled);
    console.log("Rolling CHA");
    character.charisma2 = rollStat(diceRolled);
    displayChar(character);
    console.log("Rolling STR");
    character.strength3 = rollStat(diceRolled);
    console.log("Rolling DEX");
    character.dexterity3 = rollStat(diceRolled);
    console.log("Rolling CON");
    character.constitution3 = rollStat(diceRolled);
    console.log("Rolling INT");
    character.intelligence3 = rollStat(diceRolled);
    console.log("Rolling WIS");
    character.wisdom3 = rollStat(diceRolled);
    console.log("Rolling CHA");
    character.charisma3 = rollStat(diceRolled);
    displayChar(character);
}

function displayChar(char){
    console.log('------------------------');
    console.log(`Name: ${char.name1}`);
    console.log(`Height: ${char.height1}`);
    console.log(`Race: ${char.race1}`);
    console.log(`Special skill: ${char.skill1}`);
    console.log(`STR: ${char.strength1}`);
    console.log(`DEX: ${char.dexterity1}`);
    console.log(`CON: ${char.constitution1}`);
    console.log(`INT: ${char.intelligence1}`);
    console.log(`WIS: ${char.wisdom1}`);
    console.log(`CHA: ${char.charisma1}`);
    console.log('------------------------');
    console.log(`Name: ${char.name2}`);
    console.log(`Height: ${char.height2}`);
    console.log(`Race: ${char.race2}`);
    console.log(`Special skill: ${char.skill2}`);
    console.log(`STR: ${char.strength2}`);
    console.log(`DEX: ${char.dexterity2}`);
    console.log(`CON: ${char.constitution2}`);
    console.log(`INT: ${char.intelligence2}`);
    console.log(`WIS: ${char.wisdom2}`);
    console.log(`CHA: ${char.charisma2}`);
    console.log('------------------------');
    console.log(`Name: ${char.name3}`);
    console.log(`Height: ${char.height3}`);
    console.log(`Race: ${char.race3}`);
    console.log(`Special skill: ${char.skill3}`);
    console.log(`STR: ${char.strength3}`);
    console.log(`DEX: ${char.dexterity3}`);
    console.log(`CON: ${char.constitution3}`);
    console.log(`INT: ${char.intelligence3}`);
    console.log(`WIS: ${char.wisdom3}`);
    console.log(`CHA: ${char.charisma3}`);
    console.log('------------------------');
}
