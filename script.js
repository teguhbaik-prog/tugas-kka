let currentSlide = 1;
const totalSlides = 12;

// Tampilkan slide sesuai index
function showSlide(n) {
  document.querySelectorAll('.slide').forEach((slide, i) => {
    slide.style.transform = `translateX(${(i - (n - 1)) * 100}%)`;
    slide.style.opacity = (i === n - 1) ? '1' : '0';
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

// Jump to slide tertentu
function goToSlide(n) {
  if (n >= 1 && n <= totalSlides) {
    currentSlide = n;
    showSlide(currentSlide);
  }
}

// Tombol Sudah Mengerti / Tidak Mengerti
function pilihMengerti() {
  goToSlide(12); // langsung ke slide penutup
}
function pilihBelumMengerti() {
  goToSlide(3); // lanjut ke materi awal
}

// Background music control
const bgMusic = document.getElementById('bg-music');
bgMusic.volume = 0.2;
bgMusic.play();

// Inisialisasi slide pertama
showSlide(currentSlide);

// Keyboard navigation
document.addEventListener('keydown', (e) => {
  if(e.key === 'ArrowRight') nextSlide();
  if(e.key === 'ArrowLeft') prevSlide();
});
