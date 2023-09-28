'use strict';

///////////////////////////////////////
// Modal window
const nav = document.querySelector('.nav__links');
const header = document.querySelector('.header');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const section1 = document.querySelector('#section--1');
const btnScrollTo = document.querySelector('.btn--scroll-to');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

//Button Scroll To
btnScrollTo.addEventListener('click', function (e) {
  // selecting cordinates
  const s1cord = section1.getBoundingClientRect();

  // viewing high and width of the viewport
  console.log('client height: ' + document.documentElement.clientHeight);

  // the scroll from the top page
  const scrollY = window.pageYOffset;
  const scrollX = window.pageXOffset;

  // scroll
  window.scrollTo({
    left: s1cord.x + scrollX,
    top: s1cord.y + scrollY,
    behavior: 'smooth',
  });

  section1.scrollIntoView({ behavior: 'smooth' });
});

// NavBar Scrool
nav.addEventListener('click', e => {
  const elSection = e.target.getAttribute('href');
  console.log(elSection);
  if (elSection) {
    e.preventDefault();
    document.querySelector(elSection).scrollIntoView({ behavior: 'smooth' });

    console.log(document.querySelector(elSection));
  }
  // if (e.target.classList.contains('.nav__link')) {
  //   e.preventDefault();
  //   const elSection = e.target.getAttribute('href');
  //   document.querySelector(elSection).scrollIntoView({ behavior: 'smooth' });
  // }
});

//////////////////////////////////////////////////////////////////////////////////////////

// Learning

// //SELECTING ELEMENTS

// document.documentElement;
// document.head;
// document.body;

// document.querySelector('.body');
// document.querySelectorAll('.body');

// document.getElementById('body');

// /* This will return a live htmlCollection list */
// document.getElementsByTagName('buttons');
// document.getElementsByClassName('btn');

// // CREATING NEW ELEMENTS

// const message = document.createElement('div');
// message.textContent = 'We use cookies on this website';
// message.classList = 'cookie-message';
// message.innerHTML =
//   'We use cookies on this website <button class = "btn btn--close--cookie"> Got it </button>';

// header.insertAdjacentElement('beforeend', message);

// // This method adds the new element as a child
// header.prepend(message);
// header.append(message.cloneNode(true));

// // This method adds the new element as a sibbling
// header.after(message);
// header.before(message.cloneNode(true));

// // DELETING ELEMENTS
// const btnCookie = document.querySelector('.btn--close--cookie');
// btnCookie.addEventListener('click', () => {
//   // old way
//   // message.parentElement.removeChild(message);
//   message.remove();
// });

// // STYLE, ATTRIBUTES AND CLASES

// const message = document.createElement('div');
// message.classList = 'cookie-message';
// message.innerHTML =
//   'Reject cookie now. <button class = "btn btn--close--cookie">Reject</button>';
// const section = document.getElementById('section--1');
// section.insertAdjacentElement('beforebegin', message);
// console.log(message);

// // setting styles
// message.style.backgroundColor = '#37383d';
// message.style.width = '120%';

// // Geting styles
// console.log(message.style.height);
// console.log(message.style.backgroundColor);

// // getting computed styles
// console.log(getComputedStyle(message).color);
// console.log(getComputedStyle(message).height);

// // setting new style with computed style
// message.style.height =
//   Number.parseFloat(getComputedStyle(message).height) + 20 + 'px';
// console.log(getComputedStyle(message).height);

// // changing or setting root styles
// document.documentElement.style.setProperty('--color-primary', '#ffcd0331');

// // ATTRIBUTES
// const logo = document.querySelector('.nav__logo');

// //Getting standard attributes
// console.log(logo.src);
// console.log(logo.alt);
// console.log(logo.className);
// console.log(logo.id);

// //Non-standard attributes -> not predefined attributes under image.
// console.log(logo.designer);

// //GetAttribute -> Getting an attribute
// console.log(logo.getAttribute('designer'));
// //Use getAttribute to get the absolute value of the image source or a link or a value
// console.log(logo.getAttribute('src'));

// //SetAttribute -> setting an attribute
// logo.setAttribute('weblink', 'twit');
// logo.getAttribute('weblink');

// // Data Attribute
// console.log(logo.dataset.versionDigit);

// // CLASSES

// logo.classList.add('a');
// logo.classList.remove('a');
// logo.classList.toggle('a');
// logo.classList.contains('a');

// //Do not use -> this will override all other classes and can only accept one class.
// logo.className = 'Debo';

// // EVENT LISTENER

// const h1 = document.querySelector('h1');

// const alertH1 = () => alert('You are readng the header');

// // Event
// h1.addEventListener('mouseenter', alertH1);

// setTimeout(() => h1.removeEventListener('mouseenter', alertH1), 5000);

// // other ways of listening for events

// h1.onmouseenter = e => alert('You are readng the header');

// // EVENT PROPERGATION

// // selecting the elements

// const link = document.querySelector('.nav__link');
// const links = document.querySelector('.nav__links');
// const nav = document.querySelector('.nav');

// // Creting random numbers
// const randomInt = (min, max) => Math.round(Math.random() * (max - min) + min);

// // Creating random colors
// const randomCol = () =>
//   `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)})`;

// link.addEventListener(
//   'click',
//   e => (e.currentTarget.style.backgroundColor = randomCol())
// );

// links.addEventListener(
//   'click',
//   e => (e.currentTarget.style.backgroundColor = randomCol())
// );

// document
//   .querySelector('.nav')
//   .addEventListener(
//     'click',
//     e => (e.currentTarget.style.backgroundColor = randomCol())
//   );

// // DOM Traversing
// const h1 = document.querySelector('h1');

// //Going down the DOM tree(selecting Children elements)
// console.log(h1.querySelectorAll('.highlight'));
// console.log(h1.childNodes); /*This creates a NodeList*/
// console.log(h1.children);
// console.log(h1.firstElementChild);
// console.log(h1.lastElementChild);

// // Going up the DOM tree (Selecting Parent element)
// console.log(h1.parentNode);
// console.log(h1.parentElement);

// console.log(h1.closest('.header'));
// console.log(h1.closest('h1'));

// //Going sideways (Selecting Sibbling Element)

// console.log(h1.previousElementSibling);
// console.log(h1.nextElementSibling);

// console.log(h1.previousSibling);
// console.log(h1.nextSibling.nextSibling);

// console.log(h1.parentElement.childNodes);
