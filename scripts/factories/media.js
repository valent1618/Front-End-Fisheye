function mediaFactory(data) {
  const { photographerId, title, image, video, likes } = data;

  // Create variable source depend of the media
  let source = image
    ? `../assets/photos/${photographerId}/${image}`
    : `../assets/photos/${photographerId}/${video}`;

  // create article
  const article = document.createElement("article");
  article.className = "gallery-card";

  // create image
  const img = document.createElement("img");
  img.setAttribute("src", source);
  img.setAttribute("alt", `Photo de ${title}`);

  // create video and prevent the not support of HTML5
  const vid = document.createElement("video");
  vid.innerHTML = `<source src=${source} type="video/mp4">
  <p>Votre navigateur ne prend pas en charge les vidéos HTML5. Voici <a href=${source}>un lien pour télécharger la vidéo</a>.</p>`;

  // create div for the info container
  const infoContainer = document.createElement("div");
  infoContainer.className = "info-container";

  // create p for the title
  const imgTitle = document.createElement("p");
  imgTitle.textContent = title;
  imgTitle.className = "img-title";
  imgTitle.setAttribute("aria-label", "Titre de l'image");

  // create div for the like container
  const likeContainer = document.createElement("div");
  likeContainer.className = "like-container";

  // create p for the like number
  const likeNumber = document.createElement("p");
  likeNumber.textContent = likes;
  likeNumber.className = "like-number";
  likeContainer.setAttribute("aria-label", "Nombre de like");

  // create heart icone
  const heart = document.createElement("i");
  heart.className = "fa-solid fa-heart";

  function getGalleryCard() {
    // put likeNumber and heart into likeContainer
    likeContainer.appendChild(likeNumber);
    likeContainer.appendChild(heart);

    // put title and likeContainer into infoContainer
    infoContainer.appendChild(imgTitle);
    infoContainer.appendChild(likeContainer);

    // put image (or video) and infoContainer into the article
    image ? article.appendChild(img) : article.appendChild(vid);
    article.appendChild(infoContainer);

    return article;
  }

  return { getGalleryCard };
}
