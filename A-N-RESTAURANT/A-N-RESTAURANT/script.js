  const heroVideo = document.querySelector('.hero-video');
  const videoSources = ['v/resturant.mp4'];
  let currentVideo = 0;

  heroVideo.addEventListener('ended', () => {
    currentVideo = (currentVideo + 1) % videoSources.length;
    heroVideo.querySelector('source').src = videoSources[currentVideo];
    heroVideo.load();
    heroVideo.play();
  });
 


function toggleMode() {
    let body = document.body;
    let button = document.getElementById("modeBtn");

    body.classList.toggle("dark-mode");

    if (button) {
        if (body.classList.contains("dark-mode")) {
            button.innerHTML = "☀️ ";
        } else {
            button.innerHTML = "🌙 ";
        }
    }
}


