const modal = document.querySelector(".modal");
const modalContent = document.querySelector(".modal__content");
const modalBtn = document.querySelector(".modal__btn");

modalBtn.addEventListener("click", () => {
  modal.classList.remove("modal--active");
  score();
  displayStart();
});

function showModal(message) {
  modal.classList.add("modal--active");
  modalContent.innerHTML = `${message}`;
}
