// vanta-init.js - Initialisation de l'effet Vanta.js Globe

// Attendre que le DOM et Vanta soient prêts
window.addEventListener('DOMContentLoaded', function() {
  
  // Vérifier que Vanta est chargé
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
        color: 0xff5eaf,        // Rose/corail
        backgroundColor: 0xfff0f5  // Fond rose très clair
      });
      console.log('✅ Vanta.js Globe activé !');
    } catch (error) {
      console.error('❌ Erreur initialisation Vanta.js:', error);
    }
  } else {
    console.warn('⚠️ Vanta.js n\'est pas chargé. Vérifiez le CDN.');
  }

  // Activer les icônes Feather
  if (typeof feather !== 'undefined') {
    feather.replace();
    console.log('✅ Feather Icons activés !');
  }

  // Smooth scroll pour tous les liens d'ancre
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      
      // Éviter les ancres vides
      if (targetId === '#' || targetId === '#résumé-vidéo') {
        return;
      }

      const target = document.querySelector(targetId);
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

});