var $stopStartButton = document.getElementById('ssbutton')
var $timerBackground = document.getElementById('animebox')
var $elapsed = document.getElementById('elapsedtime')
var $resetButton = document.getElementById('reset')
var $timerInput = document.getElementById('timerinput')
var $lapButton = document.getElementById('lap')
var $list = document.getElementById('lap-list')
var timerID

function timer(){
  if($stopStartButton.classList.contains('start')){
    $resetButton.classList.remove('hidden')
    $stopStartButton.classList.remove('start')
    $stopStartButton.classList.add('stop')
    $stopStartButton.textContent = 'Stop'
    $timerBackground.style.animationPlayState = 'running'
    timerID = setInterval(function() {
      $elapsed.textContent++
      $timerBackground.style.transform = ('rotate(' + ($elapsed.textContent * 6) + 'deg)')
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
    $timerBackground.style.animationPlayState = 'paused'
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
  $timerBackground.style.transform = 'rotate(0deg)'
}

$stopStartButton.addEventListener('click', timer)
$resetButton.addEventListener('click', reseter)
$lapButton.addEventListener('click', function () {
    if($stopStartButton.classList.contains('stop')){
      var $lapTime = document.createElement('li')
      $lapTime.textContent = $elapsed.textContent + ' seconds'
      $list.appendChild($lapTime)
      reseter()
      timer()
    }
})
