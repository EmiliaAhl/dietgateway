//Drop down menu

let gateDropHTML = "";

gates.forEach((gate) => {
  gateDropHTML += `
    <a href="https://emiliaahl.github.io/dietgateway/${gate.link}.html">
      <div>${gate.name}</div>
    </a>
  `;
});

document.querySelector(".js-gate-down").innerHTML = gateDropHTML;

function dropDown() {
  const dropElement = document.querySelector(".js-gate-down");
  if (!dropElement.classList.contains("visible")) {
    dropElement.classList.add("visible");
  } else {
    dropElement.classList.remove("visible");
  }
}

function resetBox() {
  const boxElement = document.querySelector(".js-reset-box");
  if (!boxElement.classList.contains("visible")) {
    boxElement.classList.add("visible");
  } else {
    boxElement.classList.remove("visible");
  }
}

document.addEventListener('click', event => {
  if (document.querySelector('.js-gate-down').classList.contains('visible') && event.target.closest('#down-menu') === null) {
    document.querySelector('.js-gate-down').classList.remove('visible');
  }
})

document.addEventListener('click', event => {
  if (document.querySelector('.js-reset-box').classList.contains('visible') && event.target.closest('#reset-box') === null) {
    document.querySelector('.js-reset-box').classList.remove('visible');
  }
})