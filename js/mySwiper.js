'use strict'


const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 5,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    speed: 3000,
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      480: {
        slidesPerView: 1,
      },
      767.8: {
        slidesPerView: 3,
      },
      991.8: {
        slidesPerView: 4,
      },
      1280: {
        slidesPerView: 5,
      }
    }
  });