document.addEventListener("DOMContentLoaded", function () {
  let currentSlide = 1;
  const totalSlides = 16;
  const slides = document.querySelectorAll(".slide");

  // ===== MUSIC =====
  const bgMusic = new Audio("audio/bergema sampai selamanya.mp3");
  bgMusic.loop = true;
  bgMusic.volume = 0.5;

  // Music controls overlay
  const musicControl = document.createElement("div");
  musicControl.style.position = "fixed";
  musicControl.style.top = "20px";
  musicControl.style.right = "20px";
  musicControl.style.zIndex = 999;
  musicControl.style.display = "flex";
  musicControl.style.alignItems = "center";
  musicControl.innerHTML = `
    <button id="music-toggle" style="background:none; border:none; color:white; font-size:1.5rem; cursor:pointer;">
      <i class="fas fa-volume-up"></i>
    </button>
    <input type="range" id="music-volume" min="0" max="1" step="0.01" value="0.5" style="margin-left:5px;">
  `;
  document.body.appendChild(musicControl);

  const musicToggleBtn = document.getElementById("music-toggle");
  const musicVolume = document.getElementById("music-volume");

  musicToggleBtn.addEventListener("click", () => {
    if (bgMusic.paused) {
      bgMusic.play();
      musicToggleBtn.innerHTML = '<i class="fas fa-volume-up"></i>';
    } else {
      bgMusic.pause();
      musicToggleBtn.innerHTML = '<i class="fas fa-volume-mute"></i>';
    }
  });

  musicVolume.addEventListener("input", () => {
    bgMusic.volume = musicVolume.value;
  });

  // Force play music on first click
  const startMusic = () => {
    bgMusic.play().catch(() => console.log("Klik untuk memulai musik."));
    document.body.removeEventListener("click", startMusic);
  };
  document.body.addEventListener("click", startMusic);

  // ===== SLIDE NAVIGATION =====
  function showSlide(n) {
    slides.forEach((slide, idx) => {
      slide.classList.remove("active");
      slide.style.opacity = 0;
      slide.style.transform = "translateY(20px)";
      if (idx === n - 1) {
        slide.classList.add("active");
        setTimeout(() => {
          slide.style.opacity = 1;
          slide.style.transform = "translateY(0)";
        }, 50);
      }
    });
    updateSlideIndicator();
  }

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

  // ===== KEYBOARD =====
  document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight") nextSlide();
    if (e.key === "ArrowLeft") prevSlide();
    if (e.key.toLowerCase() === "m") {
      musicToggleBtn.click(); // toggle music
    }
  });

  // ===== SLIDE INDICATOR =====
  const slideIndicator = document.createElement("div");
  slideIndicator.style.position = "fixed";
  slideIndicator.style.bottom = "20px";
  slideIndicator.style.right = "20px";
  slideIndicator.style.color = "white";
  slideIndicator.style.fontSize = "1rem";
  slideIndicator.style.zIndex = 999;
  document.body.appendChild(slideIndicator);

  function updateSlideIndicator() {
    slideIndicator.textContent = `Slide ${currentSlide} / ${totalSlides}`;
  }

  // ===== FLOATING ICONS =====
  const floatingIcons = document.querySelectorAll(".floating-icon");
  floatingIcons.forEach((icon, idx) => {
    const baseX = Math.random() * window.innerWidth * 0.8;
    const baseY = Math.random() * window.innerHeight * 0.8;
    const speed = 0.5 + Math.random() * 0.5;
    icon.dataset.baseX = baseX;
    icon.dataset.baseY = baseY;
    icon.dataset.speed = speed;
    icon.style.left = baseX + "px";
    icon.style.top = baseY + "px";
  });

  function animateFloatingIcons() {
    floatingIcons.forEach((icon) => {
      const time = Date.now() * 0.002 * icon.dataset.speed;
      const offsetX = Math.sin(time) * 20;
      const offsetY = Math.cos(time) * 20;
      icon.style.transform = `translate(${offsetX}px, ${offsetY}px) rotate(${offsetX + offsetY}deg)`;
    });
    requestAnimationFrame(animateFloatingIcons);
  }
  animateFloatingIcons();

  // ===== BUTTON HOVER EFFECTS =====
  const buttons = document.querySelectorAll(".btn");
  buttons.forEach((btn) => {
    btn.addEventListener("mouseenter", () => (btn.style.transform = "scale(1.1)"));
    btn.addEventListener("mouseleave", () => (btn.style.transform = "scale(1)"));
  });

  // ===== INITIAL SLIDE =====
  showSlide(currentSlide);

  // ===== LASTAREH MENGERTI BUTTON FIX =====
  const lastarehBtns = document.querySelectorAll(".choice-box button:first-child");
  lastarehBtns.forEach((btn) => {
    btn.addEventListener("click", () => goToSlide(totalSlides));
  });
});
