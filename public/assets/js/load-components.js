/* ==============================================
   load-components.js
   - Injection des composants HTML dans index.html
   - Activation des icônes Feather
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
    
    // -----------------------------
    // Activer Feather Icons
    // -----------------------------
    if (typeof feather !== 'undefined') {
      feather.replace();
      console.log('✅ Feather Icons activés !');
    }
  })
  .catch(err => console.error("❌ Erreur de chargement des composants :", err));

/* ==============================================
   Fin de load-components.js
============================================== */