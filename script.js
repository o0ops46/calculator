"use strict!";
//select elements.
const clearBtn = document.querySelector(".clearBtn");
const inputBox = document.querySelector(".box1");

clearBtn.addEventListener("click", function () {
  inputBox.textContent = "";
});

const add = (a, b) => {
  return a + b;
};
const subtract = (a, b) => {
  return a;
};
