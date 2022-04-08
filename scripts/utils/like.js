function like() {
  const hearts = document.querySelectorAll(".heart");
  const totalLikes = document.querySelector(".total-likes");

  hearts.forEach((heart) => {
    const input = heart.querySelector("input");
    input.addEventListener("click", () => {
      if (input.checked) {
        // If the input is cheched
        // we add one like
        heart.previousElementSibling.textContent++;
        totalLikes.textContent++;
      } else {
        // else we remove one like
        heart.previousElementSibling.textContent--;
        totalLikes.textContent--;
      }
    });
  });
}
