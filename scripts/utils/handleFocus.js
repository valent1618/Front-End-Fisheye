// Handle focus on elements and their children
function recursiveUnfocusable(el) {
  if(el.getAttribute("tabindex")) {
    el.setAttribute("OldTabIndex", el.getAttribute("tabindex"))
  }
    el.setAttribute("tabindex", "-1");
    [...el.children].forEach(recursiveUnfocusable);
}
function recursiveFocusable(el) {
  if(el.getAttribute("OldTabIndex")) {
    el.setAttribute("tabindex", el.getAttribute("OldTabIndex"))
  } else {
    el.removeAttribute("tabindex");
    [...el.children].forEach(recursiveFocusable);
  }
}
// Handle focus on header and main
// Set attribute aria-hidden
export function handleFocus() {
  const banner = document.getElementById("banner");
  const headerLink = document.querySelector(".header-link");
  const main = document.getElementById("main");

  if (main.getAttribute("tabindex")) {
    banner.setAttribute("aria-hidden", "false");
    main.setAttribute("aria-hidden", "false");
    headerLink.removeAttribute("tabindex");
    recursiveFocusable(main);
  } else {
    banner.setAttribute("aria-hidden", "true");
    main.setAttribute("aria-hidden", "true");
    headerLink.setAttribute("tabindex", "-1");
    recursiveUnfocusable(main);
  }
}
