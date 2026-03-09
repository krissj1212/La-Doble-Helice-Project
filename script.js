const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('#menu');

if (menuBtn && menu) {
  menuBtn.addEventListener('click', () => {
    const isOpen = menu.classList.toggle('open');
    menuBtn.setAttribute('aria-expanded', String(isOpen));
  });
}

const yearElement = document.querySelector('#year');
if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}
