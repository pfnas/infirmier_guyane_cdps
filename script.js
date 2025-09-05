// =======================
// CAROUSEL
// =======================
document.querySelectorAll('.carousel-wrapper').forEach(wrapper => {
    const mainImg = wrapper.querySelector('.displayed-img');
    const thumbs = wrapper.querySelectorAll('.thumb');
    const prevBtn = wrapper.querySelector('.nav.left');
    const nextBtn = wrapper.querySelector('.nav.right');
    let currentIndex = 0;

    function showImage(index) {
        if(index < 0) index = thumbs.length - 1;
        if(index >= thumbs.length) index = 0;
        currentIndex = index;
        mainImg.src = thumbs[currentIndex].src;

        thumbs.forEach(t => t.classList.remove('active'));
        thumbs[currentIndex].classList.add('active');
    }

    // Miniatures click
    thumbs.forEach((thumb, idx) => {
        thumb.addEventListener('click', () => showImage(idx));
    });

    // Navigation buttons
    prevBtn.addEventListener('click', () => showImage(currentIndex - 1));
    nextBtn.addEventListener('click', () => showImage(currentIndex + 1));
});

// =======================
// HAMBURGER MENU
// =======================
const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('header nav');
const overlay = document.querySelector('.nav-overlay');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    nav.classList.toggle('active');
    overlay.classList.toggle('active');
});

// Clic sur overlay pour fermer le menu
overlay.addEventListener('click', () => {
    hamburger.classList.remove('active');
    nav.classList.remove('active');
    overlay.classList.remove('active');
});

// Dropdown mobile
document.querySelectorAll('.dropdown-toggle').forEach(toggle => {
    toggle.addEventListener('click', e => {
        e.preventDefault();
        const parent = toggle.parentElement;
        parent.classList.toggle('open');
    });
});

// Bouton Dark Mode
const darkModeBtn = document.getElementById("dark-mode-btn");

darkModeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});
