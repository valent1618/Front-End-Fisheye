import { modalEvent } from "./modal.js";

const dialog = document.querySelector(".dialog-contact");
const form = document.querySelector(".contact-form");

export function submitFormEvent() {
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
    closeButton.className = "button form_button close-modal";
    closeButton.setAttribute("type", "button");
    closeButton.setAttribute("modal", "contact_modal");
    closeButton.setAttribute("alt", "Ferme la modal");
    closeButton.textContent = "Fermer";

    // Remove the form
    form.style.display = "none";

    // Add the thanks message and the close button
    dialog.appendChild(thanksMessage);
    dialog.appendChild(closeButton);

    // Relaunch the modal event for the close button
    modalEvent();
  });
}
