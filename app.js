// Hamburger Menu Logic
const hamburger = document.getElementById('hamburger');
const menuOverlay = document.getElementById('menuOverlay');
const backdrop = document.getElementById('backdrop');

function toggleMenu() {
  const isOpen = hamburger.classList.toggle('active');
  menuOverlay.classList.toggle('active');
  backdrop.classList.toggle('active');
  hamburger.setAttribute('aria-expanded', isOpen);
  document.body.style.overflow = isOpen ? 'hidden' : '';
}

function closeMenu() {
  hamburger.classList.remove('active');
  menuOverlay.classList.remove('active');
  backdrop.classList.remove('active');
  hamburger.setAttribute('aria-expanded', 'false');
  document.body.style.overflow = '';
}

hamburger.addEventListener('click', toggleMenu);
backdrop.addEventListener('click', closeMenu);

// Close on Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && menuOverlay.classList.contains('active')) {
    closeMenu();
  }
});

// Detect environment based on hostname
const hostname = window.location.hostname;
const envEl = document.getElementById('env');
if (hostname.includes('preprod')) {
  envEl.textContent = 'STAGING';
  envEl.style.color = 'var(--accent)';
} else {
  envEl.textContent = 'PRODUCTION';
  envEl.style.color = 'var(--primary)';
}
