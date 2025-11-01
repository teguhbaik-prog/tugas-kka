// ===========================
// SCRIPT SLIDE NAVIGASI
// ===========================

// Ambil semua slide
const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

// Tampilkan slide berdasarkan index
function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove('active');
    if (i === index) slide.classList.add('active');
  });
  currentSlide = index;
}

// Next slide
function nextSlide() {
  let nextIndex = currentSlide + 1;
  if (nextIndex >= slides.length) nextIndex = slides.length - 1;
  showSlide(nextIndex);
}

// Previous slide (jika mau tombol prev ditambahkan)
function prevSlide() {
  let prevIndex = currentSlide - 1;
  if (prevIndex < 0) prevIndex = 0;
  showSlide(prevIndex);
}

// Tombol "Sudah Mengerti" langsung ke slide penutup
function goToSlide(index) {
  if (index >= slides.length) index = slides.length - 1;
  showSlide(index);
}

// ===========================
// Optional: Keyboard Navigation
// ===========================
document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowRight') nextSlide();
  if (e.key === 'ArrowLeft') prevSlide();
});

// ===========================
// Optional: Auto Floating Icon Rotation (CSS handles animation)
// ===========================
// Floating icons sudah di CSS, jadi JS tidak perlu mengubah animasi

// ===========================
// Optional: Background Music Control
// ===========================
const bgMusic = document.getElementById('bg-music');

// Bisa tambahkan toggle musik
function toggleMusic() {
  if (bgMusic.paused) bgMusic.play();
  else bgMusic.pause();
}
