// urls.js - Script pour la section URLs (si besoin d'interactions futures)

// Activer les icônes Feather pour la section URLs
document.addEventListener('DOMContentLoaded', function() {
  if (typeof feather !== 'undefined') {
    feather.replace();
    console.log('✅ Feather Icons activés pour la section URLs');
  }
});

// Fonction pour ajouter des interactions futures si nécessaire
// Par exemple : animation au scroll, tooltips, etc.