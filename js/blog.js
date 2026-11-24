<<<<<<< HEAD
// Ideas image slider
const ideasSwiper = new Swiper(".ideas-swiper", {
    slidesPerView: "auto",
    spaceBetween: 10,
    speed: 800,
    grabCursor: true,
    rewind: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
    },
});

// Blog cards slider (sirf ek baar init)
const blogSwiper = new Swiper(".blog-swiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    speed: 500,
    autoHeight: true,
    navigation: {
        prevEl: ".blog-prev",
        nextEl: ".blog-next",
    },
});

// Numbered pagination (1, 2, 3)
const blogDots = document.querySelectorAll(".blog-dot");

function updateBlogDots() {
    blogDots.forEach(function (dot, index) {
        const active = index === blogSwiper.activeIndex;
        dot.style.background = active ? "#000" : "transparent";
        dot.style.borderColor = active ? "#000" : "#d1d5db";
        dot.style.color = active ? "#fff" : "#6b7280";
        dot.style.fontWeight = active ? "600" : "400";
        dot.style.fontSize = active ? "15px" : "10px";
    });
}

blogDots.forEach(function (dot) {
    dot.addEventListener("click", function () {
        blogSwiper.slideTo(Number(dot.dataset.page));
    });
});

blogSwiper.on("slideChange", updateBlogDots);
updateBlogDots();

// Testimonial slider
const testimonialSwiper = new Swiper(".testimonial-swiper", {
=======
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
>>>>>>> 7c6f844e28250065fa20dd17462596ffd65e4506
    slidesPerView: 1,
    spaceBetween: 15,
    speed: 500,

    navigation: {
<<<<<<< HEAD
        nextEl: ".testimonial-next",
        prevEl: ".testimonial-prev",
=======
        nextEl: '.testimonial-next',
        prevEl: '.testimonial-prev',
>>>>>>> 7c6f844e28250065fa20dd17462596ffd65e4506
    },

    breakpoints: {
        640: { slidesPerView: 2, spaceBetween: 20 },
        1024: { slidesPerView: 3, spaceBetween: 30 },
    },
});