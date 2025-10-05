const playerContainer = document.querySelector(".tecnocast-player");
if (playerContainer !== null) {
  const playBtn = playerContainer.querySelector(".play-btn");
  const audio = playerContainer.querySelector("audio");
  const seekBar = playerContainer.querySelector(".seek-bar");
  const currentTime = playerContainer.querySelector(".current-time");
  const duration = playerContainer.querySelector(".duration");
  const speedBtn = playerContainer.querySelector(".speed-btn");
  const rewindBtn = playerContainer.querySelector(".rewind-btn");
  const forwardBtn = playerContainer.querySelector(".forward-btn");
  const shareBtn = playerContainer.querySelector(".share-btn");
  const shareContent = playerContainer.querySelector(".share-content");
  const shareContentClose = shareContent.querySelector(".share-close");

  let isPlaying = false;

  shareBtn.addEventListener("click", () => {
    shareContent.classList.toggle("show");
  });

  if (shareContentClose) {
    shareContentClose.addEventListener("click", () => {
      shareContent.classList.remove("show");
    });
  }

  const updatePlayBtn = () => {
    playBtn.classList.toggle("play", !isPlaying);
    playBtn.classList.toggle("pause", isPlaying);
  };

  const togglePlay = () => {
    isPlaying ? audio.pause() : audio.play();
    isPlaying = !isPlaying;
    updatePlayBtn();
  };

  const updateTime = () => {
    const percent = (audio.currentTime / audio.duration) * 100;
    seekBar.value = percent;
    currentTime.textContent = formatTime(audio.currentTime);
    playerContainer.style.setProperty("--seek-before-width", (seekBar.value / seekBar.max) * 100 + "%");
  };

  const updateDuration = () => {
    duration.textContent = formatTime(audio.duration);
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60)
      .toString()
      .padStart(2, "0");
    const seconds = Math.floor(time % 60)
      .toString()
      .padStart(2, "0");
    return `${minutes}:${seconds}`;
  };

  const updateSpeed = () => {
    const speeds = [1, 1.25, 1.5, 2];
    const currentSpeedIndex = speeds.indexOf(audio.playbackRate);
    const newSpeedIndex = (currentSpeedIndex + 1) % speeds.length;
    audio.playbackRate = speeds[newSpeedIndex];
    speedBtn.textContent = `${speeds[newSpeedIndex]}x`;
  };

  const skip = (amount) => {
    audio.currentTime += amount;
    const seekValue = (audio.currentTime / audio.duration) * 100;
    seekBar.value = seekValue;
    playerContainer.style.setProperty("--seek-before-width", `${seekValue}%`);
  };

  function skipBackward() {
    skip(-10);
  }

  function skipForward() {
    skip(10);
  }

  playBtn.addEventListener("click", togglePlay);
  audio.addEventListener("play", updatePlayBtn);
  audio.addEventListener("pause", updatePlayBtn);
  audio.addEventListener("timeupdate", updateTime);
  audio.addEventListener("durationchange", updateDuration);
  speedBtn.addEventListener("click", updateSpeed);
  rewindBtn.addEventListener("click", skipBackward);
  forwardBtn.addEventListener("click", skipForward);
  seekBar.addEventListener("input", (e) => {
    if (isFinite(audio.duration)) {
      audio.currentTime = audio.duration * (seekBar.value / 100);
    }
  });
}
