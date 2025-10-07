// Sélection du bouton "Résumé vidéo" et de la modale
const videoBtn = document.querySelector('.btn-glow');
const modal = document.getElementById('video-modal');
const modalVideo = document.getElementById('modal-video');
const closeModalBtn = document.getElementById('close-modal');

if(videoBtn && modal && modalVideo && closeModalBtn){
  videoBtn.addEventListener('click', (e) => {
    e.preventDefault(); // empêche le comportement du lien
    const videoSrc = videoBtn.getAttribute('data-video'); // récupère le lien de la vidéo
    modalVideo.querySelector('source').src = videoSrc;
    modalVideo.load(); // recharge la vidéo
    modal.classList.remove('opacity-0', 'pointer-events-none'); // affiche la modale
  });

  closeModalBtn.addEventListener('click', () => {
    modal.classList.add('opacity-0', 'pointer-events-none'); // masque la modale
    modalVideo.pause(); // stop la vidéo
  });

  // Fermeture si clic en dehors du contenu vidéo
  modal.addEventListener('click', (e) => {
    if(e.target === modal){
      modal.classList.add('opacity-0', 'pointer-events-none');
      modalVideo.pause();
    }
  });
}
