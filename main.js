var $startButton = document.getElementById('start')
var $elapsed = document.getElementById('elapsedtime')

function timer(){
  var timerID = setInterval(function() {
    $elapsed.textContent++
  }, 1000)
}

$startButton.addEventListener('click', timer)
