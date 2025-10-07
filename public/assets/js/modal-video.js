// modal-video.js - Gestion de la modale vidéo

document.addEventListener('DOMContentLoaded', function() {
  
  const modal = document.getElementById('video-modal');
  const modalVideo = document.getElementById('modal-video');
  const closeBtn = document.getElementById('close-modal');
  
  // Boutons pour ouvrir la vidéo (desktop et mobile)
  const videoBtn = document.getElementById('video-btn');
  const videoBtnMobile = document.getElementById('video-btn-mobile');

  // Fonction pour ouvrir la modale
  function openModal(e) {
    e.preventDefault();
    const videoSrc = e.currentTarget.getAttribute('data-video');
    
    console.log('🎬 Tentative d\'ouverture vidéo:', videoSrc);
    
    if (videoSrc && modal && modalVideo) {
      const source = modalVideo.querySelector('source');
      source.src = videoSrc;
      modalVideo.load();
      modal.classList.remove('opacity-0', 'pointer-events-none');
      modal.classList.add('opacity-100');
      
      // Empêcher le scroll du body
      document.body.style.overflow = 'hidden';
      
      console.log('✅ Modal vidéo ouverte !');
    } else {
      console.error('❌ Erreur: éléments manquants', {
        videoSrc,
        modal: !!modal,
        modalVideo: !!modalVideo
      });
    }
  }

  // Fonction pour fermer la modale
  function closeModal() {
    if (modal && modalVideo) {
      modal.classList.remove('opacity-100');
      modal.classList.add('opacity-0', 'pointer-events-none');
      modalVideo.pause();
      modalVideo.currentTime = 0;
      
      // Réactiver le scroll du body
      document.body.style.overflow = 'auto';
    }
  }

  // Event listeners
  if (videoBtn) {
    videoBtn.addEventListener('click', openModal);
  }

  if (videoBtnMobile) {
    videoBtnMobile.addEventListener('click', openModal);
  }

  if (closeBtn) {
    closeBtn.addEventListener('click', closeModal);
  }

  // Fermer si clic en dehors du contenu
  if (modal) {
    modal.addEventListener('click', function(e) {
      if (e.target === modal) {
        closeModal();
      }
    });
  }

  // Fermer avec la touche Escape
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && modal && !modal.classList.contains('pointer-events-none')) {
      closeModal();
    }
  });

});