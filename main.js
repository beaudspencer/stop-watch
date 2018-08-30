var $stopStartButton = document.getElementById('ssbutton')
var $elapsed = document.getElementById('elapsedtime')
var $resetButton = document.getElementById('reset')
var $timerInput = document.getElementById('timerinput')
var timerID

function timer(){
  if($stopStartButton.classList.contains('start')){
    $resetButton.classList.remove('hidden')
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

function reseter() {
  clearInterval(timerID)
  $elapsed.textContent = '0'
  $stopStartButton.classList.remove('stop')
  $stopStartButton.classList.add('start')
  $stopStartButton.textContent = 'Start'
  $resetButton.classList.add('hidden')
}

$stopStartButton.addEventListener('click', timer)
$resetButton.addEventListener('click', reseter)
