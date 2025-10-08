/* ==============================================
   modal-video.js
   - Gestion de la modale vidéo
============================================== */

// Sélection de TOUS les boutons avec la classe .btn-glow
const videoBtns = document.querySelectorAll('.btn-glow');
const modal = document.getElementById('video-modal');
const modalVideo = document.getElementById('modal-video');
const closeModalBtn = document.getElementById('close-modal');

if (modal && modalVideo && closeModalBtn) {
  
  // Ajouter l'événement à tous les boutons vidéo
  videoBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      
      // Récupérer le chemin de la vidéo
      const videoSrc = btn.getAttribute('data-video');
      
      // Charger la vidéo dans la modale
      modalVideo.querySelector('source').src = videoSrc;
      modalVideo.load();
      
      // Afficher la modale
      modal.classList.remove('opacity-0', 'pointer-events-none');
    });
  });

  // Fermer la modale avec le bouton X
  closeModalBtn.addEventListener('click', () => {
    modal.classList.add('opacity-0', 'pointer-events-none');
    modalVideo.pause();
    modalVideo.currentTime = 0;
  });

  // Fermer la modale en cliquant en dehors
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.add('opacity-0', 'pointer-events-none');
      modalVideo.pause();
      modalVideo.currentTime = 0;
    }
  });
}

/* ==============================================
   Fin de modal-video.js
============================================== */