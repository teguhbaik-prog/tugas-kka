// script.js - JavaScript interaktif untuk presentasi AI

let currentSlide = 1;
const totalSlides = 12;

// Fungsi untuk menampilkan slide tertentu
function showSlide(n) {
  const slides = document.querySelectorAll('.slide');
  slides.forEach((slide, i) => {
    slide.style.transform = `translateX(${(i - (n - 1)) * 100}%)`;
    slide.style.opacity = (i === n - 1) ? '1' : '0';
    slide.style.transition = 'transform 0.6s ease, opacity 0.6s ease';
  });
  currentSlide = n;
}

// Lanjut ke slide berikutnya
function nextSlide() {
  if(currentSlide < totalSlides){
    showSlide(currentSlide + 1);
  }
}

// Kembali ke slide sebelumnya
function prevSlide() {
  if(currentSlide > 1){
    showSlide(currentSlide - 1);
  }
}

// Lompat ke slide tertentu (misal tombol Sudah Mengerti)
function goToSlide(n) {
  if(n >= 1 && n <= totalSlides){
    showSlide(n);
  }
}

// Inisialisasi slide pertama
document.addEventListener('DOMContentLoaded', () => {
  showSlide(currentSlide);
});
