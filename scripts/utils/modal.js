const body = document.querySelector("body");

// Display modal
function displayModal(thisModal) {
  const modal = document.getElementById(thisModal);

  modal.style.display = "flex";
  modal.setAttribute("aria-hidden", "false");

  // Remove scroll on body
  body.style.overflow = "hidden";

  // Remove focus of header and main
  handleFocus();

  // Focus an element when we display the modal
  if (thisModal === "contact_modal") {
    document.getElementById("first-name").focus({
      preventScroll: true,
    });
  } else if (thisModal === "media_modal") {
    document.querySelector(".arrow-right").focus();
  }
}

// Close the modal
function closeModal(thisModal) {
  const modal = document.getElementById(thisModal);

  modal.style.display = "none";
  modal.setAttribute("aria-hidden", "true");

  // Add scroll on body
  body.style.overflow = "scroll";

  // Remove attribute who block focus on header and main
  handleFocus();

  // Focus an element when we close the modal
  if (thisModal === "contact_modal") {
    document.querySelector(".contact_button").focus();
  } else if (thisModal === "media_modal") {
    document.querySelector(".media-link").focus({
      preventScroll: true,
    });
  }
}

// Key event
// If modal is open, detect escape for close it
const modals = document.querySelectorAll(".modal");
document.addEventListener("keydown", (e) => {
  modals.forEach((modal) => {
    if (modal.getAttribute("aria-hidden") === "false") {
      if (e.code === "Escape") {
        modal.querySelector(".close_button").click();
      }
    }
  });
});
