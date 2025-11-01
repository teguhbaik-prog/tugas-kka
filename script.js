let currentSlide = 1;
const totalSlides = 3;

function showSlide(n) {
  document.querySelectorAll('.slide').forEach(slide => slide.classList.remove('active'));
  document.getElementById(`slide-${n}`).classList.add('active');
}

function nextSlide() {
  if (currentSlide < totalSlides) {
    currentSlide++;
    showSlide(currentSlide);
  }
}

function goToSlide(n) {
  currentSlide = n;
  showSlide(n);
}
 
