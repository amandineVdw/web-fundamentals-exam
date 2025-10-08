/* ==============================================
   security.js
   - Gestion de l'accordéon
   - Gestion de la checklist interactive
   - Gestion des scénarios de sécurité
============================================== */

// Fonction pour l'accordéon
function toggleAccordion(id) {
  const content = document.getElementById('content-' + id);
  const icon = document.getElementById('icon-' + id);
 
  content.classList.toggle('hidden');
  icon.classList.toggle('rotate-180');
 
  // Réactiver les icônes Feather après le toggle
  if (typeof feather !== 'undefined') {
    feather.replace();
  }
}

// Fonction pour la checklist interactive
function toggleCheckItem(element) {
  const checkbox = element.querySelector('.check-box');
  const checkIcon = element.querySelector('.check-icon');
  const detailText = element.querySelector('.detail-text');
 
  checkbox.classList.toggle('bg-mint-500');
  checkIcon.classList.toggle('hidden');
  detailText.classList.toggle('hidden');
 
  // Réactiver les icônes Feather
  if (typeof feather !== 'undefined') {
    feather.replace();
  }
}

// Fonction pour afficher les scénarios de sécurité
function showScenario(index) {
  const scenarios = [
    {
      title: "🎣 Scénario Phishing",
      description: "Vous recevez un email prétendant venir de votre banque, vous demandant de cliquer sur un lien pour 'vérifier votre compte'.",
      solution: "Vérifiez toujours l'adresse de l'expéditeur, ne cliquez jamais sur des liens suspects et contactez directement votre banque en cas de doute.",
      threat: "Phishing"
    },
    {
      title: "🦠 Scénario Malware",
      description: "Un site web vous propose de télécharger un logiciel gratuit pour 'optimiser votre ordinateur'.",
      solution: "Téléchargez uniquement depuis des sources officielles, utilisez un antivirus et méfiez-vous des offres trop belles pour être vraies.",
      threat: "Malware"
    },
    {
      title: "🔓 Scénario Brute Force",
      description: "Quelqu'un tente de deviner votre mot de passe en essayant des milliers de combinaisons automatiquement.",
      solution: "Utilisez des mots de passe longs et complexes, activez l'authentification à deux facteurs (2FA) et limitez les tentatives de connexion.",
      threat: "Brute Force"
    },
    {
      title: "🤖 Scénario Scraping",
      description: "Un bot automatique collecte toutes les données publiques de votre site web sans votre autorisation.",
      solution: "Utilisez des fichiers robots.txt, des captchas, et limitez le nombre de requêtes par IP.",
      threat: "Scraping"
    }
  ];

  const scenario = scenarios[index];
  
  if (!scenario) {
    console.error("Scénario introuvable pour l'index : " + index);
    return;
  }
  
  // Afficher le scénario dans une zone dédiée
  const detailBox = document.getElementById("scenario-details");
  if (detailBox) {
    detailBox.innerHTML = `
      <div class="bg-white p-6 rounded-xl shadow-lg mt-6 transform transition-all duration-500 opacity-0 translate-y-4" id="scenario-card">
        <div class="flex items-start mb-4">
          <div class="flex-shrink-0 bg-lollipop-100 rounded-full p-3">
            <i data-feather="alert-circle" class="h-6 w-6 text-lollipop-600"></i>
          </div>
          <div class="ml-4">
            <h3 class="text-2xl font-bold text-lollipop-900">${scenario.title}</h3>
            <span class="inline-block mt-2 px-3 py-1 bg-red-100 text-red-700 text-xs font-semibold rounded-full">
              ${scenario.threat}
            </span>
          </div>
        </div>
        
        <div class="mb-4 p-4 bg-lollipop-50 rounded-lg">
          <p class="text-lollipop-700">${scenario.description}</p>
        </div>
        
        <div class="p-4 bg-mint-100 rounded-lg border-l-4 border-mint-500">
          <div class="flex items-start">
            <i data-feather="shield" class="h-5 w-5 text-mint-600 mr-3 mt-1"></i>
            <div>
              <p class="text-sm font-semibold text-mint-800">Solution recommandée :</p>
              <p class="text-sm text-mint-700 mt-1">${scenario.solution}</p>
            </div>
          </div>
        </div>
      </div>
    `;
    
    detailBox.classList.remove("hidden");
    
    // Animation d'apparition
    setTimeout(() => {
      const card = document.getElementById("scenario-card");
      if (card) {
        card.classList.remove("opacity-0", "translate-y-4");
        card.classList.add("opacity-100", "translate-y-0");
      }
    }, 50);
    
    // Réactiver les icônes Feather
    if (typeof feather !== 'undefined') {
      feather.replace();
    }
  } else {
    console.error("L'élément #scenario-details est introuvable dans le HTML");
  }
}

/* ==============================================
   Fin de security.js
============================================== */