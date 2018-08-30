var $stopStartButton = document.getElementById('ssbutton')
var $timerBackground = document.getElementById('animebox')
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
    $timerBackground.classList.add('stylerun')
    $timerBackground.classList.remove('style')
    timerID = setInterval(function() {
      $elapsed.textContent++
      if($timerInput.value !== 0 && $timerInput.value !== ''){
        if($elapsed.textContent === $timerInput.value){
          $timerBackground.classList.add('stop')
          $timerBackground.classList.remove('stylerun')
          clearInterval(timerID)
        }
      }
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
  $timerBackground.classList.remove('stop')
  $timerBackground.classList.add('style')
  $timerBackground.classList.remove('stylerun')
}

$stopStartButton.addEventListener('click', timer)
$resetButton.addEventListener('click', reseter)
