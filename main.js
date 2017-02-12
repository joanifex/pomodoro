var button = document.getElementById('start-btn');
var display = document.getElementById('display');
var date = new Date();

var time = {
  seconds: 0,
  minutes: 0,
};

var countdown = setInterval(function(){
    if ( time.seconds == 0 && time.minutes == 0) {
      clearInterval(countdown);
    } else if ( time.seconds == 0 ) {
      time.minutes -= 1;
      time.seconds = 59;
    } else {
      time.seconds -= 1;
    }
    displayTime();
  }, 1000);


function displayTime(){
  display.innerHTML = time.minutes + ":" +
  ( time.seconds / 10 > 1 ? time.seconds : "0" + time.seconds);
}

button.addEventListener('click', function(){
  time.minutes = 5;
  countdown;
});
