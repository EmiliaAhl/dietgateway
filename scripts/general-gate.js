function checkAnswer(solution) {
  let inputElement = document.querySelector(".js-password-input");
  inputElement = inputElement.value.toLowerCase();
  const password = btoa(inputElement);
  buttonElement = document.querySelector(".js-next-butt");

  if (password === solution) {
    buttonElement.classList.add("drop-visible");
  } else {
    alert("no");
  }
}

