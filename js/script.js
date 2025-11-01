// Ambil semua slide
const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

// Tampilkan slide tertentu
function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove('active');
    if (i === index) {
      slide.classList.add('active');
    }
  });
  currentSlide = index;
}

// Next slide
function nextSlide() {
  if (currentSlide < slides.length - 1) {
    showSlide(currentSlide + 1);
  }
}

// Previous slide (opsional, bisa ditambahkan tombol kembali)
// function prevSlide() {
//   if (currentSlide > 0) {
//     showSlide(currentSlide - 1);
//   }
// }

// Button "Sudah Mengerti" langsung ke slide 16 (penutup)
function goToSlide(index) {
  if (index >= 0 && index < slides.length) {
    showSlide(index);
  }
}

// Floating icons random movement
const icons = document.querySelectorAll('.floating-icon');
icons.forEach(icon => {
  const delay = parseFloat(icon.style.animationDelay) || 0;
  icon.style.animationDelay = `${delay}s`;
});

// Background music kontrol (opsional)
const bgMusic = document.getElementById('bg-music');
function toggleMusic() {
  if (bgMusic.paused) {
    bgMusic.play();
  } else {
    bgMusic.pause();
  }
}

// Tombol play/pause musik (bisa ditambahkan di HTML)
