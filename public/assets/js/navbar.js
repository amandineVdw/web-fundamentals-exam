/* ==============================================
   navbar.js
   - Gestion du menu mobile
   - Animation de la navbar au scroll
============================================== */

// === Menu mobile toggle ===
document.getElementById('mobile-menu-btn')?.addEventListener('click', function() {
  const menu = document.getElementById('mobile-menu');
  const icon = this.querySelector('i');
  
  // Toggle du menu
  menu.classList.toggle('hidden');
  
  // Changer l'icône menu <-> X
  const isOpen = !menu.classList.contains('hidden');
  if (isOpen) {
    icon.setAttribute('data-feather', 'x');
  } else {
    icon.setAttribute('data-feather', 'menu');
  }
  
  // Réactiver les icônes Feather
  if (typeof feather !== 'undefined') {
    feather.replace();
  }
});

// === Fermer le menu mobile quand on clique sur un lien ===
document.querySelectorAll('#mobile-menu a').forEach(link => {
  link.addEventListener('click', () => {
    const menu = document.getElementById('mobile-menu');
    const btn = document.getElementById('mobile-menu-btn');
    const icon = btn?.querySelector('i');
    
    menu.classList.add('hidden');
    
    if (icon) {
      icon.setAttribute('data-feather', 'menu');
      if (typeof feather !== 'undefined') {
        feather.replace();
      }
    }
  });
});

// === Animation de la navbar au scroll ===
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

if (navbar) {
  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    // Ajouter une ombre plus prononcée au scroll
    if (currentScroll > 50) {
      navbar.classList.add('shadow-xl');
    } else {
      navbar.classList.remove('shadow-xl');
    }

    // ❌ SUPPRIMÉ : La partie qui cache la navbar
    // Cette partie faisait disparaître ta navbar au scroll vers le bas
    // Si tu veux la réactiver plus tard, décommente ces lignes :
    
    // if (currentScroll > lastScroll && currentScroll > 100) {
    //   navbar.style.transform = 'translateY(-100%)';
    // } else {
    //   navbar.style.transform = 'translateY(0)';
    // }

    lastScroll = currentScroll;
  });
}

/* ==============================================
   Fin de navbar.js
============================================== */