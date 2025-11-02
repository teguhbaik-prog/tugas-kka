document.addEventListener("DOMContentLoaded", function() {
  let currentSlide = 1;
  const totalSlides = 16;

  const slides = document.querySelectorAll(".slide");

  // MUSIC SETUP
  const bgMusic = new Audio("bergema sampai selamanya.mp3");
  bgMusic.loop = true;
  bgMusic.volume = 0.5;

  // Music control buttons
  const musicControl = document.createElement("div");
  musicControl.classList.add("music-control");
  musicControl.innerHTML = `
    <button id="music-toggle"><i class="fas fa-play"></i></button>
    <input type="range" id="music-volume" min="0" max="1" step="0.01" value="0.5">
  `;
  document.body.appendChild(musicControl);

  const musicToggleBtn = document.getElementById("music-toggle");
  const musicVolume = document.getElementById("music-volume");

  musicToggleBtn.addEventListener("click", () => {
    if (bgMusic.paused) {
      bgMusic.play();
      musicToggleBtn.innerHTML = '<i class="fas fa-pause"></i>';
    } else {
      bgMusic.pause();
      musicToggleBtn.innerHTML = '<i class="fas fa-play"></i>';
    }
  });

  musicVolume.addEventListener("input", () => {
    bgMusic.volume = musicVolume.value;
  });

  // Force autoplay on first click if blocked by browser
  const forcePlayMusic = () => {
    bgMusic.play().catch(() => {
      console.log("Klik tombol musik untuk memulai audio.");
    });
  };
  document.body.addEventListener("click", forcePlayMusic, {once: true});

  // SLIDE FUNCTIONS
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

  // FLOATING ICONS ANIMATION
  const floatingIcons = document.querySelectorAll(".floating-icon");
  floatingIcons.forEach((icon, idx) => {
    icon.style.left = `${Math.random() * window.innerWidth * 0.8}px`;
    icon.style.top = `${Math.random() * window.innerHeight * 0.8}px`;
    icon.style.animationDelay = `${idx * 0.5}s`;
  });

  function animateFloating() {
    floatingIcons.forEach(icon => {
      const translateX = (Math.random() - 0.5) * 15;
      const translateY = (Math.random() - 0.5) * 15;
      const rotateDeg = (Math.random() - 0.5) * 15;
      icon.style.transform = `translate(${translateX}px, ${translateY}px) rotate(${rotateDeg}deg)`;
    });
    requestAnimationFrame(animateFloating);
  }
  animateFloating();

  // BUTTON HOVER EFFECTS
  const buttons = document.querySelectorAll(".btn");
  buttons.forEach(btn => {
    btn.addEventListener("mouseenter", () => btn.style.transform = "scale(1.1)");
    btn.addEventListener("mouseleave", () => btn.style.transform = "scale(1)");
  });

  // Special: lastareh mengerti button to go last slide
  const lastarehButtons = document.querySelectorAll("button");
  lastarehButtons.forEach(btn => {
    if (btn.textContent.toLowerCase().includes("lastareh mengerti")) {
      btn.addEventListener("click", () => {
        goToSlide(totalSlides);
      });
    }
  });

  // INITIAL SLIDE
  showSlide(currentSlide);
});
