const slider = document.querySelectorAll('.swiper-container');
/* для множественных одинаковых свайперов */
/* для различных свайперов - можно было обернуть в функцию с доп параметрами */
/* slider.forEach(n => {
  let mySwiper = new Swiper(n, {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  })
  
}) */



let mySwiper = new Swiper(slider[0], {
  slidesPerView: 1,
  spaceBetween: 10,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '#s-b-next-1',
    prevEl: '#s-b-prev-1',
  },
})

console.log("slider-lenght: ", slider.length)
for (let i = 1; i < slider.length; i++) {
 /*  const element = array[i]; */

  let mySwiper = new Swiper(slider[i], {
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
}


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