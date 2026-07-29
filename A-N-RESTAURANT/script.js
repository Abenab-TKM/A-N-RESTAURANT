const heroVideo = document.querySelector('.hero-video');
const videoSources = ['v/resturant.mp4'];
let currentVideo = 0;

if (heroVideo) {
  heroVideo.addEventListener('ended', () => {
    currentVideo = (currentVideo + 1) % videoSources.length;
    heroVideo.querySelector('source').src = videoSources[currentVideo];
    heroVideo.load();
    heroVideo.play();
  });
}

function toggleMode() {
  const body = document.body;
  const button = document.getElementById('modeBtn');

  body.classList.toggle('dark-mode');

  if (button) {
    button.innerHTML = body.classList.contains('dark-mode') ? '☀️' : '🌙';
  }
}

