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
        if (index < 0) index = thumbs.length - 1;
        if (index >= thumbs.length) index = 0;
        currentIndex = index;
        mainImg.src = thumbs[currentIndex].src;

        thumbs.forEach(t => t.classList.remove('active'));
        thumbs[currentIndex].classList.add('active');
    }

    thumbs.forEach((thumb, idx) => {
        thumb.addEventListener('click', () => showImage(idx));
    });

    prevBtn?.addEventListener('click', () => showImage(currentIndex - 1));
    nextBtn?.addEventListener('click', () => showImage(currentIndex + 1));
});

// =======================
// HAMBURGER MENU
// =======================
const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('header nav');
const overlay = document.querySelector('.nav-overlay');

if (hamburger && nav && overlay) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        nav.classList.toggle('active');
        overlay.classList.toggle('active');
    });

    overlay.addEventListener('click', () => {
        hamburger.classList.remove('active');
        nav.classList.remove('active');
        overlay.classList.remove('active');
    });
}

// =======================
// DROPDOWN MOBILE
// =======================
document.querySelectorAll('.dropdown-toggle').forEach(toggle => {
    toggle.addEventListener('click', e => {
        e.preventDefault();
        const parent = toggle.parentElement;
        parent.classList.toggle('open');
    });
});

// =======================
// DARK MODE
// =======================
const darkModeBtn = document.getElementById("dark-mode-btn");
if (darkModeBtn) {
    darkModeBtn.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
    });
}

// =======================
// SECTION NAV (optionnel)
// =======================
const sectionNav = document.querySelector('.section-nav');
if (sectionNav) {
    sectionNav.style.opacity = '0';
    sectionNav.style.transform = 'translateY(-20px)';

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            sectionNav.style.opacity = '1';
            sectionNav.style.transform = 'translateY(0)';
        } else {
            sectionNav.style.opacity = '0';
            sectionNav.style.transform = 'translateY(-20px)';
        }
    });
}

// =======================
// LIGHTBOX (délégué, global)
// =======================
(function initLightbox() {
    const EXCLUDE_SELECTOR = '.icon-title, .icon-toucan, .no-lightbox';

    function buildLightboxElement() {
        const lb = document.createElement('div');
        lb.id = 'lightbox';
        lb.style.cssText = 'display:none; position:fixed; inset:0; background:rgba(0,0,0,0.85); justify-content:center; align-items:center; z-index:3000;';
        
        const closeBtn = document.createElement('button');
        closeBtn.id = 'lightbox-close';
        closeBtn.innerHTML = '&times;';
        closeBtn.style.cssText = 'position:absolute; top:18px; right:26px; font-size:2.2rem; color:#fff; background:none; border:none; cursor:pointer;';
        
        const img = document.createElement('img');
        img.id = 'lightbox-img';
        img.style.cssText = 'max-width:90%; max-height:90%; object-fit:contain; border-radius:12px; box-shadow:0 4px 20px rgba(0,0,0,.5);';
        
        lb.appendChild(closeBtn);
        lb.appendChild(img);
        document.body.appendChild(lb);
        return lb;
    }

    const lightbox = document.getElementById('lightbox') || buildLightboxElement();
    const lbImg = lightbox.querySelector('#lightbox-img');
    const lbClose = lightbox.querySelector('#lightbox-close');

    function openLightbox(imgEl) {
        if (!imgEl) return;
        if (imgEl.matches(EXCLUDE_SELECTOR)) return;
        if (imgEl.closest('#lightbox')) return;
        if (imgEl.naturalWidth && imgEl.naturalWidth < 40) return;

        lbImg.src = imgEl.src;
        lbImg.alt = imgEl.alt || '';
        lightbox.style.display = 'flex';
        document.documentElement.style.overflow = 'hidden';
    }

    function closeLightbox() {
        lightbox.style.display = 'none';
        lbImg.src = '';
        lbImg.alt = '';
        document.documentElement.style.overflow = '';
    }

    document.addEventListener('click', (e) => {
        const img = e.target.closest('img');
        if (!img) return;
        if (img.closest('#lightbox')) return;
        if (img.matches(EXCLUDE_SELECTOR)) return;
        openLightbox(img);
    });

    lbClose?.addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) closeLightbox();
    });
    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeLightbox();
    });
})();
