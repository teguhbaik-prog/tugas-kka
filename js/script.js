// script.js

let currentSlide = 1;
const totalSlides = 16;
const slides = document.querySelectorAll('.slide');

// Background music
const bgMusic = new Audio('audio/bergema sampai selamanya.mp3');
bgMusic.loop = true;
bgMusic.volume = 0.3;

// mulai musik setelah klik salah satu tombol
document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('click', () => {
        if(bgMusic.paused) bgMusic.play().catch(e => console.log(e));
    });
});

// Tampilkan slide tertentu
function showSlide(n){
    slides.forEach((slide, index) => {
        if(index === n - 1){
            slide.classList.add('active');
            slide.classList.add('fade-in');
        } else {
            slide.classList.remove('active');
            slide.classList.remove('fade-in');
        }
    });
    currentSlide = n;
}

// Tombol next
function nextSlide(){
    if(currentSlide < totalSlides){
        showSlide(currentSlide + 1);
    }
}

// Tombol Sudah Mengerti: langsung ke slide 16
function goToSlide(n){
    if(n >= 1 && n <= totalSlides){
        showSlide(n);
    }
}

// Tombol prev (opsional)
function prevSlide(){
    if(currentSlide > 1){
        showSlide(currentSlide - 1);
    }
}

// Keyboard navigasi
document.addEventListener('keydown', function(e){
    if(e.key === "ArrowRight"){
        nextSlide();
    } else if(e.key === "ArrowLeft"){
        prevSlide();
    }
});

// Inisialisasi slide pertama
document.addEventListener('DOMContentLoaded', function(){
    showSlide(1);
});
