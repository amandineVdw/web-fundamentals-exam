/* ==============================================
   load-components.js
   - Injection des composants HTML dans index.html
   - Activation des icônes Feather
   - Gestion du bouton "Résumé vidéo"
============================================== */

// Liste des composants et leurs placeholders
const components = [
  { id: "navbar-placeholder", file: "components/navbar.html" },
  { id: "hero-section-placeholder", file: "components/hero-section.html" },
  { id: "timeline-section-placeholder", file: "components/timeline-section.html" },
  { id: "urls-section-placeholder", file: "components/urls-section.html" },
  { id: "domains-section-placeholder", file: "components/domains-section.html" },
  { id: "standards-section-placeholder", file: "components/standards-section.html" },
  { id: "security-section-placeholder", file: "components/security-section.html" },
  { id: "quiz-section-placeholder", file: "components/quiz-section.html" },
  { id: "footer-placeholder", file: "components/footer.html" }
];

/* -----------------------------
   Fonction pour charger un composant
------------------------------ */
function loadComponent(component) {
  return fetch(component.file)
    .then(res => {
      if (!res.ok) throw new Error(`${component.file} introuvable`);
      return res.text();
    })
    .then(html => {
      const placeholder = document.getElementById(component.id);
      if (placeholder) {
        placeholder.innerHTML = html;
        console.log(`${component.file} chargé dans #${component.id}`);
      }
    });
}

/* -----------------------------
   Charger tous les composants
------------------------------ */
Promise.all(components.map(loadComponent))
  .then(() => {
    // -----------------------------
    // Activer Feather Icons
    // -----------------------------
    if (typeof feather !== 'undefined') {
      feather.replace(); // transforme tous les <i data-feather="...">
    }

    // -----------------------------
    // Gestion du bouton "Résumé vidéo"
    // -----------------------------
    const videoBtn = document.querySelector('.btn-glow');
    const modal = document.getElementById('video-modal');
    const modalVideo = document.getElementById('modal-video');
    const closeModal = document.getElementById('close-modal');

    if (videoBtn && modal && modalVideo && closeModal) {
      // Au clic sur le bouton "Résumé vidéo"
      videoBtn.addEventListener('click', (e) => {
        e.preventDefault();

        // Récupérer le chemin de la vidéo depuis l'attribut data-video
        const videoSrc = videoBtn.dataset.video;
        modalVideo.querySelector('source').src = videoSrc;
        modalVideo.load();

        // Afficher la modale
        modal.classList.remove('opacity-0', 'pointer-events-none');
      });

      // Au clic sur le bouton fermer de la modale
      closeModal.addEventListener('click', () => {
        modal.classList.add('opacity-0', 'pointer-events-none');
        modalVideo.pause();
        modalVideo.currentTime = 0;
      });

      // Fermer la modale si on clique en dehors de la vidéo
      modal.addEventListener('click', (e) => {
        if (e.target === modal) {
          modal.classList.add('opacity-0', 'pointer-events-none');
          modalVideo.pause();
          modalVideo.currentTime = 0;
        }
      });
    }

  })
  .catch(err => console.error("Erreur de chargement des composants :", err));

    // -----------------------------
    // Gestion du bouton audio
    // -----------------------------
    const playBtn = document.getElementById("play-btn");
    const audio = document.getElementById("url-audio");
    const progressBar = document.getElementById("progress-bar");
    let isPlaying = false;

    if (playBtn && audio && progressBar) {
      playBtn.addEventListener("click", () => {
        if (isPlaying) audio.pause();
        else audio.play();
      });

      audio.addEventListener("play", () => {
        isPlaying = true;
        playBtn.innerHTML = feather.icons.pause.toSvg({ width: 24, height: 24 });
      });

      audio.addEventListener("pause", () => {
        isPlaying = false;
        playBtn.innerHTML = feather.icons.play.toSvg({ width: 24, height: 24 });
      });

      audio.addEventListener("timeupdate", () => {
        const progress = (audio.currentTime / audio.duration) * 100;
        progressBar.style.width = `${progress}%`;
      });
    }
    
  /* ==============================================
   Fin de load-components.js
============================================== */ 
