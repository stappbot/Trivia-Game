var clockRunning = false;
var timesUp;
//timesUp function

//timeRemaining function to countdown the timer

//function to begin timer, start counting down the time and display the remaining time (and make questions visible!)
$("#start").on("click", function() {
  timesUp = setTimeout(function() {
    alert("You don't know Cher and you have lost the game!");
  }, 5000);
  //$(".time-remaining").text(timeRemaining);
});

//function to turn off timer and alert = "you won!"
//if all answers match the correct answers array
//else (if timer runs out) "you lose!"

//quiz resource code from stack overflow: https://stackoverflow.com/questions/28403558/multiple-choice-quiz-getting-score
