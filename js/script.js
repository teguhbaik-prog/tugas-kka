// ========== ELEMENT SELEKTOR ========== //
const slides = document.querySelectorAll(".slide");
const btnNext = document.getElementById("next");
const btnPrev = document.getElementById("prev");
let currentSlide = 0;


// ========== SLIDE HANDLER ========== //
function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove("active");
    if (i === index) slide.classList.add("active");
  });
}

function nextSlide() {
  currentSlide++;
  if (currentSlide >= slides.length) currentSlide = 0;
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide--;
  if (currentSlide < 0) currentSlide = slides.length - 1;
  showSlide(currentSlide);
}

if (btnNext) btnNext.addEventListener("click", nextSlide);
if (btnPrev) btnPrev.addEventListener("click", prevSlide);


// ========== AUTO MUSIC PLAY FIX (HP & PC) ========== //
let audio = new Audio("bergema sampai selamanya.mp3");
audio.loop = true;

// Auto-play (beberapa browser blokir sebelum interaksi user)
function enableAudio() {
  audio.play().catch(() => { /* ignore */ });
  document.removeEventListener("click", enableAudio);
  document.removeEventListener("touchstart", enableAudio);
}

document.addEventListener("click", enableAudio);
document.addEventListener("touchstart", enableAudio);

// Auto-play percobaan awal
audio.play().catch(() => { /* kalau gagal, tunggu interaksi */ });


// ========== ANIMASI FLOATING ICON RANDOM ========== //
function randomFloatIcons() {
  const icons = ["⚙️","💠","🔹","◽","◆"];
  for (let i = 0; i < 8; i++) {
    let icon = document.createElement("div");
    icon.classList.add("floating-icon");
    icon.innerText = icons[Math.floor(Math.random() * icons.length)];
    icon.style.left = Math.random() * 100 + "%";
    icon.style.top = Math.random() * 100 + "%";
    icon.style.animationDuration = (4 + Math.random() * 6) + "s";
    document.body.appendChild(icon);
  }
}
randomFloatIcons();


// ========== OPTIONAL AUTO SLIDE (HIDUPKAN KALO BUTUH) ========== //
// setInterval(nextSlide, 9000); // 9 detik sekali
