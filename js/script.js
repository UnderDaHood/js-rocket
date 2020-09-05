var timer = null;
var countDownNumber = 10;

var changeState = function(state){
  document.body.className = 'body-state' + state;

  if (state == 2) {
    timer = setInterval(function () {
      document.getElementById('countdown').innerHTML = countDownNumber;
      countDownNumber = countDownNumber - 1;
      if (countDownNumber == -1) {
        changeState(3)
      }
    }, 1000)
  }
}