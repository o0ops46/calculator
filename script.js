'use strict!';
//select elements.
const clearBtn = document.querySelector('.clearBtn');
let inputBox = document.querySelector('.box1');
const numbers = document.querySelectorAll('.number');
const operatorsEl = document.querySelectorAll('.operator');
const equalsEl = document.querySelector('.equals');
let displayValue = '';
const add = (a, b) => {
  return a + b;
};
const subtract = (a, b) => {
  return a - b;
};
const multiply = (a, b) => {
  return a * b;
};
const divide = (a, b) => {
  return a / b;
};
clearBtn.addEventListener('click', function () {
  inputBox.textContent = 0;
});
numbers.forEach((num) => {
  num.addEventListener('click', function () {
    if (inputBox.textContent <= 0) {
      inputBox.textContent = num.textContent;
      displayValue = inputBox.textContent;
    } else {
      inputBox.textContent += num.textContent;
      displayValue = inputBox.textContent;
    }
  });
});
