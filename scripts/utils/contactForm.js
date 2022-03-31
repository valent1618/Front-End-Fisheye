const modalContainer = document.getElementById("contact_modal");
const modal = document.querySelector(".modal");

function displayModal() {
  modalContainer.style.display = "block";
  modalContainer.style.animation = "0.5s appear forwards";
  modal.style.animation = "0.5s expand forwards";
}

function closeModal() {
  modalContainer.style.display = "none";
}
