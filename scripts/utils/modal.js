// Handle focus on elements and their children
function recursiveUnfocusable(el) {
  el.setAttribute("tabindex", "-1");
  [...el.children].forEach(recursiveUnfocusable);
}
function recursiveFocusable(el) {
  el.removeAttribute("tabindex");
  [...el.children].forEach(recursiveFocusable);
}
// Handle focus on header and main
// Set attribute aria-hidden
function handleFocus() {
  const banner = document.getElementById("banner");
  const headerLink = document.querySelector(".header-link");
  const main = document.getElementById("main");

  if (main.getAttribute("tabindex")) {
    banner.setAttribute("aria-hidden", "true");
    main.setAttribute("aria-hidden", "true");
    headerLink.removeAttribute("tabindex");
    recursiveFocusable(main);
  } else {
    banner.setAttribute("aria-hidden", "false");
    main.setAttribute("aria-hidden", "false");
    headerLink.setAttribute("tabindex", "-1");
    recursiveUnfocusable(main);
  }
}

const body = document.querySelector("body");

// Display modal
function displayModal(thisModal) {
  const modal = document.getElementById(thisModal);
  const dialog = modal.querySelector("dialog");

  modal.style.display = "flex";
  dialog.setAttribute("open", "true");

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
  const dialog = modal.querySelector("dialog");

  modal.style.display = "none";
  dialog.setAttribute("open", "false");

  // Add scroll on body
  body.style.overflow = "scroll";

  // Remove attribute who block focus on header and main
  handleFocus();

  // Focus an element when we close the modal
  if (thisModal === "contact_modal") {
    document.querySelector(".contact_button").focus();
  } else if (thisModal === "media_modal") {
    document.querySelector(".media-link").focus();
  }
}

// Key event
// If modal is open, detect escape for close it
const modals = document.querySelectorAll(".modal");

document.addEventListener("keydown", (e) => {
  modals.forEach((modal) => {
    if (modal.children[0].getAttribute("open") === "true") {
      if (e.code === "Escape") {
        modal.querySelector(".close_button").click();
      }
    }
  });
});
