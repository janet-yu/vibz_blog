var hamburgerBtn = document.getElementById('mobile-ham-btn');
var mainMenu = document.getElementById('main-menu');
var closeBtn = document.getElementById('nav__close-btn');
var windowWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
var windowHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
var mobileSearchGroup = document.getElementById('search-mobile');

hamburgerBtn.addEventListener('click', function() {
  mainMenu.classList.add('main-menu--show');
  hamburgerBtn.setAttribute('aria-expanded', true);
});

closeBtn.addEventListener('click', function() {
  mainMenu.classList.remove('main-menu--show');
  hamburgerBtn.setAttribute('aria-expanded', false);
});

if (windowWidth < 1024) {
  hamburgerBtn.setAttribute('aria-hidden', false);
} else {
  hamburgerBtn.setAttribute('aria-hidden', true);
}
