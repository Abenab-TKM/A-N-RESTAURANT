  const heroVideo = document.querySelector('.hero-video');
  const videoSources = ['v/resturant.mp4'];
  let currentVideo = 0;

  heroVideo.addEventListener('ended', () => {
    currentVideo = (currentVideo + 1) % videoSources.length;
    heroVideo.querySelector('source').src = videoSources[currentVideo];
    heroVideo.load();
    heroVideo.play();
  });
