const headerLink = document.querySelector(".header-link");
const main = document.getElementById("main");
const contactButton = document.querySelector(".contact_button");
const modalContainer = document.getElementById("contact_modal");
const modal = document.querySelector(".modal");
const form = document.querySelector(".contact-form");

// Handle focus on elements and their children
function recursiveUnfocusable(el) {
  el.setAttribute("tabindex", "-1");
  [...el.children].forEach(recursiveUnfocusable);
}
function recursiveFocusable(el) {
  el.removeAttribute("tabindex");
  [...el.children].forEach(recursiveFocusable);
}

// Display modal
function displayModal() {
  modalContainer.style.display = "block";
  modal.setAttribute("open", "true");

  // Remove focus of header and main
  headerLink.setAttribute("tabindex", "-1");
  recursiveUnfocusable(main);

  // Add some animations
  modalContainer.style.animation = "0.5s appear forwards";
  modal.style.animation = "0.2s expand forwards";
  form.style.animation = "0.5s appear 0.2s forwards";
}

// Close the modal
function closeModal() {
  modalContainer.style.display = "none";
  modal.setAttribute("open", "false");

  // Remove attribute who block focus on header and main
  headerLink.removeAttribute("tabindex");
  recursiveFocusable(main);

  // Focus contact button
  contactButton.focus();
}

// Form handler
form.addEventListener("submit", (e) => {
  // Stop the classic action form
  e.preventDefault();

  // Log datas into the console
  for (let i = 0; i < 4; i++) {
    console.log(`${e.target[i].name} : ${e.target[i].value}`);
  }

  // Create the thanks message
  const thanksMessage = document.createElement("p");
  thanksMessage.className = "thanks-message";
  thanksMessage.textContent = `Merci pour votre message ${e.target[0].value}`;

  // Create button for close the modal after the thanks message
  const closeButton = document.createElement("button");
  closeButton.setAttribute("type", "button");
  closeButton.setAttribute("onclick", "closeModal()");
  closeButton.setAttribute("alt", "Ferme la modal");
  closeButton.className = "button form_button";
  closeButton.textContent = "Fermer";

  // Remove the form
  form.style.display = "none";

  // Add the thanks message and the close button
  modal.appendChild(thanksMessage);
  modal.appendChild(closeButton);
});
