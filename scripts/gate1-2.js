document.querySelector('.puzzle-butt1').addEventListener('click', () => {
  document.querySelector('.puzzle-gate-1-container')
  .innerHTML = `
  <div>Gate 1</div>
  <div>Croissant</div>
  <input class="puzzle-input" placeholder="" type="text">
  <button onclick="checkPuzzleAnswer('Y3JvaXNzYW50', 1)" class="puzzle-gate-butt">Submit</button>`;
  document.querySelector('.puzzle-gate-1-container').classList.add('puzzle-gate-container');
})

document.querySelector('.puzzle-butt2').addEventListener('click', () => {
  if (localStorage.hasOwnProperty('gate1.2.1')) {
    document.querySelector('.puzzle-gate-2-container').innerHTML = `
      <div>Gate 2</div>
      <div>I'm tall when I'm young, and I'm short when I'm old. What am I?</div>
      <input class="puzzle-input" placeholder="" type="text">
      <button onclick="checkPuzzleAnswer('YSBjYW5kbGU=', 2)" class="puzzle-gate-butt">Submit</button>`;
    document.querySelector('.puzzle-gate-2-container').classList.add('puzzle-gate-container');
  } else {
    alert('Nice try')
  }
})

document.querySelector('.puzzle-butt3').addEventListener('click', () => {
  if (localStorage.hasOwnProperty('gate1.2.2')) {
    document.querySelector('.puzzle-gate-3-container').innerHTML = `
      <div>Gate 3</div>
      <div>3*3-6+9*6/2+13*3</div>
      <input class="puzzle-input" placeholder="" type="text">
      <button onclick="checkPuzzleAnswer('Njk=', 3)" class="puzzle-gate-butt">Submit</button>`;
    document.querySelector('.puzzle-gate-3-container').classList.add('puzzle-gate-container');
  } else {
    alert('Nice try')
  }
})

console.log(btoa('69'))

function checkPuzzleAnswer(solution, puzzle) {
  let inputElement = document.querySelector('.puzzle-input');
  inputElement = inputElement.value.toLowerCase();
  const password = btoa(inputElement);
  const nextPuzzle = puzzle + 1

  if (password === solution) {
    document.querySelector('.puzzle-gate-' + puzzle + '-container').innerHTML = '';
    document.querySelector('.puzzle-gate-' + puzzle + '-container').classList.remove('puzzle-gate-container');
    document.querySelector('.puzzle-gate-' + puzzle).innerHTML = `
    <img class="puzzle-gate" src="assets/gate1/Gate_` + puzzle + `_open.png">
    <button>Done</button>`
    document.querySelector('.puzzle-gate-' + nextPuzzle).innerHTML = `
    <img class="puzzle-gate" src="assets/gate1/Gate_` + nextPuzzle + `_closed.png">
    <button class="puzzle-butt` + nextPuzzle + `">Enter</button>`
    updateProgress('gate1.2.' + puzzle)
  } else {
    alert('no')
  }
}

if (localStorage.hasOwnProperty('gate1.2.1')) {
  document.querySelector('.puzzle-gate-1').innerHTML = `
  <img class="puzzle-gate" src="assets/gate1/Gate_1_open.png">
  <button>Done</button>`
  document.querySelector('.puzzle-gate-2').innerHTML = `
  <img class="puzzle-gate" src="assets/gate1/Gate_2_closed.png">
  <button class="puzzle-butt2">Enter</button>`
}

if (localStorage.hasOwnProperty('gate1.2.2')) {
  document.querySelector('.puzzle-gate-2').innerHTML = `
  <img class="puzzle-gate" src="assets/gate1/Gate_2_open.png">
  <button>Done</button>`
  document.querySelector('.puzzle-gate-3').innerHTML = `
  <img class="puzzle-gate" src="assets/gate1/Gate_3_closed.png">
  <button class="puzzle-butt3">Enter</button>`
}

if (localStorage.hasOwnProperty('gate1.2.3')) {
  document.querySelector('.puzzle-gate-3').innerHTML = `
  <img class="puzzle-gate" src="assets/gate1/Gate_3_open.png">
  <button>Done</button>`
  document.querySelector('.puzzle-gate-4').innerHTML = `
  <img class="puzzle-gate" src="assets/gate1/Gate_4_closed.png">
  <button class="puzzle-butt4">Enter</button>`
}

if (localStorage.hasOwnProperty('gate1.2.4')) {
  document.querySelector('.puzzle-gate-4').innerHTML = `
  <img class="puzzle-gate" src="assets/gate1/Gate_4_open.png">
  <button>Done</button>`
  document.querySelector('.puzzle-gate-5').innerHTML = `
  <img class="puzzle-gate" src="assets/gate1/Gate_5_closed.png">
  <button class="puzzle-butt5">Enter</button>`
}

if (localStorage.hasOwnProperty('gate1.2.5')) {
  document.querySelector('.puzzle-gate-5').innerHTML = `
  <img class="puzzle-gate" src="assets/gate1/Gate_5_open.png">
  <button>Done</button>`
}