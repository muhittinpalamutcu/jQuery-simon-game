var gamePath = [];
var userClickPath = [];
var buttonColors = ["green", "red", "yellow", "blue"];

function nextSequence() {
  var randomNumber = Math.random();
  randomNumber = randomNumber * 4;
  randomNumber = Math.floor(randomNumber);
  var randomChosenColor = buttonColors[randomNumber];
  gamePath.push(randomChosenColor);
}

$(".btn").on("click", function(event) {
  //console.log(event.target.id);
  var userChosenColor = event.target.id;
  $("#" + userChosenColor).fadeOut(100).fadeIn(100);
  playSound(userChosenColor);
  userClickPath.push(userChosenColor);
  console.log(userClickPath);
});

function playSound(color) {
  var audio = new Audio('sounds/' + color + '.mp3');
  audio.play();
}
