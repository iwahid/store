const slider = document.querySelectorAll('.swiper-container');

let mySwiper = new Swiper(slider[0], {
  slidesPerView: 4,
  spaceBetween: 0,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  navigation: {
    nextEl: '#s-b-next-2',
    prevEl: '#s-b-prev-2',
  },
})




/* let mySwiper1 = new Swiper(slider[1], {
  slidesPerView: 4,
  spaceBetween: 0,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '#s-b-next-2',
    prevEl: '#s-b-prev-2',
  },
})

let mySwiper2 = new Swiper(slider[2], {
  slidesPerView: 4,
  spaceBetween: 0,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '#s-b-next-2',
    prevEl: '#s-b-prev-2',
  },
})

let mySwiper3 = new Swiper(slider[3], {
  slidesPerView: 4,
  spaceBetween: 0,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '#s-b-next-2',
    prevEl: '#s-b-prev-2',
  },
})

 */