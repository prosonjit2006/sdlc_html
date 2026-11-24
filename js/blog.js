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
    slidesPerView: 1,
    spaceBetween: 15,
    speed: 500,

    navigation: {
        nextEl: ".testimonial-next",
        prevEl: ".testimonial-prev",
    },

    breakpoints: {
        640: { slidesPerView: 2, spaceBetween: 20 },
        1024: { slidesPerView: 3, spaceBetween: 30 },
    },
});