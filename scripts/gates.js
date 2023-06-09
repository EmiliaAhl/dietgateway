const gates = [
  {
    name: "Gate 1",
    image: "dietlogo.jpg",
    rgbColor: "220, 24, 78",
    status: "Enter",
    keys: getKeys(0, 5),
  },
  {
    name: "Gate 2",
    image: "dietlogo.jpg",
    rgbColor: "55, 55, 184",
    status: "Visit",
    keys: getKeys(5, 0),
  },
  {
    name: "Gate 3",
    image: "dietlogo.jpg",
    rgbColor: "233, 233, 97",
    status: "Enter",
    keys: getKeys(2, 4),
  },
  {
    name: "Gate 4",
    image: "dietlogo.jpg",
    rgbColor: "200, 25, 25",
    status: "Enter",
    keys: getKeys(2, 3),
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
