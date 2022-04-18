export function mediaFactory(data) {
  const { id, photographerId, title, image, video, likes, date } = data;

  // Create variable source depend of the media
  let source = image
    ? `../assets/photos/${photographerId}/${image}`
    : `../assets/photos/${photographerId}/${video}`;

  // create article
  const article = document.createElement("article");
  article.className = "gallery-card";
  article.setAttribute("aria-describedby", `media-title-${id}`);
  article.setAttribute("likes", likes);
  article.setAttribute("date", date);
  article.setAttribute("title", title);

  // create a for link to lightbox
  const link = document.createElement("a");
  link.setAttribute("href", source);
  link.setAttribute("media", image ? "image" : "video");
  link.setAttribute("aria-label", `${title}, vue rapprochée`);
  link.className = "media-link";

  // create image
  const img = document.createElement("img");
  img.setAttribute("src", source);
  img.setAttribute("alt", `Photo : ${title}`);

  // create video and prevent the not support of HTML5
  const vid = document.createElement("video");
  vid.innerHTML = `<source src=${source} type="video/mp4" aria-label="Miniature vidéo : ${link.title}">
  <p>Votre navigateur ne prend pas en charge les vidéos HTML5. Voici <a href=${source}>un lien pour télécharger la vidéo</a>.</p>`;

  // create div for the info container
  const infoContainer = document.createElement("div");
  infoContainer.className = "info-container";

  // create h3 for the title
  const imgTitle = document.createElement("h3");
  imgTitle.textContent = title;
  imgTitle.className = "media-title";
  imgTitle.id = `media-title-${id}`;
  imgTitle.setAttribute("aria-label", "Titre de l'image");

  // create div for the like container
  const likeContainer = document.createElement("div");
  likeContainer.className = "like-container";

  // create h3 for the like number
  const likeNumber = document.createElement("h3");
  likeNumber.textContent = likes;
  likeNumber.className = "like-number";
  likeContainer.setAttribute("aria-label", "Nombre de likes");

  // create clickable heart
  const heart = document.createElement("button");
  heart.className = "heart";
  heart.setAttribute("fav", "false");
  heart.innerHTML = `
    <i class="fa-regular fa-heart"></i>
    <i class="fa-solid fa-heart"></i>`;
  heart.setAttribute("aria-label", "J'aime");

  function getGalleryCard() {
    // put image or video into the link
    image ? link.appendChild(img) : link.appendChild(vid);

    // put likeNumber and heart into likeContainer
    likeContainer.appendChild(likeNumber);
    likeContainer.appendChild(heart);

    // put title and likeContainer into infoContainer
    infoContainer.appendChild(imgTitle);
    infoContainer.appendChild(likeContainer);

    // put media and infoContainer into the article
    article.appendChild(link);
    article.appendChild(infoContainer);

    return article;
  }

  return { getGalleryCard };
}
