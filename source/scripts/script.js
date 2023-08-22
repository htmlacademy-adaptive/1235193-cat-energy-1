let mobileNavigation = document.querySelector('.main-nav');
let navButton = document.querySelector('.main-nav__toggle');

navButton.onclick = function() {
  mobileNavigation.classList.toggle('main-nav--closed');
};
