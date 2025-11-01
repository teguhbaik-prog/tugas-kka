// script.js

let currentSlide = 1;
const totalSlides = 16;

function showSlide(slideNumber) {
    const slides = document.querySelectorAll('.slide');
    slides.forEach(slide => slide.classList.remove('active'));
    const targetSlide = document.getElementById(`slide-${slideNumber}`);
    if (targetSlide) {
        targetSlide.classList.add('active');
        currentSlide = slideNumber;
    }
}

function nextSlide() {
    if (currentSlide < totalSlides) {
        showSlide(currentSlide + 1);
    }
}

function prevSlide() {
    if (currentSlide > 1) {
        showSlide(currentSlide - 1);
    }
}

// Tombol "Sudah Mengerti" slide 1 → langsung ke slide 16
function goToSlide(slideNumber) {
    showSlide(slideNumber);
}

// Optional: kontrol keyboard (panah kanan/kiri)
document.addEventListener('keydown', (e) => {
    if (e.key === "ArrowRight") {
        nextSlide();
    } else if (e.key === "ArrowLeft") {
        prevSlide();
    }
});

// Ambil element audio
const bgMusic = document.getElementById('bg-music');

// Atur volume rendah agar tidak mengganggu
bgMusic.volume = 0.3;

// Bisa juga kontrol pause/play dengan tombol jika ingin
function toggleMusic() {
    if(bgMusic.paused) {
        bgMusic.play();
    } else {
        bgMusic.pause();
    }
}


