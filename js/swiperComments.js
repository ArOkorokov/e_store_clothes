'use strict'




const swiperComments = new Swiper('.swiper__comments', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 3.2,
    spaceBetween: 20,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      480: {
        slidesPerView: 1.2,
      },
      545: {
        slidesPerView: 1.4,
      },
      767.8: {
        slidesPerView: 2,
      },
      991.8: {
        slidesPerView: 2.5,
      },
      1280: {
        slidesPerView: 3.2,

      }
    }
  });