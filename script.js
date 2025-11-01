// script.js - JavaScript interaktif untuk presentasi AI

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
}

// Next slide
function nextSlide() {
  if (currentSlide < totalSlides) {
    currentSlide++;
    showSlide(currentSlide);
  }
}

// Previous slide
function prevSlide() {
  if (currentSlide > 1) {
    currentSlide--;
    showSlide(currentSlide);
  }
}

// Go to specific slide
function goToSlide(n) {
  if (n >= 1 && n <= totalSlides) {
    currentSlide = n;
    showSlide(n);
  }
}

// Background music control
const bgMusic = document.getElementById('bg-music');
bgMusic.volume = 0.3; // atur volume 30%

// Tombol interaksi contoh
// Tombol "Sudah Mengerti" lompat ke slide penutup (slide 12)
function sudahMengerti() {
  goToSlide(12);
}

// Tombol "Belum Mengerti" lanjut materi (slide 3)
function belumMengerti() {
  goToSlide(3);
}

// Inisialisasi tampilan pertama
document.addEventListener('DOMContentLoaded', () => {
  showSlide(currentSlide);
});
