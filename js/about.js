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
<<<<<<< HEAD
});

let accordionButtons = document.querySelectorAll(".accordion-btn");

    accordionButtons.forEach(function (button) {

      button.addEventListener("click", function () {

        let currentItem = button.parentElement;

        let currentContent = currentItem.querySelector(".accordion-content");

        let allItems = document.querySelectorAll(".accordion-btn");

        allItems.forEach(function (item) {

          let content = item.parentElement.querySelector(".accordion-content");

          if (item !== button) {

            content.classList.add("hidden");

            item.querySelector("i").classList.remove("rotate-180");

          }

        });


        currentContent.classList.toggle("hidden");

        button.querySelector("i").classList.toggle("rotate-180");

      });

    });

    
=======
});
>>>>>>> 7c6f844e28250065fa20dd17462596ffd65e4506
