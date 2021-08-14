// Инициализируем swiper
new Swiper('.image-slider', {
    // Стрелки
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    // Навигация
    // Буллеты, текущее положение, прогрессбар
    pagination: {
        el: '.swiper-pagination',
        // // Буллеты
        // clickable: true,
        // // Динамические буллеты
        // dynamicBullets: true,
        // // Кастомные буллеты с номерами по порядку (индексацией)
        // renderBullet: function (index, className) {
        //     return '<span class="' + className + '">' + (index + 1) + '</span>';
        // }
        // Фракция
        type: 'fraction',
        // Кастомный вывод функции (индексация фото)
        renderFraction: function (currentClass, totalClass) {
            return 'Фото <span class="' + currentClass + '"></span>' + ' из ' + '<span class="' + totalClass + '"></span>';
        }
        // // Прогрессбар
        // type: 'progressbar'
    },
    // Скролл
    scrollbar: {
        el: '.swiper-scrollbar',
        // Возможность перетаскивать скролл
        draggable: true
    },

    // Вкл/выкл перетаскивание на пк
    simulateTouch: true,
    // Чувствительность свайпа
    touchRatio: 1,
    // Угол срабатывания свайпа/перетаскивания
    touchAngle: 45,
    // Курсор перетаскивания
    grabCursor: true,

    // Переключение при клике на слайд
    slideToClickedSlide: true,

    // Навигация по хешу
    hasNavigation: {
        // Отслеживать состояние
        watchState: true,
    },

    // Управление клавой
    keyboard: {
        // Вкл/выкл
        enabled: true,
        // Вкл/выкл только когда слайдер в пределах вьюпорта
        onlyInViewport: true,
        // Вкл/выкл управление клавишами pageUp/pageDown
        pageUpDown: true,
    },

    // Управление колесом мыши
    mousewheel: {
        // Чувствительность колеса мыши
        sensitivity: 1,
        // Класс объекта на котором будет срабатывать прокрутка мышью
        // eventsTarget: ".image-slider"
    },

    // Автовысота
    autoHeight: true,

    // Авто количество слайдов для показа 
    slidesPerView: 'auto',

    // Количество слайдов для показа
    // slidesPerView: 3,

    // Отключение функционала если слайдов меньше чем нужно
    watchOverflow: true,

    // Отступ между слайдами
    // spaceBetween: 30,

    // Количество пролистываемых слайдов
    // slidesPerGroup: 3,

    

});