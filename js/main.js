const menuIcon = document.querySelector('.menu-icon');
const menuHamburger = document.querySelector('.menu-ham');
const menuX = document.querySelector('.menu-x');
const navList = document.querySelector('.nav-list');
const backdrop = document.querySelector('.backdrop');
const logo = document.querySelector('.logo');
const btnLeft = document.querySelector('.slider-left');
const btnRight = document.querySelector('.slider-right');
const heroLeftSlides = document.querySelectorAll('.hero-left');
const heroRightSlides = document.querySelectorAll('.hero-right');

//Menu functions
const toggleMenu = function () {
  logo.classList.toggle('hidden');
  menuHamburger.classList.toggle('opacity-0');
  menuX.classList.toggle('opacity-0');
  navList.classList.toggle('scale-0');
  backdrop.classList.toggle('hidden');
};

//Slider functions

let currentSlide = 0;
const maxSlides = heroLeftSlides.length - 1;

const goToSlide = function (slide) {
  heroLeftSlides.forEach((s, i) => {
    s.style.transform = `translateX(${(i - slide) * 100}%)`;
  });
  heroRightSlides.forEach((s, i) => {
    s.style.transform = `translateX(${(i - slide) * 100}%)`;
  });
};

const nextSlide = function () {
  if (currentSlide === maxSlides) currentSlide = 0;
  else currentSlide++;
  goToSlide(currentSlide);
};

const prevSlide = function () {
  if (currentSlide === 0) currentSlide = maxSlides;
  else currentSlide--;
  goToSlide(currentSlide);
};

const init = function () {
  menuIcon.addEventListener('click', toggleMenu);
  btnRight.addEventListener('click', nextSlide);
  btnLeft.addEventListener('click', prevSlide);
  window.addEventListener('keydown', e => {
    if (e.key === 'ArrowRight') nextSlide();
    if (e.key === 'ArrowLeft') prevSlide();
  });
};
init();
