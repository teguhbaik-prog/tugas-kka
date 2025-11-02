document.addEventListener("DOMContentLoaded", function () {
  let currentSlide = 1;
  const totalSlides = 16;

  // Slides
  const slides = document.querySelectorAll(".slide");

  // Background music
  const bgMusic = new Audio("audio/bergema sampai selamanya.mp3");
  bgMusic.loop = true;
  bgMusic.volume = 0.5;

  // Music control
  const musicControl = document.createElement("div");
  musicControl.classList.add("music-control");
  musicControl.innerHTML = `
    <button id="playPause"><i class="fas fa-play"></i></button>
    <input type="range" id="volumeSlider" min="0" max="1" step="0.01" value="0.5">
  `;
  document.body.appendChild(musicControl);

  const playPauseBtn = document.getElementById("playPause");
  const volumeSlider = document.getElementById("volumeSlider");

  playPauseBtn.addEventListener("click", () => {
    if (bgMusic.paused) {
      bgMusic.play();
      playPauseBtn.innerHTML = `<i class="fas fa-pause"></i>`;
    } else {
      bgMusic.pause();
      playPauseBtn.innerHTML = `<i class="fas fa-play"></i>`;
    }
  });

  volumeSlider.addEventListener("input", () => {
    bgMusic.volume = volumeSlider.value;
  });

  // Show slide
  function showSlide(n) {
    slides.forEach((slide, index) => {
      slide.classList.remove("active");
      if (index === n - 1) {
        slide.classList.add("active");
      }
    });
  }

  // Slide navigation
  window.nextSlide = function () {
    if (currentSlide < totalSlides) {
      currentSlide++;
      showSlide(currentSlide);
    }
  };

  window.prevSlide = function () {
    if (currentSlide > 1) {
      currentSlide--;
      showSlide(currentSlide);
    }
  };

  window.goToSlide = function (n) {
    if (n >= 1 && n <= totalSlides) {
      currentSlide = n;
      showSlide(currentSlide);
    }
  };

  // Keyboard navigation
  document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight") nextSlide();
    if (e.key === "ArrowLeft") prevSlide();
  });

  // Floating icons random positions & smooth animation
  const floatingIcons = document.querySelectorAll(".floating-icon");
  floatingIcons.forEach((icon) => {
    icon.style.left = Math.random() * (window.innerWidth - 50) + "px";
    icon.style.top = Math.random() * (window.innerHeight - 50) + "px";
  });

  function animateFloating() {
    floatingIcons.forEach((icon) => {
      const moveX = (Math.random() - 0.5) * 10;
      const moveY = (Math.random() - 0.5) * 10;
      const rotate = (Math.random() - 0.5) * 20;
      icon.style.transform = `translate(${moveX}px, ${moveY}px) rotate(${rotate}deg)`;
    });
    requestAnimationFrame(animateFloating);
  }
  animateFloating();

  // Button hover animation
  const buttons = document.querySelectorAll(".btn");
  buttons.forEach((btn) => {
    btn.addEventListener("mouseenter", () => (btn.style.transform = "scale(1.1)"));
    btn.addEventListener("mouseleave", () => (btn.style.transform = "scale(1)"));
  });

  // Force music play (bypass autoplay restrictions)
  function forcePlayMusic() {
    bgMusic.play().catch(() => {
      console.log("Klik tombol play untuk memulai musik.");
    });
  }
  document.body.addEventListener("click", forcePlayMusic);

  // Show initial slide
  showSlide(currentSlide);
});
