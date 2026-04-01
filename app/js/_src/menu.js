const burgerBtns = document.querySelectorAll(".burger");
const popup = document.querySelector(".popup-menu");
const body = document.querySelector("body");

if (popup) {
  burgerBtns.forEach((btn) => btn.addEventListener("click", togglePopup));
  function togglePopup(e) {
    popup.classList.toggle("active");
    body.classList.toggle("no-scroll");
    if (e.target.classList.contains("active"))
      allBurgersClose();
    else
      allBurgersOpen();

  }

  function allBurgersClose() {
    burgerBtns.forEach((btn) => btn.classList.remove("active"));
  }
  function allBurgersOpen() {
    burgerBtns.forEach((btn) => btn.classList.add("active"));
  }
}
