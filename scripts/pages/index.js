import { getPhotographers } from "../utils/fetchPhotographers.js";
import { photographerFactory } from "../factories/photographer.js";

async function displayData(photographers) {
  const photographersSection = document.querySelector(".photographer_section");

  // For each photographer
  photographers.forEach((photographer) => {
    photographersSection.appendChild(
      // Display the card create into the factory
      photographerFactory(photographer).getUserCardDOM()
    );
  });
}

async function init() {
  // Get the photographers data
  const { photographers } = await getPhotographers("data");
  // And display it
  displayData(photographers);
}

init();
