async function getData() {
  // Récupère les datas des photographes et des médias
  const { photographers, media } = await getPhotographers("../data");

  // Récupère l'id du photographe
  let params = new URLSearchParams(document.location.search);
  let idPhotograph = parseInt(params.get("id"), 10);

  // Déclare les variables qui vont accueillir les datas
  let goodPhotographer = {};
  let goodMedias = [];

  // Parcours les photographes pour trouver celui qui correspond à l'id de l'URL
  photographers.forEach((photographer) => {
    if (photographer.id === idPhotograph) {
      goodPhotographer = photographer;
    }
  });

  // Parcours les medias pour trouver ceux qui correspondes à l'id de l'URL
  media.forEach((picture) => {
    if (picture.photographerId === idPhotograph) {
      goodMedias.push(picture);
    }
  });

  return { goodPhotographer, goodMedias };
}

async function displayData(photographer, medias) {
  const photographHeader = document.querySelector(".photograph-header");
  const mediaContainer = document.querySelector(".media-container");
  const likePrice = document.querySelector(".like-price");

  photographHeader.prepend(
    photographerFactory(photographer).getInfoPhotographHeader()
  );
  photographHeader.appendChild(photographerFactory(photographer).img);

  medias.forEach((media) =>
    mediaContainer.appendChild(mediaFactory(media).getGalleryCard())
  );

  likePrice.appendChild(photographerFactory(photographer).tjm);
}

async function init() {
  const { goodPhotographer, goodMedias } = await getData();
  displayData(goodPhotographer, goodMedias);
}

init();
