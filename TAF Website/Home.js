const menuBtn = document.getElementById('menuBtn');
    const navLinks = document.getElementById('navLinks');

    menuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

const testimonials = [
    {
        image: "images/michelle.jpg",
        text: "TAF has helped me manage my sexual desires, overcome temptations and rise up when I fall through accountability, sermons, podcasts, desire engagement courses, etc.",
        name: "Michelle Kobe"
    },
    {
        image: "images/sos.jpg",
        text: "Through Teens Aloud, I discovered my purpose and grew spiritually and mentally stronger.",
        name: "Sospeter Ochieng."
    },
    {
        image: "images/IMG_8378.jpg",
        text: "The fellowship and mentorship have completely changed my perspective on life.",
        name: "Stanley Emilio"
    }
];

let index = 0;

function showTestimonial(i){
    document.getElementById("testimonial-img").src = testimonials[i].image;
    document.getElementById("testimonial-text").innerText = testimonials[i].text;
    document.getElementById("testimonial-name").innerText = testimonials[i].name;
}

function nextTestimonial(){
    index = (index + 1) % testimonials.length;
    showTestimonial(index);
}

function prevTestimonial(){
    index = (index - 1 + testimonials.length) % testimonials.length;
    showTestimonial(index);
}