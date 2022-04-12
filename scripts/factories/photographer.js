export function photographerFactory(data) {
  const { name, id, city, country, tagline, price, portrait } = data;

  // create article
  const article = document.createElement("article");

  // create image
  const img = document.createElement("img");
  img.setAttribute("src", `../assets/photographers/${portrait}`);
  img.setAttribute("alt", `Photo de ${name}`);

  // create infoContainer
  const infoContainer = document.createElement("div");
  infoContainer.className = "info-container";

  // create h3 for the location
  const location = document.createElement("h3");
  location.textContent = `${city}, ${country}`;
  location.className = "location";
  location.setAttribute("aria-label", "Localisation");

  // create p for the slogan
  const slogan = document.createElement("p");
  slogan.textContent = tagline;
  slogan.className = "slogan";
  slogan.setAttribute("aria-label", "Slogan");

  // create h3 for the price
  const tjm = document.createElement("h3");
  tjm.textContent = `${price}€ / jour`;
  tjm.className = "price";
  tjm.setAttribute("aria-label", "Prix par jour");

  //
  // Functions components

  // create user card for index
  function getUserCardDOM() {
    // add class to article
    article.className = "user-card";

    // create link
    const link = document.createElement("a");
    link.className = "link";
    link.setAttribute("href", `pages/photographer.html?id=${id}`);
    link.setAttribute("aria-labelledby", "name");

    // change source for index
    img.setAttribute("src", `assets/photographers/${portrait}`);

    // create h2 for the name
    const h2 = document.createElement("h2");
    h2.textContent = name;
    h2.setAttribute("id", "name");

    // Put image and h2 into the link
    link.appendChild(img);
    link.appendChild(h2);

    // create p for the price
    const tjmIndex = document.createElement("p");
    tjmIndex.textContent = `${price}€/jour`;
    tjmIndex.className = "price";
    tjmIndex.setAttribute("aria-label", "Prix par jour");

    // Put location, slogan and price into the infoContainer
    infoContainer.appendChild(location);
    infoContainer.appendChild(slogan);
    infoContainer.appendChild(tjmIndex);

    // Put link and infoContainer into the article
    article.appendChild(link);
    article.appendChild(infoContainer);

    return article;
  }

  function getInfoPhotographHeader() {
    // add aria-label
    article.setAttribute("aria-label", `Information sur ${name}`);

    // create h1 for the name
    const h1 = document.createElement("h1");
    h1.textContent = name;
    h1.setAttribute("id", "name");
    h1.setAttribute("aria-label", "Nom et prénom");

    // Put location, slogan and price into the infoContainer
    infoContainer.appendChild(location);
    infoContainer.appendChild(slogan);

    // Put infoContainer into the article
    article.appendChild(h1);
    article.appendChild(infoContainer);

    return article;
  }

  return { getUserCardDOM, getInfoPhotographHeader, img, tjm };
}
