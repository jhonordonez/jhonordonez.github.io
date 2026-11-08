document.getElementById('year').textContent = new Date().getFullYear();
const button = document.getElementById('menu-button');
const menu = document.getElementById('mobile-nav');
button.addEventListener('click', () => { const open = menu.classList.toggle('open'); button.setAttribute('aria-expanded', open); });
document.querySelectorAll('#mobile-nav a').forEach((link) => link.addEventListener('click', () => { menu.classList.remove('open'); button.setAttribute('aria-expanded', 'false'); }));
const sections = [...document.querySelectorAll('main section[id]')]; const links = [...document.querySelectorAll('.sidebar nav a')];
const observer = new IntersectionObserver((entries) => entries.forEach((entry) => { if (entry.isIntersecting) links.forEach((link) => link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`)); }), { rootMargin: '-35% 0px -55% 0px' });
sections.forEach((section) => observer.observe(section));
