const selectButton = document.querySelector(".select_button");
const listbox = document.querySelector(".listbox");
const options = document.querySelectorAll(".order-media");
const mediaContainer = document.querySelector(".media-container");

function selectOrder(medias) {
  selectButton.addEventListener("click", () => {
    // If button is collapsed when is clicked
    if (selectButton.getAttribute("aria-expanded") === "false") {
      // It becomes expanded
      selectButton.setAttribute("aria-expanded", "true");
      // Remove focus of header and main
      handleFocus();
      // The options becomes focusable according to their
      options.forEach((option) => {
        option.setAttribute("tabindex", getComputedStyle(option).order);
        // The first option is focus
        option.getAttribute("tabindex") === "1" && option.focus();
      });
    } else {
      // If button is expanded when is clicked
      let saveOrder;
      options.forEach((option) => {
        // And if the target is an option
        if (document.activeElement === option) {
          // We save the order of the target
          saveOrder = getComputedStyle(option).order;
          options.forEach((option) => {
            if (option.getAttribute("aria-selected") === "true") {
              // And we apply to the oldest selected option
              option.style.order = saveOrder;
            }
            // We turn all the options to selected false
            option.setAttribute("aria-selected", "false");
          });
          // We change the activedescendant with the new selected option
          listbox.setAttribute("aria-activedescendant", option.id);
          // We change the selected to true for the option selected
          option.setAttribute("aria-selected", "true");
          // We change his order
          option.style.order = "1";

          // Sort medias
          switch (option.id) {
            case "popularity":
              medias.sort((a, b) => b.likes - a.likes);
              break;
            case "date":
              medias.sort((a, b) => sortObject(b.date, a.date));
              break;
            case "title":
              medias.sort((a, b) => sortObject(a.title, b.title));
              break;
          }

          // Replace each child for reorder gallery
          medias.forEach((media, i) => {
            mediaContainer.replaceChild(
              mediaFactory(media).getGalleryCard(),
              mediaContainer.children[i]
            );
          });
          // And relaunch the script for closeup view and likes
          closeupView();
          like();
        }
      });
      // Remove tabindex who block focus on header and main
      // and the focus on each option
      handleFocus();
      // We collapsed and focus the button
      selectButton.setAttribute("aria-expanded", "false");
      selectButton.focus();
    }
  });
}

// Generic function for sort
function sortObject(a, b) {
  if (a < b) {
    return -1;
  }
  if (a > b) {
    return 1;
  }
  return 0;
}

// Key event
document.addEventListener("keydown", (e) => {
  if (selectButton.getAttribute("aria-expanded") === "true") {
    switch (e.code) {
      case "Escape":
      case "ArrowLeft":
        selectButton.focus();
        selectButton.click();
        break;
      case "ArrowDown":
        e.preventDefault();
        let nextTab =
          parseInt(document.activeElement.getAttribute("tabindex")) + 2;
        options.forEach((option) => {
          if (option.getAttribute("tabindex") == nextTab) {
            option.focus();
          } else if (nextTab > 5 && option.getAttribute("tabindex") == 1) {
            option.focus();
          }
        });
        break;
      case "ArrowUp":
        e.preventDefault();
        let previousTab =
          parseInt(document.activeElement.getAttribute("tabindex")) - 2;
        options.forEach((option) => {
          if (option.getAttribute("tabindex") == previousTab) {
            option.focus();
          } else if (previousTab < 1 && option.getAttribute("tabindex") == 5) {
            option.focus();
          }
        });
        break;
      case "ArrowRight":
        selectButton.click();
        break;
      default:
        options.forEach((option) => {
          if (e.key.toLowerCase() == option.textContent[0].toLowerCase()) {
            option.focus();
          }
        });
    }
  } else {
    if (document.activeElement === selectButton && e.code === "ArrowRight") {
      selectButton.click();
    }
  }
});
