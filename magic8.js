const readLine = require('readline-sync');

let answerList = [
    'It is certain',
    'It is decidedly so',
    'Without a doubt',
    'Yes definitely',
    'You may rely on it',
    'As I see it, yes',
    'Most likely',
    'Outlook good',
    'Yes',
    'Signs point to yes',
    'Reply hazy, try again',
    'Ask again later',
    'Better not tell you now',
    'Cannot predict now',
    'Concentrate and ask again',
    'Dont count on it',
    'My reply is no',
    'My sources say no',
    'Outlook not so good',
    'Very doubtful'
];

console.log("The Magic 8 Ball is a plastic sphere that looks like an big eight ball.\n" +
    "It is used for fortune-telling or seeking advice. The user asks a yes–no question to \n" +
    "the ball and it reveals an answer.");
let randomNum = Math.floor(Math.random()*answerList.length);
let question = readLine.question("Enter a yes or no question: ")
let randomAnswer = answerList[randomNum];
console.log(randomAnswer);