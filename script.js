const slider = document.querySelector('.scroll-box');
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
    isDown = true;
    slider.style.cursor = 'grabbing';
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
});

slider.addEventListener('mouseleave', () => {
    isDown = false;
    slider.style.cursor = 'grab';
});

slider.addEventListener('mouseup', () => {
    isDown = false;
    slider.style.cursor = 'grab';
});

slider.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 2;
    slider.scrollLeft = scrollLeft - walk;
});




const nav = document.querySelector('nav');
const toggleHandle = document.querySelector('.nav-toggle-handle');

window.addEventListener('scroll', function() {
    if (window.scrollY > 100) {
        // Prepare nav off-screen fixed layout and show arrow button
        nav.classList.add('is-scrolled');
        toggleHandle.classList.add('visible');
    } else {
        // Reset everything when scrolled back to top
        nav.classList.remove('is-scrolled', 'dropdown-active');
        toggleHandle.classList.remove('visible', 'active');
    }
});

toggleHandle.addEventListener('click', function() {
    toggleHandle.classList.toggle('active');
    nav.classList.toggle('dropdown-active');
});