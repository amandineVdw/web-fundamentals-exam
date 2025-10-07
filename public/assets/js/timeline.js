// timeline.js - Gestion de la timeline interactive avec images libres

const timelineData = [
  {
    title: "Création du Web (Tim Berners-Lee, HTML 1.0)",
    tech: "Technologies : HTML 1.0, protocoles HTTP",
    services: "Premiers sites statiques, partage de documents scientifiques",
    quote: "« Le Web relie le monde à travers le texte. »",
    img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
  },
  {
    title: "Interactivité & Standardisation",
    tech: "Technologies : HTML 3.2, CSS1, JavaScript, HTTP/1.1",
    services: "Navigation interactive, design visuel, animations",
    quote: "« Le Web devient interactif et visuel. »",
    img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80",
  },
  {
    title: "Applications Web Riches (AJAX & HTML5)",
    tech: "Technologies : AJAX, HTML5, CSS3, frameworks modernes",
    services: "Applications web dynamiques, contenus sans rechargement",
    quote: "« Le Web s'anime, les pages bougent sans recharger. »",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
  },
  {
    title: "Web Universel (Mobile, Cloud, IA)",
    tech: "Technologies : HTML5/CSS3, React/Vue/Angular, APIs modernes",
    services: "Réseaux sociaux, streaming, cloud, intelligence artificielle",
    quote: "« Le Web est devenu plateforme universelle. »",
    img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80",
  }
];

function showDetails(index) {
  const detailsBox = document.getElementById("timeline-details");
  const detailCard = document.getElementById("detail-card");
  const data = timelineData[index];

  // Remplir les données
  document.getElementById("detail-title").textContent = data.title;
  document.getElementById("detail-tech").textContent = data.tech;
  document.getElementById("detail-services").textContent = data.services;
  document.getElementById("detail-quote").textContent = data.quote;
  
  const imgElement = document.getElementById("detail-img");
  imgElement.src = data.img;
  imgElement.alt = data.title;

  // Afficher la box
  detailsBox.classList.remove("hidden");

  // Animation d'apparition
  detailCard.classList.remove("opacity-100", "translate-y-0");
  void detailCard.offsetWidth; // Force reflow
  setTimeout(() => {
    detailCard.classList.add("opacity-100", "translate-y-0");
  }, 50);

  // Réactiver Feather icons
  if (typeof feather !== 'undefined') {
    feather.replace();
  }

  // Scroll vers les détails
  setTimeout(() => {
    detailsBox.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }, 100);
}