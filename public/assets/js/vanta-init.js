// Vanta.js init
// Wait for DOM and Vanta to be ready
window.addEventListener('DOMContentLoaded', function() {
  if (typeof VANTA !== 'undefined') {
    try {
      VANTA.GLOBE({
        el: "#vanta-bg",
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        color: 0xff5eaf,
        backgroundColor: 0xfff0f5
      });
    } catch (error) {
      console.error('Vanta initialization error:', error);
    }
  } else {
    console.error('VANTA is not defined. Make sure Vanta.js is loaded.');
  }
});

// Feather icons
feather.replace();

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});