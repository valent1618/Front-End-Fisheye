import { getPhotographers } from "../utils/fetchPhotographers.js";
import { photographerFactory } from "../factories/photographer.js";
import { mediaFactory } from "../factories/media.js";
import { modalEvent } from "../components/modal.js";
import { submitFormEvent } from "../components/contactForm.js";
import { selectOrder } from "../components/select-order.js";
import { closeupView, mediaModalEvent } from "../components/mediaModal.js";
import { like } from "../components/like.js";

async function getData() {
  // Get photographers and media data
  const { photographers, media } = await getPhotographers("../data");

  // Get id of the photographer selected with URL param
  let params = new URLSearchParams(document.location.search);
  let idPhotograph = parseInt(params.get("id"), 10);

  // Create variable for put the datas
  let goodPhotographer = {};
  let goodMedias = [];

  // Get only the data of the photographer selected
  photographers.forEach((photographer) => {
    if (photographer.id === idPhotograph) {
      goodPhotographer = photographer;
    }
  });
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
  const contactTitle = document.querySelector("#contact-title");

  // Completed the photograph header with the data
  photographHeader.prepend(
    photographerFactory(photographer).getInfoPhotographHeader()
  );
  photographHeader.appendChild(photographerFactory(photographer).img);

  // Sort medias by popularity
  medias.sort((a, b) => b.likes - a.likes);
  // Completed the gallery with the data
  // and count the total likes
  let totalLikes = 0;
  medias.forEach((media) => {
    mediaContainer.appendChild(mediaFactory(media).getGalleryCard());
    totalLikes += media.likes;
  });

  // Add the total likes to the likePrice;
  likePrice.querySelector(".total-likes").textContent = totalLikes;
  // Add price to the like price
  likePrice.appendChild(photographerFactory(photographer).tjm);

  // Add name of the photographer to the contact title
  contactTitle.innerHTML = `Contactez-moi<br>${photographer.name}`;
}

function launchScript(medias) {
  // Launch script for modal event
  modalEvent();
  // Launch script for contact form
  submitFormEvent();
  // Launch script for the button select order
  selectOrder(medias);
  // Launch scripts for the media modal
  closeupView();
  mediaModalEvent();
  // Launch script for the like
  like();
}

async function init() {
  // Get the data of the photographer previously selected
  const { goodPhotographer, goodMedias } = await getData();
  // And display it
  displayData(goodPhotographer, goodMedias);
  // Launch scripts
  launchScript(goodMedias);
}

init();
