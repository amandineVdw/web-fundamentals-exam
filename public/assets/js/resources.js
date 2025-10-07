// Script pour afficher la durée du podcast
document.addEventListener('DOMContentLoaded', function() {
  const audio = document.getElementById('podcast-audio');
  const durationDisplay = document.getElementById('podcast-duration');
  
  if (audio && durationDisplay) {
    audio.addEventListener('loadedmetadata', function() {
      const minutes = Math.floor(audio.duration / 60);
      const seconds = Math.floor(audio.duration % 60);
      durationDisplay.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
    });
  }
  
  // Réactiver Feather icons
  if (typeof feather !== 'undefined') {
    feather.replace();
  }
});

// Script pour afficher la durée du podcast
document.addEventListener('DOMContentLoaded', function() {
  const audio = document.getElementById('podcast-audio');
  const durationDisplay = document.getElementById('podcast-duration');
  
  if (audio && durationDisplay) {
    audio.addEventListener('loadedmetadata', function() {
      const minutes = Math.floor(audio.duration / 60);
      const seconds = Math.floor(audio.duration % 60);
      durationDisplay.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
    });
  }
  
  // Réactiver Feather icons
  if (typeof feather !== 'undefined') {
    feather.replace();
  }
});
