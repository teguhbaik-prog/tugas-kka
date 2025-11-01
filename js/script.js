// Ambil semua slide
const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

// Tombol navigasi "next"
function nextSlide() {
  slides[currentSlide].classList.remove('active');
  currentSlide++;
  if (currentSlide >= slides.length) {
    currentSlide = slides.length - 1; // tetap di slide terakhir
  }
  slides[currentSlide].classList.add('active');
}

// Tombol "Sudah Mengerti" -> langsung ke slide 16
function goToSlide(slideNumber) {
  slides[currentSlide].classList.remove('active');
  currentSlide = slideNumber - 1;
  slides[currentSlide].classList.add('active');
}

// Background music autoplay
const bgMusic = document.createElement('audio');
bgMusic.src = 'audio/bergema sampai selamanya.mp3';
bgMusic.autoplay = true;
bgMusic.loop = true;
bgMusic.volume = 0.3;
document.body.appendChild(bgMusic);

// Optional: klik slide untuk lanjut (alternatif)
slides.forEach(slide => {
  slide.addEventListener('click', () => {
    nextSlide();
  });
});
