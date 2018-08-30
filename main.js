var $button = document.getElementById('button')
var $elapsed = document.getElementById('elapsedtime')
var timerID

function timer(){
  if($button.classList.contains('start') === true){
    $button.classList.remove('start')
    $button.classList.add('stop')
    $button.textContent = 'Stop'
    timerID = setInterval(function() {
      $elapsed.textContent++
    }, 1000)
  }
  else {
    $button.classList.remove('stop')
    $button.classList.add('start')
    $button.textContent = 'Start'
    clearInterval(timerID)
  }
}

$button.addEventListener('click', timer)
