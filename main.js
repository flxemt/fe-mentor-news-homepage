import menuClose from './assets/images/icon-menu-close.svg';
import menuOpen from './assets/images/icon-menu.svg';

const navbar = document.querySelector('#navbar-content');
const overlay = document.querySelector('#overlay');
const navBtn = document.querySelector('#btn-nav');
const navIcon = document.querySelector('#nav-icon');

let isMenuExpanded = false;

function toggleMenu() {
  document.documentElement.scrollTop = 0;
  isMenuExpanded = !isMenuExpanded;

  navIcon.src = isMenuExpanded ? menuClose : menuOpen;
  overlay.style.visibility = isMenuExpanded ? 'visible' : 'hidden';
  overlay.style.opacity = isMenuExpanded ? '1' : '0';
  navbar.style.right = isMenuExpanded ? '-100px' : '-400px';

  if (isMenuExpanded) {
    document.body.classList.add('no-scroll');
  } else {
    document.body.classList.remove('no-scroll');
  }
}

function updateNavbar() {
  if (window.outerWidth >= 768) {
    navbar.classList.remove('mobile-sidebar');
    navbar.classList.add('nav-items');
  } else {
    navbar.classList.add('mobile-sidebar');
    navbar.classList.remove('nav-items');
  }
}

updateNavbar();
navBtn.addEventListener('click', toggleMenu);
window.addEventListener('resize', updateNavbar);
