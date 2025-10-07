// Script JavaScript pour les cartes 
function flipCard(card) {
  card.classList.toggle('flipped');
  // Réactiver les icônes Feather après le flip
  setTimeout(() => {
    if (typeof feather !== 'undefined') {
      feather.replace();
    }
  }, 300);
}

function resetAllCards() {
  const cards = document.querySelectorAll('.flip-card');
  cards.forEach(card => {
    card.classList.remove('flipped');
  });
  // Réactiver les icônes Feather
  if (typeof feather !== 'undefined') {
    feather.replace();
  }
}