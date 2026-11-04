const swiper = new Swiper(".blogImageSwiper", {
    slidesPerView: "auto",
    spaceBetween: 12,
    loop: true,
    speed: 800,

    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },

    grabCursor: true,
    allowTouchMove: true,
});

var swiper1 = new Swiper('.mySwiper', {
        slidesPerView: 3,
        spaceBetween: 30,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
      });

var swiper2 = new Swiper('.blogImageSwiper', {

    slidesPerView: 3,

    grid: {
        rows: 2,
        fill: 'row',
    },

    spaceBetween: 15,

    slidesPerGroup: 6,

    pagination: {
        el: '.swiper1-pagination',
        clickable: true,

        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
    },

    breakpoints: {

        320: {
            slidesPerView: 1,
            grid: {
                rows: 1,
            },
            slidesPerGroup: 1,
        },

        640: {
            slidesPerView: 2,
            grid: {
                rows: 2,
                fill: 'row',
            },
            slidesPerGroup: 4,
        },

        1024: {
            slidesPerView: 3,
            grid: {
                rows: 2,
                fill: 'row',
            },
            slidesPerGroup: 6,
        },

    },

});

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