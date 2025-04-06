// --- Инициализация слайдера Новинок (с уникальными классами управления) ---
const newArrivalsSwiper = new Swiper('.new-arrivals-slider', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto', // 'auto' часто лучше для coverflow
    loop: true,
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 150,
      modifier: 1,
      slideShadows: true,
    },
    pagination: {
        el: '.new-arrivals-pagination', // Уникальный класс пагинации
        clickable: true,
    },
    navigation: {
        nextEl: '.new-arrivals-button-next', // Уникальный класс кнопки "вперед"
        prevEl: '.new-arrivals-button-prev', // Уникальный класс кнопки "назад"
    },
});


// --- Инициализация Вложенных Слайдеров Рекомендаций ---

// 1. Инициализация ВЕРТИКАЛЬНОГО слайдера ЖАНРОВ
const genresSwiper = new Swiper('.swiper-genres', {
    direction: 'vertical',
    slidesPerView: 1,
    spaceBetween: 30,
    mousewheel: true,
    pagination: {
      el: '.genre-pagination', // Уникальный класс пагинации жанров
      clickable: true,
    },
    // Отключим loop для вертикального, чтобы было понятно начало/конец
    // loop: false,
});

// 2. Инициализация ГОРИЗОНТАЛЬНЫХ слайдеров КНИГ

// Функция для инициализации слайдера книг (чтобы не повторять код)
function initBookSwiper(selector) {
  return new Swiper(selector, {
    slidesPerView: 4, // Показываем 4 по умолчанию
    spaceBetween: 15,
    navigation: {
      nextEl: `${selector} .book-swiper-button-next`, // Динамический селектор
      prevEl: `${selector} .book-swiper-button-prev`, // Динамический селектор
    },
    breakpoints: {
        // На экранах <= 1024px показываем 3 слайда
        1024: {
          slidesPerView: 3,
          spaceBetween: 15
        },
        // На экранах <= 768px показываем 2 слайда
        768: {
          slidesPerView: 2,
          spaceBetween: 10
        },
        // На экранах <= 480px показываем 1 слайд
        480: {
          slidesPerView: 1,
          spaceBetween: 10
        }
      }
  });
}

// Инициализируем каждый слайдер книг
const fantasySwiper = initBookSwiper('.swiper-books-fantasy');
const detectiveSwiper = initBookSwiper('.swiper-books-detective');
const romanceSwiper = initBookSwiper('.swiper-books-romance');

// Добавьте инициализацию для других жанров, если они есть:
// const historySwiper = initBookSwiper('.swiper-books-history');
// const scienceSwiper = initBookSwiper('.swiper-books-science');