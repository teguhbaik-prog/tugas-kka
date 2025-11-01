// ----- MUSIC -----
const bgMusic = document.createElement('audio');
bgMusic.src = 'audio/bergema sampai selamanya.mp3';
bgMusic.autoplay = true;
bgMusic.loop = true;
bgMusic.volume = 0.5;
document.body.appendChild(bgMusic);

// ----- SLIDES -----
let currentSlide = 1;
const totalSlides = 16;

function showSlide(slideNumber) {
  const slides = document.querySelectorAll('.slide');
  slides.forEach((slide, index) => {
    if (index + 1 === slideNumber) {
      slide.classList.add('active');
    } else {
      slide.classList.remove('active');
    }
  });
}

function nextSlide() {
  if (currentSlide < totalSlides) {
    currentSlide++;
    showSlide(currentSlide);
  }
}

function goToSlide(slideNumber) {
  if (slideNumber >= 1 && slideNumber <= totalSlides) {
    currentSlide = slideNumber;
    showSlide(currentSlide);
  }
}

// ----- KEYBOARD NAVIGATION -----
document.addEventListener('keydown', function(event) {
  if (event.key === 'ArrowRight' || event.key === ' ') {
    nextSlide();
  }
  if (event.key === 'ArrowLeft') {
    if (currentSlide > 1) {
      currentSlide--;
      showSlide(currentSlide);
    }
  }
});

// ----- INITIAL DISPLAY -----
showSlide(currentSlide);
