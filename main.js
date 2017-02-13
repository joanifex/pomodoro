
var startButton = document.getElementById('start-btn'),
    resetButton = document.getElementById('reset-btn'),
    pauseButton = document.getElementById('pause-btn'),
    resumeButton = document.getElementById('resume-btn'),
    plusButton = document.getElementById('plus-btn'),
    minusButton = document.getElementById('minus-btn'),
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
};

function displayTime(){
  display.innerHTML = time.minutes + ":" +
  ( time.seconds / 10 > 1 ? time.seconds : "0" + time.seconds);
};

function timer() {
  displayTime();
  countdown();
};

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

setTime();
displayTime();

startButton.addEventListener('click', function(){
  setTime();
  displayTime();
  interval = setInterval(timer, 1000);
  startButton.classList.add("hidden");
  minusButton.classList.add("hidden");
  plusButton.classList.add("hidden");
  display.classList.add("offset-by-four");
  resetButton.classList.remove("hidden");
  pauseButton.classList.remove("hidden");
});

resetButton.addEventListener('click', function(){
  clearInterval(interval);
  setTime();
  displayTime();
  resetButton.classList.add("hidden");
  pauseButton.classList.add("hidden");
  resumeButton.classList.add("hidden");
  startButton.classList.remove("hidden");
  minusButton.classList.remove("hidden");
  plusButton.classList.remove("hidden");
  display.classList.remove("offset-by-four");
});

pauseButton.addEventListener('click', function(){
  clearInterval(interval);
  pauseButton.classList.add("hidden");
  resumeButton.classList.remove("hidden");
});

resumeButton.addEventListener('click', function(){
  interval = setInterval(timer, 1000);
  resumeButton.classList.add("hidden");
  pauseButton.classList.remove("hidden");
});

plusButton.addEventListener('click', function(){
  if (pomodoro < 99){
    pomodoro += 1;
    setTime();
    displayTime();
  }
});

minusButton.addEventListener('click', function(){
  if (pomodoro > 0){
    pomodoro -= 1;
    setTime();
    displayTime();
  }
});
