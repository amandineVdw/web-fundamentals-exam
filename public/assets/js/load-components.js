/* ==============================================
   load-components.js
   - Injection des composants HTML dans index.html
   - Activation des icônes Feather
   - Initialisation des fonctionnalités après chargement
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
  { id: "resources-section-placeholder", file: "components/resources-section.html" },
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
        console.log(`✅ ${component.file} chargé dans #${component.id}`);
      }
    })
    .catch(err => {
      console.error(`❌ Erreur chargement ${component.file}:`, err);
    });
}

/* -----------------------------
   Charger tous les composants
------------------------------ */
Promise.all(components.map(loadComponent))
  .then(() => {
    console.log('✅ Tous les composants sont chargés !');
   
    // Activer Feather Icons
    if (typeof feather !== 'undefined') {
      feather.replace();
      console.log('✅ Feather Icons activés !');
    }

    // Initialiser les fonctionnalités
    initVideoModal();
    initPodcastPlayer();
    initMobileMenu();

  })
  .catch(err => console.error("❌ Erreur de chargement des composants :", err));

/* ==============================================
   🎬 FONCTION : Initialiser la modale vidéo
============================================== */
function initVideoModal() {
  const videoBtns = document.querySelectorAll('[data-video]');
  const modal = document.getElementById('video-modal');
  const modalVideo = document.getElementById('modal-video');
  const closeModal = document.getElementById('close-modal');

  if (!modal || !modalVideo || !closeModal) {
    console.warn('⚠️ Éléments de la modale vidéo introuvables');
    return;
  }

  // Pour chaque bouton vidéo
  videoBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();

      // Récupérer et nettoyer le chemin vidéo
      let videoSrc = btn.dataset.video;
      
      if (videoSrc.startsWith('/public/')) {
        videoSrc = videoSrc.replace('/public/', '');
      }

      console.log('🎬 Chargement vidéo:', videoSrc);

      modalVideo.querySelector('source').src = videoSrc;
      modalVideo.load();

      // Afficher la modale
      modal.classList.remove('opacity-0', 'pointer-events-none');
      console.log('✅ Modale vidéo ouverte');
    });
  });

  // Fermeture de la modale
  closeModal.addEventListener('click', () => {
    modal.classList.add('opacity-0', 'pointer-events-none');
    modalVideo.pause();
    modalVideo.currentTime = 0;
    console.log('❌ Modale vidéo fermée');
  });

  // Fermer si clic en dehors
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.add('opacity-0', 'pointer-events-none');
      modalVideo.pause();
      modalVideo.currentTime = 0;
    }
  });
}

/* ==============================================
   🎵 FONCTION : Initialiser le lecteur podcast
============================================== */
function initPodcastPlayer() {
  const audio = document.getElementById('podcast-audio');
  const durationDisplay = document.getElementById('podcast-duration');
  const playBtn = document.getElementById('play-btn');
  const progressBar = document.getElementById('progress-bar');

  if (!audio) {
    console.warn('⚠️ Élément audio podcast introuvable');
    return;
  }

  // Afficher la durée
  if (durationDisplay) {
    audio.addEventListener('loadedmetadata', function() {
      const minutes = Math.floor(audio.duration / 60);
      const seconds = Math.floor(audio.duration % 60);
      durationDisplay.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
      console.log('✅ Durée podcast affichée');
    });
  }

  // Bouton play/pause
  if (playBtn) {
    let isPlaying = false;

    playBtn.addEventListener('click', () => {
      if (isPlaying) {
        audio.pause();
      } else {
        audio.play();
      }
    });

    audio.addEventListener('play', () => {
      isPlaying = true;
      if (typeof feather !== 'undefined') {
        playBtn.innerHTML = feather.icons.pause.toSvg({ width: 24, height: 24 });
      }
    });

    audio.addEventListener('pause', () => {
      isPlaying = false;
      if (typeof feather !== 'undefined') {
        playBtn.innerHTML = feather.icons.play.toSvg({ width: 24, height: 24 });
      }
    });
  }

  // Barre de progression
  if (progressBar) {
    audio.addEventListener('timeupdate', () => {
      const progress = (audio.currentTime / audio.duration) * 100;
      progressBar.style.width = `${progress}%`;
    });
  }
}

/* ==============================================
   📱 FONCTION : Menu mobile
============================================== */
function initMobileMenu() {
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });
  }
}

/* ==============================================
   Fin de load-components.js
============================================== */