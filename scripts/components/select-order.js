const selectButton = document.getElementById("order-by");
const listbox = document.querySelector("#listbox-order-media");
const options = document.querySelectorAll(".order-media");

selectButton.addEventListener("click", (e) => {
  // If button is collapsed when is clicked
  if (selectButton.getAttribute("aria-expanded") === "collapsed") {
    // It becomes expanded
    selectButton.setAttribute("aria-expanded", "expanded");
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
      }
      // Options are no longer focusable
      option.setAttribute("tabindex", -1);
    });
    // We collapsed and focus the button
    selectButton.setAttribute("aria-expanded", "collapsed");
    selectButton.focus();
  }
});
