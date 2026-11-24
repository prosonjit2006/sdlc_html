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

function validateEmail() {
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
}
<<<<<<< HEAD
=======

mailErr.addEventListener('keyup', validateEmail);
>>>>>>> 7c6f844e28250065fa20dd17462596ffd65e4506

// mailErr.addEventListener('keyup', validateEmail);

<<<<<<< HEAD
// document.getElementById('emailLink').addEventListener('click', function(e) {
//     e.preventDefault();

//     validateEmail();

    // if (mailFlag == true) {
    //     if(window.location.pathname.includes("index.html")) {
    //         window.open("./")
    //     }
    //     if (window.location.pathname.includes("about.html")) {
    //         window.open("./aboutSuccess.html?page=about", "_blank");
    //     }
    //     else if (window.location.pathname.includes("services.html")) {
    //         window.open("./serviceSuccess.html?page=services", "_blank");
    //     }
    //     else if(window.location.pathname.includes("blog.html")) {
    //         window.open("./blogSuccess.html?page=blog", "_blank");
    //     }
    // }
// });
=======
    validateEmail();

    if (mailFlag == true) {
        if (window.location.pathname.includes("about.html")) {
            window.open("./aboutSuccess.html?page=about", "_blank");
        }
        else if (window.location.pathname.includes("services.html")) {
            window.open("./serviceSuccess.html?page=services", "_blank");
        }
        else if(window.location.pathname.includes("blog.html")) {
            window.open("./blogSuccess.html?page=blog", "_blank");
        }
    }
});
>>>>>>> 7c6f844e28250065fa20dd17462596ffd65e4506
