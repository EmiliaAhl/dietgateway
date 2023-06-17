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
  if (!localStorage.hasOwnProperty("gate" + numGate + "." + numPuzzle)) {
    document.querySelector(".progressCheck").innerHTML = `
      <div class="too-far-screen">
        <div class="text-background">
          <p>You haven't finished the earlier puzzles yet silly</p>
        </div>
      </div>
    `;
  }
}