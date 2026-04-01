class CustomSelect {
  constructor(customSelect) {
    this.customSelect = customSelect;
    this.input = customSelect.querySelector("input");
    this.preview = customSelect.querySelector(".custom-select__preview");
    this.list = customSelect.querySelector(".custom-select__list");
    this.allItems = customSelect.querySelectorAll(".custom-select__item");

    this.currentItem = null;
    this.init();
  }

  init() {
    this.handleClick();
  }

  handleClick() {
    this.customSelect.addEventListener("click", (e) => this.choiceEvent(e));
    document.addEventListener("click", (e) =>
      !e.target.closest(".custom-select") ? this.closeList() : null,
    );
  }
  choiceEvent(e) {
    const target = e.target;
    if (target.closest(".custom-select__preview")) this.showList();
    if (target.closest(".custom-select__item")) this.selectItem(target);
  }

  selectItem(target) {
    this.currentItem = target;
    this.activateItem();
    this.changeStates();
    this.closeList();
  }

  activateItem() {
    this.allItems.forEach((item) => item.classList.remove("active"));
    this.currentItem.classList.add("active");
  }

  changeStates() {
    this.input.value = this.getItemValue();
    this.preview.textContent = this.currentItem.textContent;
  }

  getItemValue() {
    return this.currentItem.dataset.customSelectValue;
  }

  showList() {
    if (this.list.classList.contains("show")) {
      this.list.classList.remove("show");
    } else {
      this.list.classList.add("show");
    }
  }
  closeList() {
    this.list.classList.remove("show");
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const customSelects = document.querySelectorAll(".custom-select");
  customSelects.forEach((customSelect) => new CustomSelect(customSelect));
});