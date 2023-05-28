/*=== scroll reveal ===*/

ScrollReveal({
        reset: false,
        distance: '80px', 
        duration: 2000, 
        delay: 50
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img img, .services-container, .contact form, .testimonial-wrapper', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img img', { origin: 'left' });
ScrollReveal().reveal('.home-content h3, .home-content p, .about-content', { origin: 'right' });