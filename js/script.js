// burger menu
const burger = document.querySelector('.burger');
const burgerMenu = document.querySelector('.burger-menu')
const menu = document.querySelector('.header__nav');
const menuLink = document.querySelectorAll('.nav__item')

burger.addEventListener('click', function () {
  burgerMenu.classList.toggle('burger-menu--active');
    menu.classList.toggle('header__nav--active');
    document.body.classList.toggle('stop-scroll');
  })

menuLink.forEach(function (el) {
  el.addEventListener('click', function () {
    burgerMenu.classList.toggle('burger-menu--active');
    menu.classList.remove('header__nav--active');
    document.body.classList.remove('stop-scroll');
  })
})

menu.addEventListener('click', function (el) {
  if (el.className !== 'header__content') {
    menu.classList.remove('header__nav--active');
    document.body.classList.remove('stop-scroll');
  }
})


// popup
const items = document.querySelectorAll('.swiper__item');
let friendsContainer = document.querySelector('.popup-container');
let friendsContent = document.querySelectorAll('.popup-item');
let cross = document.querySelectorAll('.cross');

items.forEach(function (element) {
  element.addEventListener('click', function (e) {
    const path = e.currentTarget.dataset.path;
    friendsContainer.classList.add('popup-container--active');

    friendsContent.forEach(function (element) {
      element.classList.remove('popup-item--active')
    });
    document.querySelector(`[data-target="${path}"]`).classList.add('popup-item--active');
    document.body.classList.add('stop-scroll');
  });
});

cross.forEach(function (el) {
  el.addEventListener('click', function () {
    friendsContainer.classList.remove('popup-container--active');
    document.body.classList.remove('stop-scroll');
  })
})

friendsContainer.addEventListener('click', function (el) {
  if (el.className !== 'popup-item') {
    friendsContainer.classList.remove('popup-container--active');
    friendsContent.forEach(function (element) {
      element.classList.remove('popup-item--active')
    });
    document.body.classList.remove('stop-scroll');
  }
})

