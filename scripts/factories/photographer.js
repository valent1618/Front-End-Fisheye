function photographerFactory(data) {
  const { name, city, country, tagline, price, portrait } = data;

  const picture = `assets/photographers/${portrait}`;

  function getUserCardDOM() {
    const article = document.createElement("article");
    const img = document.createElement("img");
    img.setAttribute("src", picture);
    img.setAttribute("alt", `Photo de ${name}`);
    const h2 = document.createElement("h2");
    h2.textContent = name;
    h2.setAttribute("aria-label", "Nom et prénom");
    const location = document.createElement("h3");
    location.textContent = `${city}, ${country}`;
    location.setAttribute("aria-label", "Localisation");
    const slogan = document.createElement("p");
    slogan.textContent = tagline;
    slogan.setAttribute("aria-label", "Slogan");
    const tjm = document.createElement("p");
    tjm.textContent = `${price}€/jour`;
    tjm.className = "price";
    tjm.setAttribute("aria-label", "Prix par jour");
    article.appendChild(img);
    article.appendChild(h2);
    article.appendChild(location);
    article.appendChild(slogan);
    article.appendChild(tjm);
    return article;
  }
  return { name, picture, getUserCardDOM };
}
