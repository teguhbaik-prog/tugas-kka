document.addEventListener("DOMContentLoaded", function() {
  let currentSlide = 1;
  const totalSlides = 16;

  const slides = document.querySelectorAll(".slide");
  const buttons = document.querySelectorAll(".btn");
  const floatingIcons = document.querySelectorAll(".floating-icon");

  // ===================== MUSIC =====================
  const bgMusic = document.createElement("audio");
  bgMusic.src = "audio/bergema sampai selamanya.mp3";
  bgMusic.loop = true;
  bgMusic.volume = 0.5;
  document.body.appendChild(bgMusic);

  const playMusic = () => {
    bgMusic.play().catch(() => {
      console.log("Klik layar untuk memulai musik.");
    });
  };

  // Paksa musik play saat klik body atau tombol
  document.body.addEventListener("click", playMusic);
  buttons.forEach(btn => btn.addEventListener("click", playMusic));

  // ===================== SHOW SLIDE =====================
  function showSlide(n) {
    slides.forEach((slide, idx) => {
      slide.classList.remove("active");
      if (idx === n - 1) {
        slide.classList.add("active");
      }
    });
  }

  // ===================== NAVIGATION =====================
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

  // ===================== FLOATING ICONS =====================
  floatingIcons.forEach((icon, idx) => {
    const randomX = Math.random() * window.innerWidth * 0.8;
    const randomY = Math.random() * window.innerHeight * 0.8;
    icon.style.left = `${randomX}px`;
    icon.style.top = `${randomY}px`;
    icon.style.animationDelay = `${idx * 0.5}s`;
  });

  function animateFloating() {
    floatingIcons.forEach(icon => {
      const translateX = (Math.random() - 0.5) * 30;
      const translateY = (Math.random() - 0.5) * 30;
      const rotate = (Math.random() - 0.5) * 20;
      icon.style.transform = `translate(${translateX}px, ${translateY}px) rotate(${rotate}deg)`;
    });
    requestAnimationFrame(animateFloating);
  }
  animateFloating();

  // ===================== BUTTON HOVER =====================
  buttons.forEach(btn => {
    btn.addEventListener("mouseenter", () => {
      btn.style.transform = "scale(1.12) rotate(-2deg)";
      btn.style.boxShadow = "0 8px 25px rgba(255,75,43,0.6)";
    });
    btn.addEventListener("mouseleave", () => {
      btn.style.transform = "scale(1)";
      btn.style.boxShadow = "0 5px 15px rgba(255,75,43,0.5)";
    });
  });

  // ===================== INITIAL SLIDE =====================
  showSlide(currentSlide);

  // ===================== LASTAREH BUTTON LOGIC =====================
  const choiceButtons = document.querySelectorAll(".choice-box .btn");
  choiceButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      if (btn.textContent.toLowerCase().includes("lastareh")) {
        goToSlide(totalSlides);
      }
    });
  });

  // ===================== AUTO-PLAY FALLBACK =====================
  const tryPlayMusic = () => {
    bgMusic.play().catch(() => {
      console.log("Klik tombol atau layar untuk memulai musik.");
    });
  };
  setTimeout(tryPlayMusic, 500);
});
