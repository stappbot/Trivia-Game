// window.onload = function() {
//   $("#start").on("click", start);
// };

var intervalId;

var clockRunning = false;
var timeLeft;

function start() {
  if (!clockRunning) {
    intervalId = setInterval(count, -1000);
    clockRunning = true;
    $(".time-remaining").text(timeLeft);
  }
}
//timesUp function
// var timesUp = function() {
//     if ()
// }
// //timeRemaining function to countdown the timer

//function to begin timer, start counting down the time and display the remaining time (and make questions visible!)

if (timeLeft === 0) {
  timesUp = setTimeout(function() {
    alert("You don't know Cher and you have lost the game!");
  }, 1000 * 60);
}

//function to turn off timer and alert = "you won!"
//if all answers match the correct answers array
//else (if timer runs out) "you lose!"

//quiz resource code from stack overflow: https://stackoverflow.com/questions/28403558/multiple-choice-quiz-getting-score
