window.onload = function() {
  $("#start").on("click", start);
  $("#finish").on("click", finish);
};

var intervalId;
var result;

var clockRunning = false;
var timeLeft = 60;

function start() {
  if (!clockRunning) {
    clockRunning = true;
    intervalId = setInterval(countdown, 1000);
  }
}
function countdown() {
  timeLeft--;
  $("#time").text("Time Remaining: " + timeLeft);
  if (timeLeft === 0) {
    stop();
    clockRunning = false;
    $("#finish").hide();
    $("#time").text("You don't know Cher; you lose!");
  }
}
function reset() {
  timeLeft = 60;
  $("#time").text("Time Remaining: " + timeLeft);
}
function stop() {
  alert("Times up!");
  clearInterval(intervalId);
}
function finish() {
  if (clockRunning) {
    clockRunning = false;
    $("#finish").hide();
    $("#start").hide();
    $("#time").hide();
    result;
  }
}

if (timeLeft === 0) {
  timesUp = setTimeout(function() {
    alert("You don't know Cher and you have lost the game!");
  }, 1000 * 60);
}

//quiz resource code from stack overflow: https://stackoverflow.com/questions/28403558/multiple-choice-quiz-getting-score
