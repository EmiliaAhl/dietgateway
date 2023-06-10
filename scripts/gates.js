const gates = [
  {
    name: "Gate 1",
    image: "dietlogo.jpg",
    rgbColor: "220, 24, 78",
    status: "Enter",
    keys: getKeys(0, 3),
  },
];

function getKeys(unlocked, locked) {
  let keyImages = "";
  for (let i = 0; i <= unlocked + locked; i++) {
    if (unlocked > i) {
      keyImages += '<img class="gate-key" src="assets/key.png"/>';
    } else if (locked > i - unlocked) {
      keyImages += '<img class="gate-key" src="assets/Key_Grey.png"/>';
    }
  }
  return keyImages;
}
