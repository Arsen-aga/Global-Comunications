// Изменение времени в модальном окне, по нажатию на табы

const timeToggle = document.querySelectorAll(".time-check input");
const timeInput = document.querySelector(".time-input");

if (timeToggle.length && timeInput) {
  timeToggle.forEach((btn) => {
    btn.addEventListener("click", function () {
      if (btn.value === "По времени" && btn.checked) {
        timeInput.disabled = false;
      } else {
        timeInput.disabled = true;
        timeInput.value = "";
      }
    });
  });
}