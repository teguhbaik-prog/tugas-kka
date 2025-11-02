document.addEventListener("DOMContentLoaded", function() {
  let currentSlide = 1;
  const totalSlides = 16;
  const slides = document.querySelectorAll(".slide");

  // Buat elemen musik
  const bgMusic = document.createElement("audio");
  bgMusic.src = "audio/bergema sampai selamanya.mp3";
  bgMusic.loop = true;
  bgMusic.volume = 0.5;
  bgMusic.id = "bgMusic";
  document.body.appendChild(bgMusic);

  // Fungsi tampilkan slide
  function showSlide(n) {
    slides.forEach((slide, idx) => {
      slide.classList.remove("active");
      if (idx === n - 1) slide.classList.add("active");
    });
  }

  // Navigasi slide
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

  // Keyboard navigasi
  document.addEventListener("keydown", function(e) {
    if (e.key === "ArrowRight") nextSlide();
    if (e.key === "ArrowLeft") prevSlide();
  });

  // Floating icons acak
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
      const rotate = Math.random() * 20;
      icon.style.transform = `translate(${translateX}px, ${translateY}px) rotate(${rotate}deg)`;
    });
    requestAnimationFrame(animateFloating);
  }
  animateFloating();

  // Tombol hover efek
  const buttons = document.querySelectorAll(".btn");
  buttons.forEach(btn => {
    btn.addEventListener("mouseenter", () => btn.style.transform = "scale(1.1)");
    btn.addEventListener("mouseleave", () => btn.style.transform = "scale(1)");
  });

  // Autoplay musik paksa
  function playMusic() {
    bgMusic.play().catch(() => {
      console.log("Klik di layar untuk memulai musik.");
    });
  }

  // Klik di body untuk memulai musik (fallback browser)
  document.body.addEventListener("click", playMusic);

  // Tombol lastareh Mengerti otomatis lompat ke slide terakhir
  const lastarehBtn = document.querySelector("#slide-1 .choice-box button:first-child");
  if (lastarehBtn) {
    lastarehBtn.addEventListener("click", function() {
      goToSlide(totalSlides);
      playMusic();
    });
  }

  // Tombol bunten Mengerti lanjut normal
  const buntenBtn = document.querySelector("#slide-1 .choice-box button:last-child");
  if (buntenBtn) {
    buntenBtn.addEventListener("click", function() {
      nextSlide();
      playMusic();
    });
  }

  // Tampilkan slide awal
  showSlide(currentSlide);

  // Cek resize window untuk floating icons agar tetap responsif
  window.addEventListener("resize", () => {
    floatingIcons.forEach(icon => {
      const x = Math.random() * window.innerWidth * 0.8;
      const y = Math.random() * window.innerHeight * 0.8;
      icon.style.left = `${x}px`;
      icon.style.top = `${y}px`;
    });
  });
});
