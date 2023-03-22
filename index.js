var readlineSync = require('readline-sync');
// var chalk = require('chalk');

var userName = readlineSync.question("What is your name ? ");
console.log("Welcome " + userName + " to the Quiz");

var score = 0;
var arrList = [
  {
    options: ['China', 'India', 'Russia', 'France'],
    question: "Which country that has the highest in Barley Production ? ",
    answer: 'Russia'
  },
  {
    options: ["Kolkata", "Mumbai", "Chennai", "Cochin"],
    question: "Which is considered as the biggest port of India ?",
    answer: "Mumbai"
  },
  {
    options: ["Thar", "Kalahari", "Sahara", "Sonoran"],
    question: "The World Largest desert is ? ",
    answer: "Sahara"
  },
  {
    options: ["Ganga", "Yamuna", "Narmada", "Indus"],
    question: "The river that flows through Delhi is ?",
    answer: "Yamuna"
  },
  {
    options: ["Earth", "Venus", "Mars", "Jupiter"],
    question: "The hottest planet in the solar system ? ",
    answer: "Venus"
  }
]

function play(options, question, answer) {
  var selectedOption = readlineSync.keyInSelect(options, question);

  if (options[selectedOption] === answer) {
    console.log("You are correct");
    score = score + 1;
  } else {
    console.log("You are wrong");
  }

  console.log("Current score is :", score);
  console.log("----------------------------------------------------");
}

for (i = 0; i < arrList.length; i++) {
  var current = arrList[i];
  play(current.options, current.question, current.answer)
}

console.log("Final score is:", score);