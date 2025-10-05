// Vanta.js init
VANTA.GLOBE({
  el: "#vanta-bg",
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.00,
  minWidth: 200.00,
  scale: 1.00,
  scaleMobile: 1.00,
  color: 0xff5eaf,
  backgroundColor: 0xfff0f5
});

// Feather icons
feather.replace();

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

const audio = document.getElementById("url-audio");
const playBtn = document.getElementById("play-btn");
const progressBar = document.getElementById("progress-bar");
let isPlaying = false;

playBtn.addEventListener("click", () => {
  if (isPlaying) {
    audio.pause();
  } else {
    audio.play();
  }
});

audio.addEventListener("play", () => {
  isPlaying = true;
  playBtn.innerHTML = feather.icons.pause.toSvg({ width: 24, height: 24 });
});

audio.addEventListener("pause", () => {
  isPlaying = false;
  playBtn.innerHTML = feather.icons.play.toSvg({ width: 24, height: 24 });
});

audio.addEventListener("timeupdate", () => {
  const progress = (audio.currentTime / audio.duration) * 100;
  progressBar.style.width = `${progress}%`;
});

