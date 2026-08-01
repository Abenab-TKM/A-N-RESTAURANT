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

// Important banner close behavior (persist dismissed state)
(function(){
  const banner = document.getElementById('important-banner');
  const closeBtn = document.getElementById('close-banner');
  try{
    if(!banner) return;
    if(localStorage.getItem('a_n_hideBanner')){
      banner.style.display = 'none';
    }
    if(closeBtn){
      closeBtn.addEventListener('click', function(){
        banner.style.display = 'none';
        try{ localStorage.setItem('a_n_hideBanner','1'); }catch(e){}
      });
    }
  }catch(e){}
})();

