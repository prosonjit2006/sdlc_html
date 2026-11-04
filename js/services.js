var swiper = new Swiper('.mySwiper', {
    slidesPerView: 1,
    spaceBetween: 15,
    freeMode: true,

    pagination: {
        // el: '.swiper-pagination',
        clickable: false,
    },

    navigation: {
        nextEl: ".swiper-button-next-custom",
        prevEl: ".swiper-button-prev-custom",
    },

    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 15
        },
        640: {
            slidesPerView: 2,
            spaceBetween: 20
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 30
        }
    }
});