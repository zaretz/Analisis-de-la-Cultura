const slides = document.querySelectorAll(".slide");
let currentSlide = 0;

function showSlide(slideIndex) {
    if (slideIndex < 0) {
        currentSlide = slides.length - 1;
    } else if (slideIndex >= slides.length) {
        currentSlide = 0;
    } else {
        currentSlide = slideIndex;
    }
    
    slides.forEach((slide) => (slide.style.display = "none"));
    slides[currentSlide].style.display = "block";
}

showSlide(currentSlide);

setInterval(() => {
    currentSlide++;
    showSlide(currentSlide);
}, 3000); // Cambia las imágenes cada 3 segundos