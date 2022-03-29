function photographerFactory(data) {
  const { name, id, city, country, tagline, price, portrait } = data;

  const picture = `assets/photographers/${portrait}`;

  function getUserCardDOM() {
    // create article
    const article = document.createElement("article");

    // create link
    const link = document.createElement("a");
    link.setAttribute("href", `pages/photographer.html?${id}`);
    link.setAttribute("aria-labelledby", "name");

    // create image
    const img = document.createElement("img");
    img.setAttribute("src", picture);
    img.setAttribute("alt", "");

    // create h2 for the name
    const h2 = document.createElement("h2");
    h2.textContent = name;
    h2.setAttribute("id", "name");
    h2.setAttribute("aria-label", "Nom et prénom");

    // Put image and h2 into the link
    link.appendChild(img);
    link.appendChild(h2);

    // create paragraph
    const paragraph = document.createElement("div");

    // create h3 for the location
    const location = document.createElement("h3");
    location.textContent = `${city}, ${country}`;
    location.setAttribute("aria-label", "Localisation");

    // create p for the slogan
    const slogan = document.createElement("p");
    slogan.textContent = tagline;
    slogan.setAttribute("aria-label", "Slogan");

    // create p for the price
    const tjm = document.createElement("p");
    tjm.textContent = `${price}€/jour`;
    tjm.className = "price";
    tjm.setAttribute("aria-label", "Prix par jour");

    // Put location, slogan and price into the paragraph
    paragraph.appendChild(location);
    paragraph.appendChild(slogan);
    paragraph.appendChild(tjm);

    // Put link and paragraph into the article
    article.appendChild(link);
    article.appendChild(paragraph);

    return article;
  }

  return { name, picture, getUserCardDOM };
}
