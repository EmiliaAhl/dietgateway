const gates = [
  {
    name: "Gate 1",
    image: "dietlogo.jpg",
    rgbColor: "220, 24, 78",
    status: "Enter",
    keys: getKeys(1, 3),
  },
];

function getKeys(numGate, numPuzzle) {
  let locked = "";
  let unlocked = "";

  for (let i = 1; i <= numPuzzle; i++) {
    if (localStorage.hasOwnProperty("gate" + numGate + "." + i)) {
      unlocked++;
    } else {
      locked++;
    }
  }

  let keyImages = "";

  for (let i = 0; i <= unlocked + locked; i++) {
    if (unlocked > i) {
      keyImages +=
        '<a href="http://127.0.0.1:5500/gate' +
        numGate +
        "-" +
        (i + 1) +
        '.html"><img class="gate-key" src="assets/key.png"/> </a>';
    } else if (locked > i - unlocked) {
      keyImages += '<img class="gate-key" src="assets/Key_Grey.png"/>';
    }
  }
  return keyImages;
}
