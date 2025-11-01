// script.js

let currentSlide = 1;
const totalSlides = 16;

const slides = document.querySelectorAll('.slide');
const bgMusic = document.createElement('audio');
bgMusic.src = 'audio/bergema sampai selamanya.mp3';
bgMusic.loop = true;
bgMusic.autoplay = true;
bgMusic.volume = 0.3; // Bisa diatur sesuai kenyamanan
document.body.appendChild(bgMusic);

// Fungsi menampilkan slide tertentu
function showSlide(n) {
  slides.forEach((slide, index) => {
    if(index === n - 1){
      slide.classList.add('active');
    } else {
      slide.classList.remove('active');
    }
  });
  currentSlide = n;
}

// Tombol Next Slide biasa
function nextSlide() {
  if(currentSlide < totalSlides){
    showSlide(currentSlide + 1);
  }
}

// Tombol Sudah Mengerti langsung ke slide 16
function goToSlide(n) {
  if(n >= 1 && n <= totalSlides){
    showSlide(n);
  }
}

// Tombol Back Slide (opsional, bisa ditambahkan jika mau)
function prevSlide() {
  if(currentSlide > 1){
    showSlide(currentSlide - 1);
  }
}

// Keyboard navigasi (opsional)
document.addEventListener('keydown', function(e){
  if(e.key === "ArrowRight"){
    nextSlide();
  } else if(e.key === "ArrowLeft"){
    prevSlide();
  }
});

// Inisialisasi slide pertama
showSlide(1);
