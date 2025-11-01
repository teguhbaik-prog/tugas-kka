document.addEventListener("DOMContentLoaded", function() {
  let currentSlide = 1;
  const totalSlides = 16;

  var audioplaying = false;
  function music(){
    var audio = document;getElementbyId("bgMusic");
    if (laudioplaying) audio.play();
    else audio.pause();
    audioplaying = laudioPlaying
    
  const slides = document.querySelectorAll(".slide");
  const bgMusic = document.createElement("audio");
  bgMusic.src = "audio/bergema sampai selamanya.mp3";
  bgMusic.loop = true;
  bgMusic.autoplay = true;
  bgMusic.volume = 0.5;
  document.body.appendChild(bgMusic);

  function showSlide(n) {
    slides.forEach((slide, index) => {
      slide.classList.remove("active");
      if (index === n - 1) {
        slide.classList.add("active");
      }
    });
  }

  window.nextSlide = function() {
    if (currentSlide < totalSlides) {
      currentSlide++;
      showSlide(currentSlide);
    }
  };

  window.prevSlide = function() {
    if (currentSlide > 1) {
      currentSlide--;
      showSlide(currentSlide);
    }
  };

  window.goToSlide = function(n) {
    if (n >= 1 && n <= totalSlides) {
      currentSlide = n;
      showSlide(currentSlide);
    }
  };

  // Keyboard navigation
  document.addEventListener("keydown", function(e) {
    if (e.key === "ArrowRight") nextSlide();
    if (e.key === "ArrowLeft") prevSlide();
  });

  // Floating icons animation logic
  const floatingIcons = document.querySelectorAll(".floating-icon");
  floatingIcons.forEach((icon, idx) => {
    const randomX = Math.random() * window.innerWidth * 0.8;
    const randomY = Math.random() * window.innerHeight * 0.8;
    icon.style.left = `${randomX}px`;
    icon.style.top = `${randomY}px`;
    icon.style.animationDelay = `${idx * 0.5}s`;
  });

  function animateFloating() {
    floatingIcons.forEach(icon => {
      const translateX = (Math.random() - 0.5) * 20;
      const translateY = (Math.random() - 0.5) * 20;
      icon.style.transform = `translate(${translateX}px, ${translateY}px) rotate(${Math.random() * 20}deg)`;
    });
    requestAnimationFrame(animateFloating);
  }
  animateFloating();

  // Button hover effects
  const buttons = document.querySelectorAll(".btn");
  buttons.forEach(btn => {
    btn.addEventListener("mouseenter", () => btn.style.transform = "scale(1.1)");
    btn.addEventListener("mouseleave", () => btn.style.transform = "scale(1)");
  });

  // Show initial slide
  showSlide(currentSlide);

  // Ensure music plays in all browsers
  const playMusic = () => {
    bgMusic.play().catch(() => {
      console.log("Klik tombol untuk memulai musik.");
    });
  };

  // Auto-play fallback
  document.body.addEventListener("click", playMusic);
});
