// === MENU TOGGLE ===
const menuBtn = document.getElementById('menuBtn');
const menu = document.getElementById('menu');

function toggleMenu() {
  const isOpen = menuBtn.classList.toggle('active');
  menu.classList.toggle('active');
  menuBtn.setAttribute('aria-expanded', isOpen);
  menu.setAttribute('aria-hidden', !isOpen);
}

function closeMenu() {
  menuBtn.classList.remove('active');
  menu.classList.remove('active');
  menuBtn.setAttribute('aria-expanded', 'false');
  menu.setAttribute('aria-hidden', 'true');
}

menuBtn.addEventListener('click', toggleMenu);

// Close on link click
document.querySelectorAll('.menu-link').forEach(link => {
  link.addEventListener('click', closeMenu);
});

// Close on Escape
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && menu.classList.contains('active')) {
    closeMenu();
  }
});

// === ENVIRONMENT DETECTION ===
const env = document.getElementById('env');
env.textContent = location.hostname.includes('preprod') ? 'STAGING' : 'PRODUCTION';
env.style.color = location.hostname.includes('preprod') ? 'var(--accent)' : 'var(--primary)';
