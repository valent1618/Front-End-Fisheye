// Fetch datas depend of where the call is done
export async function getPhotographers(source) {
  return fetch(`${source}/photographers.json`).then((response) =>
    response.json()
  );
}
