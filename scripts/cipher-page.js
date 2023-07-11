let ciphersHTML = "";

const ciphers = [
  {
    name: "Em cipher",
    image: "em_cipher.jpg",
  },
];

ciphers.forEach((cipher) => {
  ciphersHTML += `
  <div class="cipher-container">
    <div class="cipher-label">
      ${cipher.name}
    </div>
    <div class="cipher-image-container">
      <a target='_blank' href="https://emiliaahl.github.io/dietgateway/assets/cipher/${cipher.image}">
        <img class="cipher-image" src="assets/cipher/${cipher.image}" />
      </a>
    </div>
    <a href="https://emiliaahl.github.io/dietgateway/assets/cipher/${cipher.image}" download>
    <div class="cipher-download">
      Click to download
    </div>
    </a>
  </div>
  `;
});

document.querySelector(".cipher-grid").innerHTML = ciphersHTML;