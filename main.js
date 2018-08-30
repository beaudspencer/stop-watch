var $stopStartButton = document.getElementById('ssbutton')
var $elapsed = document.getElementById('elapsedtime')
var timerID

function timer(){
  if($stopStartButton.classList.contains('start')){
    $stopStartButton.classList.remove('start')
    $stopStartButton.classList.add('stop')
    $stopStartButton.textContent = 'Stop'
    timerID = setInterval(function() {
      $elapsed.textContent++
    }, 1000)
  }
  else {
    $stopStartButton.classList.remove('stop')
    $stopStartButton.classList.add('start')
    $stopStartButton.textContent = 'Start'
    clearInterval(timerID)
  }
}

$stopStartButton.addEventListener('click', timer)
