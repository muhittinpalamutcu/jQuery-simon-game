var gamePath = [];
var userClickPath = [];
var buttonColors = ["green", "red", "yellow", "blue"];

var startGame = false;
var level = 0;


$(document).on("keypress", function(event) {
  var key = event.key;
  if (!startGame) {
    if (key === "A" || key === "a") {
      startGame = true;
      console.log("game started");
      $("h1").text("Level " + level);
      nextSequence();
    }
  } else {
    console.log("You are already in game");
  }
});

function nextSequence() {
  userClickPath = [];
  var randomNumber = Math.random();
  randomNumber = randomNumber * 4;
  randomNumber = Math.floor(randomNumber);
  var randomChosenColor = buttonColors[randomNumber];
  gamePath.push(randomChosenColor);
  animatePress(randomChosenColor);
  level++;
  $("h1").text("Level " + level);
}

$("button").on("click", function(event) {
  //console.log(event.target.id);
  var userChosenColor = event.target.id;
  $("#" + userChosenColor).fadeOut(100).fadeIn(100);
  userClickPath.push(userChosenColor);
  checkAnswer(userClickPath.length - 1);
  playSound(userChosenColor);
  animatePress(userChosenColor);
  console.log(userClickPath);
});

function playSound(color) {
  var audio = new Audio('sounds/' + color + '.mp3');
  audio.play();
}


function animatePress(currentColor) {
  var currentButton = $("#" + currentColor);
  currentButton.addClass("pressed");
  setTimeout(function() {
    currentButton.removeClass("pressed");
  }, 100);
}

function checkAnswer(currentLevel) {
  if (gamePath[currentLevel] === userClickPath[currentLevel]) {
    if (gamePath.length === userClickPath.length) {
      console.log("success");
      setTimeout(function() {
        nextSequence();
      }, 1000);
    }
  } else {
    var wrong = new Audio('sounds/wrong.mp3');
    wrong.play();
    $("body").addClass("game-over");
    setTimeout(function() {
      $("body").removeClass("game-over");
    }, 300);
    $("h1").text("Game Over, Press Key A to Restart Game")
    console.log("wrong");
    startOver();
  }
}

function startOver(){
  level=0;
  gamePath=[];
  startGame=false;
}
