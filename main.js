
var startButton = document.getElementById('start-btn'),
    resetButton = document.getElementById('reset-btn'),
    display = document.getElementById('display'),
    pomodoro = 25,
    time = {
      seconds: 0,
      minutes: 0,
    },
    interval;

function setTime() {
  time.minutes = pomodoro;
  time.seconds = 0;
}

function timer() {
  displayTime();
  countdown();
}

function countdown(){
  if ( time.seconds == 0 && time.minutes == 0) {
    clearInterval(interval);
  } else if ( time.seconds == 0 ) {
    time.minutes -= 1;
    time.seconds = 59;
  } else {
    time.seconds -= 1;
  }
};

function displayTime(){
  display.innerHTML = time.minutes + ":" +
  ( time.seconds / 10 > 1 ? time.seconds : "0" + time.seconds);
};

setTime();
displayTime();

startButton.addEventListener('click', function(){
  interval = setInterval(timer, 1000);
  startButton.classList.add("hidden");
  resetButton.classList.remove("hidden");
});

resetButton.addEventListener('click', function(){
  clearInterval(interval);
  setTime();
  displayTime();
  resetButton.classList.add("hidden");
  startButton.classList.remove("hidden");
});
