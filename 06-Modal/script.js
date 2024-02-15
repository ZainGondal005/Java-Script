"use strict";

const modal = document.querySelector(".modal");

const overlay = document.querySelector(".overlay");

const btnclosemodal = document.querySelector(".close-modal");

const btnsopenmodal = document.querySelectorAll(".show-modal");

const openmodel = function () {
  console.log("Button Clicked");
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closemodel = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

for (let i = 0; i < btnsopenmodal.length; i++) {
  btnsopenmodal[i].addEventListener("click", openmodel);
}

btnclosemodal.addEventListener("click", closemodel);

overlay.addEventListener("click", closemodel);
