function photographerFactory(data) {
  const { name, city, country, tagline, price, portrait } = data;

  const picture = `assets/photographers/${portrait}`;

  function getUserCardDOM() {
    const article = document.createElement("article");
    const img = document.createElement("img");
    img.setAttribute("src", picture);
    const h2 = document.createElement("h2");
    h2.textContent = name;
    const location = document.createElement("h3");
    location.textContent = `${city}, ${country}`;
    const slogan = document.createElement("p");
    slogan.textContent = tagline;
    const tjm = document.createElement("p");
    tjm.textContent = `${price}€/jour`;
    tjm.className = "price";
    article.appendChild(img);
    article.appendChild(h2);
    article.appendChild(location);
    article.appendChild(slogan);
    article.appendChild(tjm);
    return article;
  }
  return { name, picture, getUserCardDOM };
}
