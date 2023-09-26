'use strict';

///////////////////////////////////////
// Modal window
const header = document.querySelector('.header');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

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

// CLASSES

logo.classList.add('a');
logo.classList.remove('a');
logo.classList.toggle('a');
logo.classList.contains('a');

//Do not use -> this will override all other classes and can only accept one class.
logo.className = 'Debo';
