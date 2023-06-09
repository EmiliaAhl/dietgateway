let gatesHTML = "";

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
              <button class="gate-butt">${gate.status}</button>
            </div>
            <div class="gate-status-locks">
              ${gate.keys}
            </div>
          </div>
        </div>
  `;
});

document.querySelector(".js-gate-grid").innerHTML = gatesHTML;
