// script.js - JavaScript interaktif untuk presentasi AI

let currentSlide = 1;
const totalSlides = 12;

// Fungsi untuk menampilkan slide sesuai index
function showSlide(n) {
  document.querySelectorAll('.slide').forEach((slide, i) => {
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

// Lompat ke slide tertentu
function goToSlide(n) {
  if(n >= 1 && n <= totalSlides) {
    currentSlide = n;
    showSlide(currentSlide);
  }
}

// Tombol Sudah Mengerti / Tidak Mengerti contoh:
function alreadyUnderstood() {
  goToSlide(12); // Lompat ke slide penutup
}

function notUnderstood() {
  goToSlide(3); // Lompat ke slide materi awal
}

// Autoplay background music
window.addEventListener('load', () => {
  const music = document.getElementById('bg-music');
  if (music) music.play();
});

// Inisialisasi slide pertama
showSlide(currentSlide);
