'use strict';

///////////////////////////////////////
// Modal window
// const navLink = document.querySelector('.nav__links');
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

const navLink = document.querySelector('.nav__links');
// NavBar Scrool
navLink.addEventListener('click', e => {
  e.preventDefault();

  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');

    if (id == '#') return;
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

// Operations Tab
const tab = document.querySelectorAll('.operations__tab');
const tabContainer = document.querySelector('.operations__tab-container');
const tabContent = document.querySelectorAll('.operations__content');

tabContainer.addEventListener('click', function (e) {
  const btnClicked = e.target.closest('.operations__tab');

  if (!btnClicked) return;

  // remove classlist
  tab.forEach(t => t.classList.remove('operations__tab--active'));
  tabContent.forEach(c => c.classList.remove('operations__content--active'));
  // add classList to button
  btnClicked.classList.add('operations__tab--active');
  document
    .querySelector(`.operations__content--${btnClicked.dataset.tab}`)
    .classList.add('operations__content--active');
});

//Implementing Fade Nav Fadeout
const nav = document.querySelector('.nav');
const linkS = document.querySelectorAll('.nav__link');

const mouseHandler = function (e, opacity, color) {
  const link = e.target;
  const sibling = link.closest('.nav').querySelectorAll('.nav__link');
  const logo = nav.querySelector('img');
  if (e.target.classList.contains('nav__link')) {
    sibling.forEach(e => {
      if (e !== link) {
        e.style.opacity = opacity;
      } else {
        e.style.color = color;
      }
    });
    logo.style.opacity = opacity;
  }
};

nav.addEventListener('mouseover', e => {
  mouseHandler(e, 0.5, 'green');
});

nav.addEventListener('mouseout', e => {
  mouseHandler(e, 1, '');
});

//Implementing the Sticky Option
const navHeigth = document.querySelector('.nav').getBoundingClientRect().height;

const calbackFun = function (entries) {
  const [entry] = entries;
  if (!entry.isIntersecting) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
};

const sectionObserver = new IntersectionObserver(calbackFun, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeigth}px`,
});
sectionObserver.observe(document.querySelector('.header'));

//Implementing Lazy Loading images

const imgs = document.querySelectorAll('img[data-src]');

const imgFunc = function (entries, observe) {
  const [entry] = entries;
  console.log(entry);
  if (!entry.isIntersecting) return;
  entry.target.src = entry.target.dataset.src;
  entry.target.addEventListener('load', () => {
    entry.target.classList.remove('lazy-img');
  });
  observe.unobserve(entry.target);
};

const imgObserver = new IntersectionObserver(imgFunc, {
  root: null,
  threshold: 0,
});

imgs.forEach(img => {
  imgObserver.observe(img);
});

//Using the Bind Method
// nav.addEventListener('mouseover', mouseHandler.bind(0.5));
// nav.addEventListener('mouseout', mouseHandler.bind(1));
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

//Going down the DOM tree(selecting Children elements)
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

////////////////////

const tabNew = document.querySelector('.operations');
const siblingEl = tabNew.querySelectorAll('.operations__tab');

const handler = (e, bC, c) => {
  const clicked = e.target.closest('.operations__tab');
  if (!clicked) return;
  siblingEl.forEach(btn => {
    if (btn === clicked) {
      btn.style.backgroundColor = bC;
      btn.style.color = c;
    }
  });
};
tabNew.addEventListener('mouseover', e => {
  handler(e, 'black', 'grey');
});

tabNew.addEventListener('mouseout', e => {
  handler(e, '', '');
});

///////////////

// // Implementing the scroll -> This is not a good practice as it will slow down the performance of the page.

// const initialCords = section1.getBoundingClientRect();
// console.log(initialCords);
// console.log(window.scrollY, initialCords.top);
// const scroll = window.addEventListener('scroll', e => {
//   if (window.scrollY > initialCords.top) nav.classList.add('sticky');
//   else nav.classList.remove('sticky');
// });

// // Implementing the revealing the section with the intersection API

// const allSections = document.querySelectorAll('.section');

// const secFunc = function (entries, observe) {
//   const [entry] = entries;
//   console.log(entry);
//   if (!entry.isIntersecting) return;
//   entry.target.classList.remove('section--hidden');
//   observe.unobserve(entry.target);
// };

// const sectionObs = new IntersectionObserver(secFunc, {
//   root: null,
//   threshold: 0.15,
// });

// allSections.forEach(sec => {
//   sectionObs.observe(sec);
//   sec.classList.add('section--hidden');
// });
