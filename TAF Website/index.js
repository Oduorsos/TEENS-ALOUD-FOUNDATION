// ==========================================
// TEENS ALOUD FOUNDATION KENYA
// MODERN & CLEAN JAVASCRIPT FILE
// FIXED & OPTIMIZED VERSION
// ==========================================


// ==========================================
// GLOBAL ELEMENTS
// ==========================================

const header = document.querySelector("header");

const sections = document.querySelectorAll("section");

const navItems = document.querySelectorAll(".nav-links a");

const navMenu = document.getElementById("navLinks");

const menuBtn = document.getElementById("menuBtn");


// ==========================================
// ACTIVE NAVIGATION LINKS
// ==========================================

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if(window.scrollY >= sectionTop){

            current = section.getAttribute("id");

        }

    });

    navItems.forEach(link => {

        link.classList.remove("active", "active-link");

        if(link.getAttribute("href") === `#${current}`){

            link.classList.add("active-link");

        }

    });

});


// ==========================================
// HIDE / SHOW NAVBAR ON SCROLL
// ==========================================

let lastScrollTop = 0;

window.addEventListener("scroll", () => {

    let currentScroll =
        window.pageYOffset || document.documentElement.scrollTop;

    // SHOW NAVBAR WHEN SCROLLING UP

    if(currentScroll < lastScrollTop){

        if(header){
            header.style.top = "0";
        }

    }

    // HIDE NAVBAR WHEN SCROLLING DOWN

    else{

        if(header){
            header.style.top = "-120px";
        }

    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;

});


// ==========================================
// STICKY NAVBAR EFFECT
// ==========================================

window.addEventListener("scroll", () => {

    if(!header) return;

    if(window.scrollY > 30){

        header.style.background = "rgba(255,255,255,0.98)";
        header.style.boxShadow = "0 4px 20px rgba(0,0,0,0.08)";

    }else{

        header.style.background = "rgba(255,255,255,0.95)";
        header.style.boxShadow = "0 2px 10px rgba(0,0,0,0.05)";

    }

});


// ==========================================
// MOBILE MENU
// ==========================================

if(menuBtn && navMenu){

    menuBtn.addEventListener("click", () => {

        navMenu.classList.toggle("active");

        menuBtn.innerHTML = navMenu.classList.contains("active")
            ? `<i class="bi bi-x-lg"></i>`
            : `☰`;

    });

}


// ==========================================
// CLOSE MOBILE MENU WHEN LINK IS CLICKED
// ==========================================

navItems.forEach(link => {

    link.addEventListener("click", () => {

        if(navMenu){
            navMenu.classList.remove("active");
        }

        if(menuBtn){
            menuBtn.innerHTML = `☰`;
        }

    });

});


// ==========================================
// HERO IMAGE SLIDER
// ==========================================

const slides = document.querySelectorAll(".slide");

let currentSlide = 0;

function changeSlide(){

    if(slides.length === 0) return;

    slides[currentSlide].classList.remove("active");

    currentSlide++;

    if(currentSlide >= slides.length){

        currentSlide = 0;

    }

    slides[currentSlide].classList.add("active");

}

// AUTO SLIDE EVERY 3 SECONDS

if(slides.length > 0){

    setInterval(changeSlide, 3000);

}


// ==========================================
// WELCOME SECTION ANIMATION
// ==========================================

const directorImage =
    document.querySelector(".director-image");

const directorText =
    document.querySelector(".director-text");

function animateDirectorSection(){

    if(!directorImage || !directorText) return;

    const triggerBottom =
        window.innerHeight * 0.85;

    const imageTop =
        directorImage.getBoundingClientRect().top;

    const textTop =
        directorText.getBoundingClientRect().top;

    if(imageTop < triggerBottom){

        directorImage.classList.add("show");

    }

    if(textTop < triggerBottom){

        directorText.classList.add("show");

    }

}

window.addEventListener(
    "scroll",
    animateDirectorSection
);

animateDirectorSection();


// ==========================================
// ABOUT SECTION ANIMATION
// ==========================================

const aboutImage =
    document.querySelector(".about img");

const aboutText =
    document.querySelector(".about-text");

function animateAboutSection(){

    if(!aboutImage || !aboutText) return;

    const triggerBottom =
        window.innerHeight * 0.85;

    const imageTop =
        aboutImage.getBoundingClientRect().top;

    const textTop =
        aboutText.getBoundingClientRect().top;

    if(imageTop < triggerBottom){

        aboutImage.classList.add("show");

    }

    if(textTop < triggerBottom){

        aboutText.classList.add("show");

    }

}

window.addEventListener(
    "scroll",
    animateAboutSection
);

animateAboutSection();


// ==========================================
// PROGRAM CARDS ANIMATION
// ==========================================

const programCards =
    document.querySelectorAll(".program-card");

function animateProgramCards(){

    const triggerBottom =
        window.innerHeight * 0.88;

    programCards.forEach((card, index) => {

        const cardTop =
            card.getBoundingClientRect().top;

        if(cardTop < triggerBottom){

            setTimeout(() => {

                card.classList.add("show");

            }, index * 120);

        }

    });

}

window.addEventListener(
    "scroll",
    animateProgramCards
);

animateProgramCards();


// ==========================================
// SCROLL REVEAL ANIMATION
// ==========================================

const revealElements = document.querySelectorAll(
    ".program-card, .about, .impact-box, .director-container, .testimonial-card, .cta"
);

const revealOnScroll = () => {

    revealElements.forEach(el => {

        const windowHeight = window.innerHeight;

        const revealTop = el.getBoundingClientRect().top;

        if(revealTop < windowHeight - 200){

            el.classList.add("show");

        }

    });

};

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();


// ==========================================
// TESTIMONIAL SLIDER
// ==========================================

const testimonials = [

    {
        image: "images/michelle.jpg",
        message: "TAF has helped me manage my sexual desires, overcome temptations and rise up when I fall through accountability, sermons, podcasts and mentorship.",
        name: "Michelle Kobe"
    },

    {
        image: "images/sos.jpg",
        message: "Through Teens Aloud Foundation, I discovered purpose, confidence and true friendship rooted in Christ.",
        name: "Sospeter Ochieng"
    },

    {
        image: "images/IMG_8378.jpg",
        message: "The fellowships and mentorship programs have transformed my spiritual journey completely.",
        name: "Stanley Emilio"
    }

];

let currentTestimonial = 0;

const testimonialImage = document.getElementById("testimonial-img");

const testimonialText = document.getElementById("testimonial-text");

const testimonialName = document.getElementById("testimonial-name");

const testimonialCard =
    document.querySelector(".testimonial-card");

function updateTestimonial(){

    if(
        !testimonialCard ||
        !testimonialImage ||
        !testimonialText ||
        !testimonialName
    ) return;

    testimonialCard.classList.remove("slide-in");

    testimonialCard.classList.add("slide-out");

    setTimeout(() => {

        testimonialImage.src =
            testimonials[currentTestimonial].image;

        testimonialText.textContent =
            testimonials[currentTestimonial].message;

        testimonialName.textContent =
            testimonials[currentTestimonial].name;

        testimonialCard.classList.remove("slide-out");

        testimonialCard.classList.add("slide-in");

    }, 500);

}

function nextTestimonial(){

    currentTestimonial++;

    if(currentTestimonial >= testimonials.length){

        currentTestimonial = 0;

    }

    updateTestimonial();

}

function prevTestimonial(){

    currentTestimonial--;

    if(currentTestimonial < 0){

        currentTestimonial = testimonials.length - 1;

    }

    updateTestimonial();

}

let testimonialAutoSlide;

if(testimonialCard){

    testimonialAutoSlide =
        setInterval(nextTestimonial, 3500);

    testimonialCard.addEventListener("mouseenter", () => {

        clearInterval(testimonialAutoSlide);

    });

    testimonialCard.addEventListener("mouseleave", () => {

        testimonialAutoSlide =
            setInterval(nextTestimonial, 4000);

    });

}


// ==========================================
// IMPACT COUNTER ANIMATION
// ==========================================

const counters =
    document.querySelectorAll(".impact-box h3");

let counterStarted = false;

function animateCounters(){

    counters.forEach(counter => {

        const target =
            parseInt(counter.innerText);

        let count = 0;

        const speed = target / 100;

        function updateCounter(){

            count += speed;

            if(count < target){

                counter.innerText =
                    Math.floor(count) + "+";

                requestAnimationFrame(updateCounter);

            }else{

                counter.innerText = target + "+";

            }

        }

        updateCounter();

    });

}

window.addEventListener("scroll", () => {

    const impactSection =
        document.querySelector(".impact");

    if(!impactSection) return;

    const sectionTop =
        impactSection.getBoundingClientRect().top;

    if(
        sectionTop < window.innerHeight &&
        !counterStarted
    ){

        animateCounters();

        counterStarted = true;

    }

});


// ==========================================
// BUTTON RIPPLE EFFECT
// ==========================================

const buttons = document.querySelectorAll(".btn");

buttons.forEach(button => {

    button.addEventListener("click", function(e){

        const ripple =
            document.createElement("span");

        ripple.classList.add("ripple");

        const rect =
            this.getBoundingClientRect();

        ripple.style.left =
            `${e.clientX - rect.left}px`;

        ripple.style.top =
            `${e.clientY - rect.top}px`;

        this.appendChild(ripple);

        setTimeout(() => {

            ripple.remove();

        }, 600);

    });

});


// ==========================================
// PROGRAM CARD HOVER EFFECT
// ==========================================

const cards =
    document.querySelectorAll(".program-card");

cards.forEach(card => {

    card.addEventListener("mousemove", (e) => {

        const rect =
            card.getBoundingClientRect();

        const x = e.clientX - rect.left;

        const y = e.clientY - rect.top;

        const rotateX =
            ((y / rect.height) - 0.5) * -6;

        const rotateY =
            ((x / rect.width) - 0.5) * 6;

        card.style.transform = `
            perspective(1000px)
            rotateX(${rotateX}deg)
            rotateY(${rotateY}deg)
            translateY(-10px)
        `;

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = `
            perspective(1000px)
            rotateX(0deg)
            rotateY(0deg)
            translateY(0px)
        `;

    });

});


// ==========================================
// HERO TEXT ANIMATION
// ==========================================

const heroContent =
    document.querySelector(".hero-content");

window.addEventListener("load", () => {

    if(!heroContent) return;

    heroContent.style.opacity = "0";

    setTimeout(() => {

        heroContent.style.transition =
            "all 1s ease";

        heroContent.style.opacity = "1";

        heroContent.style.transform =
            "translateY(0)";

    }, 200);

});
// IMAGE ZOOM EFFECT

const images = document.querySelectorAll(
    ".program-card img, .about img, .director-image img"
);

images.forEach(image => {

    image.addEventListener("mouseenter", () => {

        image.style.transition = "0.5s ease";

        image.style.transform = "scale(1.03)";

    });

    image.addEventListener("mouseleave", () => {

        image.style.transform = "scale(1)";

    });

});

// =========================
// SCROLL TO TOP BUTTON
// =========================

const scrollBtn =
    document.querySelector(".scroll-top-btn");


// SHOW / HIDE BUTTON

window.addEventListener("scroll", () => {

    if(window.scrollY > 400){

        scrollBtn.classList.add("show-scroll");

    }else{

        scrollBtn.classList.remove("show-scroll");

    }

});


scrollBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});

// PRELOADER FADE

window.addEventListener("load", () => {

    document.body.classList.add("loaded");

});
