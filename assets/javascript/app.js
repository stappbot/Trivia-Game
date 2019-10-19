$(document).ready(function() {
  let intervalId;
  let score;
  let gameOn = false;
  let clockRunning = false;
  let timeLeft = 40;

  function reset() {
    $(".card").hide();
    $("input:checked").each(function() {
      $(this).prop("checked", false);
    });
    timeLeft = 40;
    clockRunning = false;
    $("#start").text("Start!");
    gameOn = false;
  }

  function countdown() {
    timeLeft--;
    $("#time").text("Time Remaining: " + timeLeft);
    if (timeLeft === 0) {
      clearInterval(intervalId);
      reset();

      $("#time").html("You don't know Cher <br> you are a square!");
    }
  }

  function start() {
    if (!clockRunning) {
      clockRunning = true;
      intervalId = setInterval(countdown, 1000);
    }
  }

  function finish() {
    if (clockRunning) {
      reset();
      clockRunning = false;
      clearInterval(intervalId);
      $("#time").text("Hey, you got: " + getResult() + "%. Woohoo!");
    }
  }

  function getResult() {
    let result = 0;
    $("input:checked").each(function add() {
      result += parseInt(this.value);
    });
    return result;
  }

  $(".card").hide();

  $("#start").on("click", function() {
    if (gameOn) {
      gameOn = false;
      $(this).text("Start!");
      finish();
    } else {
      gameOn = true;
      $(".card").show();
      $(this).text("Finish!");
      start();
    }
  });
});
//quiz resource code from stack overflow: https://stackoverflow.com/questions/28403558/multiple-choice-quiz-getting-score
