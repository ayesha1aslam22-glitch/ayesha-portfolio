
const menuToggle = document.getElementById('menu-toggle');
const navbar = document.getElementById('navbar');

menuToggle.addEventListener('click', () => {
    const isOpen = navbar.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
});

navbar.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
        navbar.classList.remove('open');
        menuToggle.setAttribute('aria-expanded', 'false');
    });
});

document.getElementById('year').textContent = new Date().getFullYear();