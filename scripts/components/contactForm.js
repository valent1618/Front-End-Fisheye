const form = document.querySelector(".contact-form");
const responseContainer = document.querySelector(".submit-response-container");
const message = document.querySelector(".submit-message");

export function submitFormEvent() {
  form.addEventListener("submit", (e) => {
    // Stop the classic action form
    e.preventDefault();

    // Log datas into the console
    for (let i = 0; i < 4; i++) {
      console.log(`${e.target[i].name} : ${e.target[i].value}`);
    }

    // Add message
    message.textContent = `Merci pour votre message ${e.target[0].value}`;

    // Remove the form
    form.style.display = "none";
    // Display the response
    responseContainer.style.display = "flex";
    responseContainer.setAttribute("display", "true");

    // Focus the close button
    responseContainer.querySelector(".close-modal").focus();    
  });
}
