const modal = document.getElementById("media_modal");
const arrows = document.querySelectorAll(".media-arrow");
const article = document.getElementById("article-closeup");
const image = document.getElementById("img-closeup");
const imageTitle = document.getElementById("img-closeup-title");

// create video
const vid = document.createElement("video");
vid.setAttribute("controls", "true");
vid.setAttribute("autoplay", "true");

function closeupView() {
  const links = document.querySelectorAll(".media-link");

  links.forEach((link, i) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();

      // Change links for arrows
      if (links[i - 1]) {
        arrows[0].setAttribute("href", links[i - 1].href);
      } else {
        arrows[0].setAttribute("href", links[links.length - 1].href);
      }
      if (links[i + 1]) {
        arrows[1].setAttribute("href", links[i + 1].href);
      } else {
        arrows[1].setAttribute("href", links[0].href);
      }

      let isImage = true;
      if (link.getAttribute("media") === "image") {
        image.setAttribute("src", link.href);
        image.setAttribute("alt", `Photo : ${link.title}`);
      } else {
        vid.setAttribute("aria-label", `Vidéo : ${link.title}`);
        vid.innerHTML = `<source src=${link.href} type="video/mp4">
        <p>Votre navigateur ne prend pas en charge les vidéos HTML5. Voici <a href=${link.href}>un lien pour télécharger la vidéo</a>.</p>`;
        isImage = false;
      }

      // Replace the title
      imageTitle.textContent = link.title;

      // Replace the media
      article.replaceChild(isImage ? image : vid, article.children[0]);

      // Replace the article
      article.parentNode.replaceChild(article, article);

      // Display the modal if it is not already open
      if (modal.getAttribute("aria-hidden") === "true") {
        displayModal("media_modal");
      }
    });
  });
}

// If arrow is click
// Redirect click to the media
arrows.forEach((arrow) => {
  arrow.addEventListener("click", (e) => {
    e.preventDefault();
    const clickedLink = arrow.href;
    const links = document.querySelectorAll(".media-link");
    links.forEach((link) => {
      if (link.href === clickedLink) {
        link.click();
      }
    });
  });
});

// Key event
// If modal is open, detect arrow for change media
document.addEventListener("keydown", (e) => {
  if (modal.getAttribute("aria-hidden") === "false") {
    if (e.code === "ArrowRight") {
      arrows[1].click();
    }
    if (e.code === "ArrowLeft") {
      arrows[0].click();
    }
  }
});
