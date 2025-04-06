const newArrivalsSwiper = new Swiper('.new-arrivals-slider', {
    effect: 'coverflow', 
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 3,                
    loop: true,

    coverflowEffect: {
      rotate: 40,       
      stretch: 0,       
      depth: 100,       
      modifier: 1,      
      slideShadows: true,
    },

    pagination: {
        el: '.swiper-pagination',
        clickable: true, 
    },

 
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});