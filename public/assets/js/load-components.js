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

Promise.all(
  components.map(c =>
    fetch(c.file)
      .then(res => {
        if (!res.ok) throw new Error(`${c.file} introuvable`);
        return res.text();
      })
      .then(html => {
        document.getElementById(c.id).innerHTML = html;
        console.log(`${c.file} chargé dans #${c.id}`);
      })
  )
)
.then(() => {
  feather.replace(); // active toutes les icônes après injection
})
.catch(err => console.error("Erreur de chargement des composants:", err));