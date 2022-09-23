"strict mode";

// variables
const button = document.querySelector(".btn");
const modal = document.querySelector(".register-modal");
const overlay = document.querySelector(".overlay");

// functions to add and remove the hidden class
const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

// action to remove and add the hidden class when the button is clicked
button.addEventListener("click", openModal);
overlay.addEventListener("click", closeModal);

// remove the hidden class when the esc button is clicked
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});
