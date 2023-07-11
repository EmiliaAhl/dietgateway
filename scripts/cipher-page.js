let ciphersHTML = "";

const ciphers = [
  {
    name: "Em cipher",
    image: "cipher/dietlogo.jpg",
    rgbColor: "220, 24, 78",
    keys: getKeys(1, 4),
    status: getStatus(1, 4),
  },
];

gates.forEach((gate) => {
  gatesHTML += `
  <div class="gate-container" style="border-color: rgb(${gate.rgbColor})">
          <div class="gate-label" style="background-color: rgb(${gate.rgbColor})">
            ${gate.name}
          </div>
          <div class="gate-image-container">
            <img class="gate-image" src="assets/${gate.image}" />
          </div>
          <div class="gate-status-container">
            <div class="gate-status-text">
              ${gate.status}
            </div>
            <div class="gate-status-locks">
              ${gate.keys}
            </div>
          </div>
        </div>
  `;
});

document.querySelector(".js-gate-grid").innerHTML = gatesHTML;