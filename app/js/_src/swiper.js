class WheelInSwiper {
  constructor(element, swiperOption) {
    this.element = document.querySelector(element);
    this.swiperOption = swiperOption;
    this.swiper;
    this.wheelTimeout;
    this.conuter= 0;

    this.initWheelSwiper();
  }

  initWheelSwiper() {
    if (!this.element) return;
    this.swiper = new Swiper(this.element, this.swiperOption);
    this.handleWheel();
  }

  handleWheel() {
    this.element.addEventListener(
      "wheel", (e) => {
        e.preventDefault();

        clearTimeout(this.wheelTimeout);
        this.wheelTimeout = setTimeout(() => {
          console.log(this.conuter);
          const treshhold = 3;
          const delta = Math.abs(e.deltaY) > Math.abs(e.deltaX) ? e.deltaY : e.deltaX;

          if (delta > treshhold) {
            this.swiper.slideNext();
          } else if (delta < -treshhold) {
            this.swiper.slidePrev();
          }
        }, 50);
      },
      { passive: false }
    );
  }
}
new Swiper(".front-block__swiper", {
  loop: true,
  slidesPerView: 'auto',
  spaceBetween: 10,
  speed: 1500,
  autoplay: {
    delay: 200,
  },
  // Включаем навигацию для тачпада
  touchEventsTarget: "container",
});

new WheelInSwiper(".systemic-process__swiper", {
  slidesPerView: "auto",
  spaceBetween: 18,
  speed: 1000,
  scrollbar: {
    el: ".swiper-scrollbar",
    draggable: true,
    // Добавляем обработчик drag для скроллбара
    dragClass: "swiper-scrollbar-drag",
    hide: false,
    snapOnRelease: true,
  },
  touchEventsTarget: "container",
});