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

const menuBtn = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('mobileMenu');

menuBtn.addEventListener('click', function() {
    if(mobileMenu.classList.contains("hidden"))
    {
        mobileMenu.classList.remove("hidden");
    }
    else
    {
        mobileMenu.classList.add("hidden");
    }
});


const mailErr = document.getElementById('mail');
const emailErr = document.getElementById('emailError');
let mailFlag = false;

mailErr.addEventListener('keyup', function validateEmail() {
    let email = mailErr.value;
    let pattern = /^[a-zA-Z0-9_%+-]+(\.[a-zA-Z0-9_%+-]+)*@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z]{2,}$/;

    if (email == "") {
        emailErr.innerText = "Please enter a valid email address";
        mailFlag = false;
    }
    else if (email.trim() != email) {
        emailErr.innerText = "Email must not contain spaces at the beginning and end";
        mailFlag = false;
    }
    else if (email.includes(" ")) {
        emailErr.innerText = "Spaces are not allowed";
        mailFlag = false;
    }
    else if (email.indexOf("@") == -1 || email.indexOf("@") != email.lastIndexOf("@")) {
        emailErr.innerText = "Email must contain exactly one @";
        mailFlag = false;
    }
    else if (!pattern.test(email)) {
        emailErr.innerText = "Invalid Email Format";
        mailFlag = false;
    }
    else {
        emailErr.innerText = "Valid Email";
        mailFlag = true;
    }
});

document.getElementById('emailLink').addEventListener('click', function(e) {
    e.preventDefault();

    let email = mailErr.value;

    if (email == "") {
        mailFlag = false;
        emailErr.innerText = "Please enter a valid email address";
    }
    else if (mailFlag == true) {
        window.open("./success.html", "_blank");
    }
    else {
        emailErr.innerText = "Please enter a valid email address";
    }
});
