function checkAnswer(solution) {
  const inputElement = document.querySelector(".js-password-input");
  const password = btoa(inputElement.value);
  buttonElement = document.querySelector(".js-next-butt");

  if (password === solution) {
    buttonElement.classList.add("drop-visible");
  } else {
    alert("no");
  }
}

