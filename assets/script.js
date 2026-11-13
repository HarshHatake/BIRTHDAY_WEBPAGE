const startButton = document.getElementById('startJourney');
startButton.addEventListener('click', () => {
  startButton.classList.add('opened');
  document.getElementById('journey').scrollIntoView({ behavior: 'smooth', block: 'start' });
});

document.querySelectorAll('.thread-animal').forEach((animal) => {
  const play = () => {
    animal.classList.remove('play');
    void animal.offsetWidth;
    animal.classList.add('play');
    window.setTimeout(() => animal.classList.remove('play'), 650);
  };
  animal.addEventListener('click', play);
  animal.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      play();
    }
  });
});

const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightboxImage');
document.querySelectorAll('.memory-photo img').forEach((img) => {
  img.parentElement.addEventListener('click', () => {
    lightboxImage.src = img.src;
    lightboxImage.alt = img.alt;
    lightbox.classList.add('open');
    lightbox.setAttribute('aria-hidden', 'false');
  });
});
function closeLightbox() {
  lightbox.classList.remove('open');
  lightbox.setAttribute('aria-hidden', 'true');
}
document.getElementById('closeLightbox').addEventListener('click', closeLightbox);
lightbox.addEventListener('click', (event) => {
  if (event.target === lightbox) closeLightbox();
});
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') closeLightbox();
});
