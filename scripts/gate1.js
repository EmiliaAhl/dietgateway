document.querySelector('.progress-key').innerHTML = updateKey(1, 4)

function updateKey(numGate, numPuzzle) {
  let locked = "";
  let unlocked = "";

  for (let i = 1; i <= numPuzzle; i++) {
    if (localStorage.hasOwnProperty("gate" + numGate + "." + i)) {
      unlocked++;
    } else {
      locked++;
    }
  }
  
  let keyElementHTML = [''];

  for (let i = 1; i <= unlocked + locked; i++) {
    if (localStorage.hasOwnProperty('gate' + numGate + '.' + i)) {
      keyElementHTML.push('unlocked' + i)
    } else {
      keyElementHTML.push('locked' + i)
    }
  }

  for (let i = 1; i <= unlocked + locked; i++) {
    if (keyElementHTML[i] === 'unlocked' + i) {
      document.querySelector('.key' + i).classList.add('unlocked');
      document.querySelector('.key' + i).src = 'assets/key.png';
      document.querySelector('.key' + i).addEventListener('click',() => {
        window.open('https://emiliaahl.github.io/dietgateway/gate'+ numGate + '-' + i + '.html', '_self')
      })
    } else if (keyElementHTML[i] === 'locked' + i) {
      document.querySelector('.key' + i).classList.add('locked');
      document.querySelector('.key' + i).src = 'assets/Key_Grey.png';
    }
  }
}