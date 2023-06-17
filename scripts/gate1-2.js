document.querySelector(".puzzle-butt1").addEventListener("click", () => {
  document.querySelector(".puzzle-gate-1-container").innerHTML = `
  <div>Gate 1</div>
  <img class='gate1_2_img' src='assets/gate1/Gate_1_2.png'></>
  <input class="puzzle-input" placeholder="" type="text">
  <button onclick="checkPuzzleAnswer('Y3JvaXNzYW50', 1)" class="puzzle-gate-butt">Submit</button>
  <button onclick="closePuzzleWindow(1)" class="puzzle-gate-butt">Exit</button>`;
  document
    .querySelector(".puzzle-gate-1-container")
    .classList.add("puzzle-gate-container");
  document
    .querySelector(".puzzle-gate-backdrop")
    .classList.add("puzzle-gate-backdrop-active");
});

document.querySelector(".puzzle-butt2").addEventListener("click", () => {
  if (localStorage.hasOwnProperty("gate1.2.1")) {
    document.querySelector(".puzzle-gate-2-container").innerHTML = `
      <div>Gate 2</div>
      <div>I'm tall when I'm young, and I'm short when I'm old. What am I?</div>
      <input class="puzzle-input" placeholder="" type="text">
      <button onclick="checkPuzzleAnswer('YSBjYW5kbGU=', 2, 'Y2FuZGxl')" class="puzzle-gate-butt">Submit</button>
      <button onclick="closePuzzleWindow(2)" class="puzzle-gate-butt">Exit</button>`;
    document
      .querySelector(".puzzle-gate-2-container")
      .classList.add("puzzle-gate-container");
    document
      .querySelector(".puzzle-gate-backdrop")
      .classList.add("puzzle-gate-backdrop-active");
  } else {
    alert("Nice try");
  }
});

console.log(btoa("a candle"));

document.querySelector(".puzzle-butt3").addEventListener("click", () => {
  if (localStorage.hasOwnProperty("gate1.2.2")) {
    document.querySelector(".puzzle-gate-3-container").innerHTML = `
      <div>Gate 3</div>
      <div>3*3-6+9*6/2+13*3</div>
      <input class="puzzle-input" placeholder="" type="text">
      <button onclick="checkPuzzleAnswer('Njk=', 3)" class="puzzle-gate-butt">Submit</button>
      <button onclick="closePuzzleWindow(3)" class="puzzle-gate-butt">Exit</button>`;
    document
      .querySelector(".puzzle-gate-3-container")
      .classList.add("puzzle-gate-container");
    document
      .querySelector(".puzzle-gate-backdrop")
      .classList.add("puzzle-gate-backdrop-active");
  } else {
    alert("Not yet");
  }
});

document.querySelector(".puzzle-butt4").addEventListener("click", () => {
  if (localStorage.hasOwnProperty("gate1.2.3")) {
    document.querySelector(".puzzle-gate-4-container").innerHTML = `
      <div>Gate 4</div>
      <img src = 'assets/gate1/Gate_1_4.png' class='gate1_2_img'></>
      <input class="puzzle-input" placeholder="" type="text">
      <button onclick="checkPuzzleAnswer('cG9wY29ybg==', 4)" class="puzzle-gate-butt">Submit</button>
      <button onclick="closePuzzleWindow(4)" class="puzzle-gate-butt">Exit</button>`;
    document
      .querySelector(".puzzle-gate-4-container")
      .classList.add("puzzle-gate-container");
    document
      .querySelector(".puzzle-gate-backdrop")
      .classList.add("puzzle-gate-backdrop-active");
  } else {
    alert("Why are you clicking this?");
  }
});

document.querySelector(".puzzle-butt5").addEventListener("click", () => {
  if (localStorage.hasOwnProperty("gate1.2.4")) {
    document.querySelector(".puzzle-gate-5-container").innerHTML = `
      <div>Gate 5</div>
      <div>Cipher</div>
      <button onclick="closePuzzleWindow(5)" class="puzzle-gate-butt">Exit</button>`;
    document
      .querySelector(".puzzle-gate-5-container")
      .classList.add("puzzle-gate-container");
    document
      .querySelector(".puzzle-gate-backdrop")
      .classList.add("puzzle-gate-backdrop-active");
  } else {
    alert("Try the other direction");
  }
});

function closePuzzleWindow(puzzle) {
  document.querySelector(".puzzle-gate-" + puzzle + "-container").innerHTML =
    "";
  document
    .querySelector(".puzzle-gate-" + puzzle + "-container")
    .classList.remove("puzzle-gate-container");
  location.reload();
}

function checkPuzzleAnswer(solution, puzzle, solution2) {
  let inputElement = document.querySelector(".puzzle-input");
  inputElement = inputElement.value.toLowerCase();
  const password = btoa(inputElement);

  if (password === solution || solution2) {
    document.querySelector(".puzzle-gate-" + puzzle + "-container").innerHTML =
      "";
    document
      .querySelector(".puzzle-gate-" + puzzle + "-container")
      .classList.remove("puzzle-gate-container");
    updateProgress("gate1.2." + puzzle);
    location.reload();
  } else {
    alert("no");
  }
}

if (localStorage.hasOwnProperty("gate1.2.1")) {
  document.querySelector(".image2").src = "assets/gate1/Gate_2_open.png";
  document.querySelector(".puzzle-butt1").innerText = "Done";
  document.querySelector(".puzzle-butt2").innerText = "Enter";
}

if (localStorage.hasOwnProperty("gate1.2.2")) {
  document.querySelector(".image3").src = "assets/gate1/Gate_3_open.png";
  document.querySelector(".puzzle-butt2").innerText = "Done";
  document.querySelector(".puzzle-butt3").innerText = "Enter";
}

if (localStorage.hasOwnProperty("gate1.2.3")) {
  document.querySelector(".image4").src = "assets/gate1/Gate_4_open.png";
  document.querySelector(".puzzle-butt3").innerText = "Done";
  document.querySelector(".puzzle-butt4").innerText = "Enter";
}

if (localStorage.hasOwnProperty("gate1.2.4")) {
  document.querySelector(".image5").src = "assets/gate1/Gate_5_open.png";
  document.querySelector(".puzzle-butt4").innerText = "Done";
  document.querySelector(".puzzle-butt5").innerText = "Enter";
}

if (localStorage.hasOwnProperty("gate1.2.5")) {
  document.querySelector(".puzzle-butt5").innerText = "Done";
}
