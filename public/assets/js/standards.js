// Script pour l'animation interactive Avec/Sans Standards
function showScenario(type) {
  const withBtn = document.getElementById('btn-with');
  const withoutBtn = document.getElementById('btn-without');
  const withScenario = document.getElementById('scenario-with');
  const withoutScenario = document.getElementById('scenario-without');

  if (type === 'with') {
    withBtn.className = 'btn-gradient px-6 py-2 text-sm';
    withoutBtn.className = 'px-6 py-2 text-sm bg-gray-200 text-gray-700 rounded-full font-bold hover:bg-gray-300 transition';
    withScenario.classList.remove('hidden');
    withoutScenario.classList.add('hidden');
  } else {
    withoutBtn.className = 'btn-gradient px-6 py-2 text-sm';
    withBtn.className = 'px-6 py-2 text-sm bg-gray-200 text-gray-700 rounded-full font-bold hover:bg-gray-300 transition';
    withoutScenario.classList.remove('hidden');
    withScenario.classList.add('hidden');
  }
}