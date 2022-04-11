function like() {
  const hearts = document.querySelectorAll(".heart");
  const totalLikes = document.querySelector(".total-likes");

  hearts.forEach((heart) => {
    heart.addEventListener("click", () => {
      if (heart.getAttribute("fav") === "false") {
        // Add one like
        heart.previousElementSibling.textContent++;
        totalLikes.textContent++;
        // and mark it
        heart.setAttribute("fav", "true");
      } else {
        // Remove one like
        heart.previousElementSibling.textContent--;
        totalLikes.textContent--;
        // and mark it
        heart.setAttribute("fav", "false");
      }
    });
  });
}
