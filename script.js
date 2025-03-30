const newArrivalsSwiper = new Swiper('.new-arrivals-slider', {
    effect: 'coverflow', // Включаем эффект Coverflow
    grabCursor: true, // Курсор в виде руки при перетаскивании
    centeredSlides: true, // Активный слайд будет по центру
    slidesPerView: 3, // Показываем 3 слайда (центральный и части боковых)
                      // ИЛИ можно использовать 'auto' и задать ширину .swiper-slide
    loop: true, // Бесконечная прокрутка
    // spaceBetween: 0, // Для Coverflow часто лучше 0 или небольшое отрицательное значение

    coverflowEffect: {
      rotate: 40,       // Угол поворота боковых слайдов
      stretch: 0,       // Растяжение пространства между слайдами (обычно 0)
      depth: 100,       // Глубина (эффект удаления боковых слайдов)
      modifier: 1,      // Модификатор эффекта (1 = стандартный)
      slideShadows: true, // Включаем тени для слайдов (создает объем)
    },

    // Добавляем пагинацию (точки)
    pagination: {
        el: '.swiper-pagination',
        clickable: true, // Делаем точки кликабельными
    },

    // Добавляем кнопки навигации (стрелки)
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});