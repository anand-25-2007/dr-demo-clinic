/* =========================
   ANIMATED COUNTERS
========================= */

const counters = document.querySelectorAll(".counter");

const startCounter = () => {

    counters.forEach(counter => {

        const target = counter.getAttribute("data-target");

        let current = 0;

        const increment = target / 100;

        const updateCounter = () => {

            if(current < target){

                current += increment;

                if(target.includes(".")){
                    counter.innerText =
                    current.toFixed(1);
                }else{
                    counter.innerText =
                    Math.ceil(current);
                }

                requestAnimationFrame(updateCounter);

            }else{

                counter.innerText = target;

                if(target == 10000){
                    counter.innerText = "10,000+";
                }

                if(target == 15){
                    counter.innerText = "15+";
                }

                if(target == 98){
                    counter.innerText = "98%";
                }

                if(target == 4.9){
                    counter.innerText = "4.9★";
                }

            }

        };

        updateCounter();

    });

};

let counterStarted = false;

window.addEventListener("scroll", () => {

    const statsSection =
    document.querySelector(".stats");

    const position =
    statsSection.getBoundingClientRect().top;

    if(position < window.innerHeight &&
       !counterStarted){

        startCounter();
        counterStarted = true;

    }

});

/* =========================
   TESTIMONIAL SLIDER
========================= */

const testimonials =
document.querySelectorAll(".testimonial");

let currentSlide = 0;

function showSlide(index){

    testimonials.forEach(slide => {
        slide.classList.remove("active");
    });

    testimonials[index]
    .classList.add("active");

}

setInterval(() => {

    currentSlide++;

    if(currentSlide >= testimonials.length){

        currentSlide = 0;

    }

    showSlide(currentSlide);

}, 2000);

/* =========================
   APPOINTMENT FORM
========================= */

const form =
document.getElementById("appointmentForm");

form.addEventListener("submit", function(e){

    e.preventDefault();

    const button =
    form.querySelector("button");

    button.innerText =
    "Submitting...";

    setTimeout(() => {

        button.innerText =
        "Request Appointment";

        showPopup();

        form.reset();

    }, 1500);

});

/* =========================
   SUCCESS POPUP
========================= */

function showPopup(){

    const popup =
    document.createElement("div");

    popup.classList.add("popup");

    popup.innerHTML = `
        <div class="popup-box">

            <i class="fa-solid fa-circle-check"></i>

            <h2>
            Appointment Request Received
            </h2>

            <p>
            Our team will contact you shortly.
            </p>

            <button onclick="closePopup()">
            Close
            </button>

        </div>
    `;

    document.body.appendChild(popup);

}

function closePopup(){

    const popup =
    document.querySelector(".popup");

    popup.remove();

}

/* =========================
   SCROLL REVEAL
========================= */

const revealElements =
document.querySelectorAll(
".service-card,.stat-card,.qual-box,.review"
);

const revealOnScroll = () => {

    revealElements.forEach(el => {

        const position =
        el.getBoundingClientRect().top;

        if(position <
        window.innerHeight - 100){

            el.classList.add("show");

        }

    });

};

window.addEventListener(
"scroll",
revealOnScroll
);

revealOnScroll();

/* =========================
   NAVBAR SHADOW
========================= */

window.addEventListener("scroll", () => {

    const navbar =
    document.querySelector(".navbar");

    if(window.scrollY > 50){

        navbar.style.boxShadow =
        "0 10px 30px rgba(0,0,0,.08)";

    }else{

        navbar.style.boxShadow =
        "0 4px 20px rgba(0,0,0,.05)";

    }

});

/* =========================
   FLOATING WHATSAPP
========================= */

const whatsapp =
document.querySelector(".whatsapp");

setInterval(() => {

    whatsapp.classList.add("bounce");

    setTimeout(() => {

        whatsapp.classList.remove("bounce");

    }, 1000);

}, 5000);

/* =========================
   HAMBURGER MENU
========================= */

const hamburger =
document.querySelector(".hamburger");

const navLinks =
document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {

    hamburger.classList.toggle("active");

    navLinks.classList.toggle("active");

});

/* =========================
   CLOSE MENU ON CLICK
========================= */

document
.querySelectorAll(".nav-links a")
.forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");
        hamburger.classList.remove("active");

    });

});