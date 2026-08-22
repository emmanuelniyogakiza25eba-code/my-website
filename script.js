// Dynamic copyright year
document.getElementById('year').textContent = new Date().getFullYear();

// Mobile Nav Toggle
const menuToggle = document.getElementById('menuToggle');
const navOverlay = document.getElementById('navOverlay');
const navLinks = document.querySelectorAll('.nav-link');

menuToggle.addEventListener('click', () => {
    const isActive = navOverlay.classList.toggle('active');
    menuToggle.textContent = isActive ? 'Close' : 'Menu';
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navOverlay.classList.remove('active');
        menuToggle.textContent = 'Menu';
    });
});

// Interactive Parallax Head Tilt (Simulates Eyes Following Mouse on PNG)
const avatarImg = document.querySelector('.avatar-img');
const avatarContainer = document.querySelector('.avatar-container');

window.addEventListener('mousemove', (e) => {
    if (!avatarImg || !avatarContainer) return;

    // Check if user is currently hovering the container to let CSS hover take priority
    if (avatarContainer.matches(':hover')) return;

    const rect = avatarContainer.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    // Relative offset from center screen (-1 to 1)
    const deltaX = (e.clientX - centerX) / (window.innerWidth / 2);
    const deltaY = (e.clientY - centerY) / (window.innerHeight / 2);

    // Dynamic angles and positioning values
    const maxTilt = 14; 
    const maxMove = 10;

    const tiltX = -deltaY * maxTilt;
    const tiltY = deltaX * maxTilt;
    const moveX = deltaX * maxMove;
    const moveY = deltaY * maxMove;

    // Smoothly tilt and shift image to track cursor direction
    avatarImg.style.transform = `rotateX(${tiltX}deg) rotateY(${tiltY}deg) translate(${moveX}px, ${moveY}px)`;
});

// Reset tilt transform when mouse leaves window
window.addEventListener('mouseleave', () => {
    if (avatarImg && !avatarContainer.matches(':hover')) {
        avatarImg.style.transform = 'rotateX(0deg) rotateY(0deg) translate(0px, 0px)';
    }
});