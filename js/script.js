// script.js - JavaScript Interaktif Presentasi AI

let currentSlide = 1;
const totalSlides = 12;

// Tampilkan slide sesuai index
function showSlide(n) {
  const slides = document.querySelectorAll('.slide');
  slides.forEach((slide, i) => {
    slide.style.transform = `translateX(${(i - (n - 1)) * 100}%)`;
    slide.style.opacity = (i === n - 1) ? '1' : '0';
    slide.style.transition = 'transform 0.6s ease, opacity 0.6s ease';
  });
  currentSlide = n;
}

// Next Slide
function nextSlide() {
  if (currentSlide < totalSlides) {
    showSlide(currentSlide + 1);
  }
}

// Previous Slide (opsional)
function prevSlide() {
  if (currentSlide > 1) {
    showSlide(currentSlide - 1);
  }
}

// Lompat ke slide tertentu
function goToSlide(n) {
  if (n >=1 && n <= totalSlides) {
    showSlide(n);
  }
}

// Keyboard navigation (optional)
document.addEventListener('keydown', (e) => {
  if(e.key === 'ArrowRight') nextSlide();
  if(e.key === 'ArrowLeft') prevSlide();
});

// Auto play background music
document.addEventListener('DOMContentLoaded', () => {
  const music = document.getElementById('bg-music');
  if(music){
    music.volume = 0.2;
    music.play().catch(err => console.log('Audio autoplay failed')); 
  }
});

// Inisialisasi slide pertama
showSlide(currentSlide);
