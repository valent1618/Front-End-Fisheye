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
