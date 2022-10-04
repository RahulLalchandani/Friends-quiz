var readlineSync = require("readline-sync");

var score = 0;

// data of high score
var highScores = [
  { name: "Rahul", score: 3 },
  { name: "Nikhil", score: 2 },
];

// array of objects
var questions = [
  {
    question:
      "What is Chandler's Middle name \n A. Judy \n B. Jack \n C. Muriel \n D. Francis \n ",
    answer: "C",
  },
  {
    question:
      "What was name of Rachel's hairless cat ? \n A. Baldy \n B. Mrs. Whiskerson \n C. Mrs. Felix \n D. Sid \n ",
    answer: "B",
  },
  {
    question:
      "What was name of Ross's Second wife ? \n A. Emma \n B. Rachel \n C. Emily \n D. Judith \n ",
    answer: "C",
  },
];

function welcome() {
  var userName = readlineSync.question("What's your name? ");

  "Welcome " + userName + " to a quiz of: How well do you know F.R.I.E.N.D.S?";
}

// play function
function play(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log("Right Answer!");
    score = score + 1;
  } else {
    console.log("Wrong Answer!");
  }

  console.log("current score: ", score);
  console.log("-------------");
}

function game() {
  for (var i = 0; i < questions.length; i++) {
    var currentQuestion = questions[i];
    play(currentQuestion.question, currentQuestion.answer);
  }
}

function showScores() {
  console.log("Congratulations! You SCORED: ", score);

  console.log(
    "Check out the high scores, if you should be there ping me and I'll update it"
  );

  highScores.map((score) => console.log(score.name, " : ", score.score));
}

welcome();
game();
showScores();
