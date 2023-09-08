const mobileNavigation = document.querySelector('.main-nav');
const navButton = document.querySelector('.main-nav__toggle');
const sliderButton = document.querySelector('.slider__button');
const slider = document.querySelector('.slider');

document.querySelector('.main-nav__list').classList.add('main-nav__list--js');
document.querySelector('.main-nav').classList.add('main-nav--closed');

navButton.onclick = function() {
  mobileNavigation.classList.toggle('main-nav--closed');
};

sliderButton.addEventListener('click', () => {
  if(!document.querySelector('.slider--after') && !document.querySelector('.slider--before')) {
  slider.classList.add('slider--after');
}else {
  slider.classList.toggle('slider--after')
  slider.classList.toggle('slider--before');
  }
});
