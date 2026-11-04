const testimonialSwiper = new Swiper('.testimonial-swiper', {
    slidesPerView: 1,
    spaceBetween: 15,
    speed: 500,

    navigation: {
        nextEl: '.testimonial-next',
        prevEl: '.testimonial-prev',
    },

    breakpoints: {
        640: { slidesPerView: 2, spaceBetween: 20 },
        1024: { slidesPerView: 3, spaceBetween: 30 },
    },
});