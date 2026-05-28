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
// SUB CARDS ANIMATION
// ==========================================

const SUBCards =
    document.querySelectorAll(".SUB-card");

function animateSUBCards(){

    const triggerBottom =
        window.innerHeight * 0.88;

    SUBCards.forEach((card, index) => {

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
    animateSUBCards
);

animateSUBCards();


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

// ======================================
// PROGRAMS SLIDER
// ======================================

const programTrack =
    document.querySelector(".program-track");

const programCardsSlider =
    document.querySelectorAll(".program-track .program-card");

const nextProgram =
    document.querySelector(".next-program");

const prevProgram =
    document.querySelector(".prev-program");

let currentProgramIndex = 0;

// HOW MANY CARDS VISIBLE

function getVisibleCards(){

    return window.innerWidth <= 900 ? 1 : 2;

}

// UPDATE SLIDER

function updateProgramSlider(){

    const visibleCards = getVisibleCards();

    const cardWidth =
        programCardsSlider[0].offsetWidth + 25;

    const moveX =
        currentProgramIndex * cardWidth;

    programTrack.style.transform =
        `translateX(-${moveX}px)`;

}

// NEXT

function nextProgramSlide(){

    const visibleCards = getVisibleCards();

    if(
        currentProgramIndex <
        programCardsSlider.length - visibleCards
    ){

        currentProgramIndex++;

    }else{

        currentProgramIndex = 0;

    }

    updateProgramSlider();

}

// PREVIOUS

function prevProgramSlide(){

    const visibleCards = getVisibleCards();

    if(currentProgramIndex > 0){

        currentProgramIndex--;

    }else{

        currentProgramIndex =
            programCardsSlider.length - visibleCards;

    }

    updateProgramSlider();

}

// BUTTON EVENTS

nextProgram.addEventListener(
    "click",
    nextProgramSlide
);

prevProgram.addEventListener(
    "click",
    prevProgramSlide
);

// AUTO SLIDE

setInterval(() => {

    nextProgramSlide();

}, 5000);

// RESPONSIVE FIX

window.addEventListener(
    "resize",
    updateProgramSlider
);

// INITIALIZE

updateProgramSlider();

// ==========================================
// LEADERSHIP SECTION ANIMATION
// ==========================================

const founderCard =
    document.querySelector(".founder-card");

const directorCards =
    document.querySelectorAll(".director-mini-card");

const actedCards =
    document.querySelectorAll(".acted-mini-card");

function animateLeadershipSection(){

    const triggerBottom =
        window.innerHeight * 0.88;

    // FOUNDER CARD

    if(founderCard){

        const founderTop =
            founderCard.getBoundingClientRect().top;

        if(founderTop < triggerBottom){

            founderCard.classList.add("show");

        }

    }

    // DIRECTOR CARDS

    directorCards.forEach((card, index) => {

        const cardTop =
            card.getBoundingClientRect().top;

        if(cardTop < triggerBottom){

            setTimeout(() => {

                card.classList.add("show");

            }, index * 200);

        }

    });

    actedCards.forEach((card, index) => {

        const cardTop =
            card.getBoundingClientRect().top;

        if(cardTop < triggerBottom){

            setTimeout(() => {

                card.classList.add("show");

            }, index * 200);

        }

    });

}

window.addEventListener(
    "scroll",
    animateLeadershipSection
);

animateLeadershipSection();

// ==========================================
// VISION & MISSION ANIMATION
// ==========================================

const visionCards =
    document.querySelectorAll(
        ".vision-card, .mission-card"
    );

function animateVisionMission(){

    const triggerBottom =
        window.innerHeight * 0.85;

    visionCards.forEach((card, index) => {

        const cardTop =
            card.getBoundingClientRect().top;

        if(cardTop < triggerBottom){

            setTimeout(() => {

                card.classList.add("show");

            }, index * 200);

        }

    });

}

window.addEventListener(
    "scroll",
    animateVisionMission
);

animateVisionMission();

// ==========================================
// VALUE CARDS ANIMATION
// ==========================================

const valueCards =
    document.querySelectorAll(".value-card");

function animatevalueCards(){

    const triggerBottom =
        window.innerHeight * 0.88;

    valueCards.forEach((card, index) => {

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
    animatevalueCards
);

animatevalueCards();

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
        message: "Before joining Teens Aloud Foundation, I struggled with seeking acceptance from the world, which left me feeling empty and lost. Through a friend's invite, I attended my first fellowship meeting, not knowing it would become the beginning of my personal revival. TAF has helped me find healing, purpose, leadership, and genuine friendships rooted in Christ. Today, I continue growing in faith and purpose, and I will always cherish TAF as a home that transformed my life.",
        name: " ~ Michelle Kobe"
    },

    {
        image: "images/sos (2).jpg",
        message: "I joined Teens Aloud Foundation in 2022 during my first year in university, and the journey since then has been smooth, impactful, and full of life. Through TAF, I discovered purpose, leadership, confidence, wisdom, and genuine friendships rooted in Christ. The foundation has not only strengthened my spiritual life but has also surrounded me with supportive people who continue to inspire and shape me into a better person every day.",
        name: " ~ Sospeter Ochieng"
    },

    {
        image: "images/stanley.jpg",
        message: "Joining this TAF in 2021 marked the beginning of a deeply transformative chapter in my life, allowing me to serve in diverse leadership roles ranging from Family Head to Camp Vista Representative and Aloud Creative Director. Stepping into these responsibilities has profoundly elevated my confidence, honed my leadership skills, and enriched my social interactions within a vibrant, faith-driven community. Beyond my personal growth, the hands-on experience has equipped me with invaluable, practical skills in event planning, financial management, and teamwork. Ultimately, this journey has not only deepened my commitment to service but has also fundamentally shaped the leader and collaborator I am today.",
        name: " ~ Stanley Emilio"
    },

    {
        image: "images/mario.jpg",
        message: "I joined TAF in 2023, and it has truly been one of the most impactful journeys in my life. TAF has helped me build confidence, discipline, and strong leadership skills. I have learned how to work with others, communicate effectively, and take initiative. The mentorship and opportunities provided have inspired me to aim higher in everything I do. Being part of TAF also taught me the importance of teamwork, responsibility, and service to the community. Every experience and challenge along the way has shaped me into a better and more focused individual. I am grateful to TAF for the knowledge, exposure, and leadership foundation it continues to give me.",
        name: " ~ Lloyd Mario"
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
