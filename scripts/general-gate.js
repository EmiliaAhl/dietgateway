function checkAnswer(solution) {
  let inputElement = document.querySelector(".js-password-input");
  inputElement = inputElement.value.toLowerCase();
  const password = btoa(inputElement);
  buttonElement = document.querySelector(".js-next-butt");

  if (password === solution) {
    buttonElement.classList.add("visible");
  } else {
    alert("no");
  }
}

function checkProgress(numGate, numPuzzle) {
  if (localStorage.hasOwnProperty('gate' + numGate + '.' + numPuzzle)){
    document.querySelector('.too-far-screen').classList.remove('visible')
  }
}


