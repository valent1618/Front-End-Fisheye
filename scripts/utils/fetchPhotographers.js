async function getPhotographers(source) {
  return fetch(`${source}/photographers.json`).then((response) =>
    response.json()
  );
}
