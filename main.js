var button = document.getElementById('start-btn');
var display = document.getElementById('display');
var date = new Date();

button.addEventListener('click', function(){
  display.innerHTML = date;
});
