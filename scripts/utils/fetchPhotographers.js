async function getPhotographers() {
  return fetch("data/photographers.json").then((response) => response.json());
}
