let mobileNavigation = document.querySelector('.main-nav');
let navButton = document.querySelector('.main-nav__toggle');

document.querySelector('.main-nav__list').classList.add('main-nav__list--js');
document.querySelector('.main-nav').classList.add('main-nav--closed');

navButton.onclick = function() {
  mobileNavigation.classList.toggle('main-nav--closed');
};
