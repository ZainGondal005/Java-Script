"use strict";

const btnScrollTo = document.querySelector(".btn--scroll-to");
const section1 = document.querySelector("#section--1");

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".btn--close-modal");
const btnsOpenModal = document.querySelectorAll(".btn--show-modal");
const nav = document.querySelector(".nav");
const tabs = document.querySelectorAll(".operations__tab");
const tabsContainer = document.querySelector(".operations__tab-container");
const tabsContent = document.querySelectorAll(".operations__content");
///////////////////////////////////////
// Nav blur
const handleHover = function (e) {
  if (e.target.classList.contains("nav__link")) {
    const link = e.target;
    const siblings = link.closest(".nav").querySelectorAll(".nav__link");
    const logo = link.closest(".nav").querySelector("img");

    siblings.forEach((el) => {
      if (el !== link) el.style.opacity = this;
    });
    logo.style.opacity = this;
  }
};
nav.addEventListener("mouseover", handleHover.bind(0.5));
nav.addEventListener("mouseout", handleHover.bind(1));

///////////////////////////////////////
// Modal window

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};
btnsOpenModal.forEach((btn) => btn.addEventListener("click", openModal));

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

btnScrollTo.addEventListener("click", function () {
  const s1coords = section1.getBoundingClientRect();

  console.log("Current scroll (X/Y)", window.pageXOffset, window.pageYOffset);

  console.log(
    "height/width viewport",
    document.documentElement.clientHeight,
    document.documentElement.clientWidth
  );
  //old
  // window.scrollTo({
  //   left: s1coords.left + window.pageXOffset,
  //   top: s1coords.top + window.pageYOffset,
  //   behavior: "smooth",
  // });

  section1.scrollIntoView({
    behavior: "smooth",
  });
});

// page navigator
// document.querySelectorAll(".nav__link").forEach(function (el) {
//   el.addEventListener("click", function (e) {
//     e.preventDefault();
//     const id = this.getAttribute("href");
//     console.log(id);
//     document.querySelector(id).scrollIntoView({
//       behavior: "smooth",
//     });
//   });
// });

document.querySelector(".nav__links").addEventListener("click", function (e) {
  console.log(e.target);
  e.preventDefault();
  if (e.target.classList.contains("nav__link")) {
    console.log("link");
    const id = e.target.getAttribute("href");
    console.log(id);
    document.querySelector(id).scrollIntoView({
      behavior: "smooth",
    });
  }
});

// const h1 = document.querySelector("h1");
// console.log(h1.querySelectorAll(".highlight"));
// console.log(h1.childNodes);
// console.log(h1.children);
// h1.firstElementChild.style.color = "white";
// console.log(h1.parentNode);
// console.log("\n-----------------------\n");

// Tabbed component

tabsContainer.addEventListener("click", function (e) {
  const clicked = e.target.closest(".operations__tab");
  if (!clicked) return;
  tabs.forEach((t) => t.classList.remove("operations__tab--active"));
  tabsContent.forEach((t) => t.classList.remove("operations__content--active"));
  clicked.classList.add("operations__tab--active");
  // console.log(clicked);
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add("operations__content--active");
});

///////////////////////////////////////
//Lecture
// const header = document.querySelector(".header");
// const allButtons = document.getElementsByTagName("button");
// // console.log(allButtons);
// // console.log(document.getElementsByClassName("btn"));

// const message = document.createElement("div");
// message.classList.add("cookie-message");
// // message.textContent = "we used cookie for improved verssion";
// message.innerHTML =
//   "we used cookie for improved versions and functionality.<button class='btn btn--close-cookie'>Got it!</button>";

// // header.prepend(message);
// header.append(message);
// // header.append(message.cloneNode(true))

// // header.before(message);
// header.after(message);

// document.querySelector(".btn--close-cookie");
// addEventListener("click", function () {
//   message.remove();
// });

// // Styles
// message.style.backgroundColor = "#37383d";
// message.style.width = "120%";

// // console.log(message.style.color);
// // console.log(message.style.backgroundColor);

// // console.log(getComputedStyle(message).color);
// // console.log(getComputedStyle(message).height);

// message.style.height =
//   Number.parseFloat(getComputedStyle(message).height, 10) + 30 + "px";

// document.documentElement.style.setProperty("--color-primary", "orangered");

// /// Attributes
// // const logo = document.querySelector(".nav__logo");
// // console.log(logo.alt);
// // console.log(logo.className);

// // logo.alt = "Beautiful minimalist logo";

// // // Non-standard
// // console.log(logo.designer);
// // console.log(logo.getAttribute("designer"));
// // logo.setAttribute("company", "Bankist");

// // console.log(logo.src);
// // console.log(logo.getAttribute("src"));

// // const link = document.querySelector(".twitter-link");
// // console.log(link.href);
// // console.log(link.getAttribute("href"));

// // Types of Events and Event Handlers
// // const h1 = document.querySelector("h1");

// // const alertH1 = function (e) {
// //   alert("addEventListener: Great! You are reading the heading :D");
// // };

// // h1.addEventListener("mouseenter", alertH1);

// // setTimeout(() => h1.removeEventListener("mouseenter", alertH1), 3000);

// // h1.onmouseenter = function (e) {
// //   alert('onmouseenter: Great! You are reading the heading :D');
// // };

// ///////////////////////////////////////
// // Event Propagation in Practice
// // Bubbling phase
// const randomInt = (min, max) =>
//   Math.floor(Math.random() * (max - min + 1) + min);
// const randomColor = () =>
//   `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;

// document.querySelector(".nav__link").addEventListener("click", function (e) {
//   this.style.backgroundColor = randomColor();
//   // console.log("LINK", e.target, e.currentTarget);
//   // console.log(e.currentTarget === this);

//   // Stop propagation
//   // e.stopPropagation();
// });

// document.querySelector(".nav__links").addEventListener("click", function (e) {
//   this.style.backgroundColor = randomColor();
//   // console.log("CONTAINER", e.target, e.currentTarget);
// });

// document.querySelector(".nav").addEventListener("click", function (e) {
//   this.style.backgroundColor = randomColor();
//   // console.log("NAV", e.target, e.currentTarget);
// });
// // },true);
// //capturing phase if we enter true in second parameter

// // DOM Traversing
// const a2 = document.querySelector("h1");

// // Going downwards: child
// // console.log(a2.querySelectorAll(".highlight"));
// // console.log(a2.childNodes);
// // console.log(a2.children);
// a2.firstElementChild.style.color = "white";
// a2.lastElementChild.style.color = "orangered";

// // Going upwards: parents
// // console.log(a2.parentNode);
// // console.log(a2.parentElement);

// a2.closest(".header").style.background = "var(--gradient-secondary)";

// a2.closest("h1").style.background = "var(--gradient-primary)";

// // Going sideways: siblings
// // console.log(a2.previousElementSibling);
// // console.log(a2.nextElementSibling);

// // console.log(a2.previousSibling);
// // console.log(a2.nextSibling);

// // console.log(a2.parentElement.children);
// [...a2.parentElement.children].forEach(function (el) {
//   // if (el !== a2) el.style.transform = "scale(0.5)";
// });
