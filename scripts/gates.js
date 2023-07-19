const gates = [
  {
    name: "Gate 1",
    link: getLink(1, 4),
    image: "gate1/Gate_1_Symbol_blue_bg.gif",
    rgbColor: "220, 24, 78",
    keys: getKeys(1, 4),
    status: getStatus(1, 4),
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
        '<a href="https://emiliaahl.github.io/dietgateway/gate' +
        numGate +
        "-" +
        (i + 1) +
        '.html"><img class="gate-key" src="assets/key.png"/> </a>';
    } else if (locked > i - unlocked) {
      keyImages += '<img class="locked-gate-key" src="assets/Key_Grey.png"/>';
    }
  }
  return keyImages;
}

function getStatus(numGate, numPuzzle) {
  let locked = "";
  let unlocked = "";

  for (let i = 1; i <= numPuzzle; i++) {
    if (localStorage.hasOwnProperty("gate" + numGate + "." + i)) {
      unlocked++;
    } else {
      locked++;
    }
  }

  let buttonHTML = "";
  if (!locked) {
    buttonHTML +=
      '<a href="https://emiliaahl.github.io/dietgateway/gate' +
      numGate +
      '-1.html"><button class="gate-butt">Visit</button></a>';
  } else {
    buttonHTML +=
      '<a href="https://emiliaahl.github.io/dietgateway/gate' +
      numGate +
      "-" +
      (unlocked + 1) +
      '.html"><button class="gate-butt">Enter</button></a>';
  }
  return buttonHTML;
}

function getLink(numGate, numPuzzle) {
  let locked = "";
  let unlocked = "";

  for (let i = 1; i <= numPuzzle; i++) {
    if (localStorage.hasOwnProperty("gate" + numGate + "." + i)) {
      unlocked++;
    } else {
      locked++;
    }
  }

  let link = "";
  if (locked === 0) {
    link = "gate" + numGate + "-1";
  } else {
    link = "gate" + numGate + "-" + (unlocked + 1);
  }
  return link;
}
