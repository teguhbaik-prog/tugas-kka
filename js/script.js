// script.js - JavaScript interaktif presentasi AI

let currentSlide = 1;
const totalSlides = 12;

// Fungsi untuk menampilkan slide sesuai index
function showSlide(n) {
  const slides = document.querySelectorAll('.slide');
  slides.forEach((slide, i) => {
    if(i === n - 1){
      slide.classList.add('active');
    } else {
      slide.classList.remove('active');
    }
  });
}

// Tombol "Belum Mengerti" / Next Slide
function nextSlide() {
  if(currentSlide < totalSlides){
    currentSlide++;
    showSlide(currentSlide);
  }
}

// Tombol "Sudah Mengerti" langsung ke slide penutup
function goToSlide(n) {
  if(n >= 1 && n <= totalSlides){
    currentSlide = n;
    showSlide(currentSlide);
  }
}

// Navigasi dengan keyboard (opsional)
document.addEventListener('keydown', function(e){
  if(e.key === 'ArrowRight'){
    nextSlide();
  }
  if(e.key === 'ArrowLeft' && currentSlide > 1){
    currentSlide--;
    showSlide(currentSlide);
  }
});

// Mulai background music otomatis
window.onload = function() {
  const bgMusic = document.getElementById('bg-music');
  bgMusic.volume = 0.3; // Atur volume
  bgMusic.play().catch(() => {
    console.log("Audio autoplay diblokir, klik untuk memulai");
  });
}

// Inisialisasi slide pertama
showSlide(currentSlide);
