const timelineData = [
  {
    title: "Création du Web (Tim Berners-Lee, HTML 1.0)",
    tech: "Technologies : HTML 1.0",
    services: "Premiers sites statiques",
    quote: "« Le Web relie le monde à travers le texte. »",
    img: "/public/assets/images/tim-berners-lee-1060x706.jpg",
  },
  {
    title: "Interactivité & Standardisation (HTML 3.2, CSS1, JavaScript, HTTP/1.1)",
    tech: "Technologies : HTML 3.2, CSS1, JavaScript, HTTP/1.1",
    services: "Navigation interactive",
    quote: "« Le Web devient interactif et visuel. »",
    img: "/public/assets/images/timeline-img2.png",
  },
  {
    title: "Applications Web Riches / AJAX & HTML5",
    tech: "Technologies : AJAX, HTML5, CSS3",
    services: "RIA, contenus dynamiques sans rechargement",
    quote: "« Le Web s’anime, les pages bougent sans recharger. »",
    img: "/public/assets/images/timeline-img3-AJAX.png",
  },
  {
    title: "Web Universel (mobile, frameworks, média)",
    tech: "Technologies : HTML5/CSS3, mobiles, React/Vue/Angular",
    services: "Réseaux sociaux, streaming vidéo, plateformes",
    quote: "« Le Web est devenu plateforme universelle. »",
    img: "/public/assets/images/timeline-img4.jpeg",
  }
];

function showDetails(index) {
  const detailsBox = document.getElementById("timeline-details");
  const detailCard = document.getElementById("detail-card");
  const data = timelineData[index];

  document.getElementById("detail-title").textContent = data.title;
  document.getElementById("detail-tech").textContent = data.tech;
  document.getElementById("detail-services").textContent = data.services;
  document.getElementById("detail-quote").textContent = data.quote;
  document.getElementById("detail-img").src = data.img;

  detailsBox.classList.remove("hidden");

  // animation reset + start
  detailCard.classList.remove("opacity-100", "translate-y-0");
  void detailCard.offsetWidth;
  detailCard.classList.add("opacity-100", "translate-y-0");
}
