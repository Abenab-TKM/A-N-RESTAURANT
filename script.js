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

function showMessage(message, type = 'success') {
  const confirmationBox = document.getElementById('confirmationMessage');
  if (!confirmationBox) return;

  confirmationBox.textContent = message;
  confirmationBox.className = `confirmation-message ${type}`;
}

function updateSummary() {
  const summaryBox = document.getElementById('bookingSummary');
  if (!summaryBox) return;

  const reservations = JSON.parse(localStorage.getItem('anReservations') || '[]');
  if (reservations.length === 0) {
    summaryBox.textContent = 'No reservations made yet.';
    return;
  }

  const latest = reservations[reservations.length - 1];
  summaryBox.textContent = `Latest request: ${latest.name} for ${latest.guests} guest(s) on ${latest.date} at ${latest.time}.`;
}

const reservationForm = document.getElementById('reservationForm');
if (reservationForm) {
  reservationForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(reservationForm);
    const name = String(formData.get('name') || '').trim();
    const email = String(formData.get('email') || '').trim();
    const phone = String(formData.get('phone') || '').trim();
    const date = String(formData.get('date') || '').trim();
    const time = String(formData.get('time') || '').trim();
    const guests = String(formData.get('guests') || '').trim();
    const occasion = String(formData.get('occasion') || '').trim();
    const request = String(formData.get('request') || '').trim();
    const agreed = reservationForm.querySelector('input[name="terms"]')?.checked;

    if (!name || !email || !phone || !date || !time || !guests || !agreed) {
      showMessage('Please complete all required fields and agree to the confirmation updates.', 'error');
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      showMessage('Please enter a valid email address.', 'error');
      return;
    }

    if (phone.replace(/\D/g, '').length < 7) {
      showMessage('Please enter a valid phone number.', 'error');
      return;
    }

    const reservation = { name, email, phone, date, time, guests, occasion, request };
    const reservations = JSON.parse(localStorage.getItem('anReservations') || '[]');
    reservations.push(reservation);
    localStorage.setItem('anReservations', JSON.stringify(reservations));

    reservationForm.reset();
    showMessage(`Reservation request received for ${name}. We will confirm your booking shortly.`, 'success');
    updateSummary();
  });
}

updateSummary();


