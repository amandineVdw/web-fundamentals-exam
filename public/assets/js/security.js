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