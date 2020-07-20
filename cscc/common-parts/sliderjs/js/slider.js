const slider = document.querySelectorAll('.swiper-container');

slider.forEach(n => {
  let mySwiper = new Swiper(n, {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    
   /*  pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
    },   */
    
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  })
  
})


