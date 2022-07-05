// 'use strict!';
// //select elements.
// const clearBtn = document.querySelector('.clearBtn');
// let inputBox = document.querySelector('.box1');
// const numbers = document.querySelectorAll('.number');
// const operators = document.querySelectorAll('.operator');
// function add(num1, num2) {
//   return num1 + num2;
// }
// function multiply(num1, num2) {
//   return num1 * num2;
// }
// function divide(num1, num2) {
//   return num1 / num2;
// }
// function subtract(num1, num2) {
//   return num1 * num2;
// }

// clearBtn.addEventListener('click', function () {
//   inputBox.textContent = 0;
// });

// // display the numbers
// let displayValue = 0;
// let secondValue = 0;
// let solution = 0;
// numbers.forEach((element) => {
//   element.addEventListener('click', function () {
//     if (displayValue === 0) {
//       if (inputBox.textContent <= 0) {
//         displayValue = Number((inputBox.textContent = element.textContent));
//       } else
//         displayValue = Number((inputBox.textContent += element.textContent));
//     } else if (displayValue >= 0) {
//       inputBox.textContent = 0;
//       if (inputBox.textContent <= 0) {
//         secondValue = Number((inputBox.textContent = element.textContent));
//       } else
//         secondValue = Number((inputBox.textContent += element.textContent));
//     }
//   });
//   // take 1st number and operate.
//   operators.forEach((element) => {
//     element.addEventListener('click', function () {
//       //when clicked, we should reset the display of the calculator
//       //store the second number to be calculated.
//       if (element.id === 'add') {
//         solution = add(displayValue, secondValue);
//       } else if (element.id === 'subtract') {
//         solution = subtract(displayValue, secondValue);
//       } else if (element.id === 'multiply') {
//         solution = multiply(displayValue, secondValue);
//       } else if (element.id === 'divide') {
//         solution = divide(displayValue, secondValue);
//       } else solution = 'error';
//       // then operate for example add(displayValue, secondValue)
//     });
//   });
// });
// inputBox.textContent = solution;
'use strict';
let displayBox = document.querySelector('.displayBox');
const add = (num1, num2) => num1 + num2;
const subtract = (num1, num2) => num1 - num2;
const multiply = (num1, num2) => num1 * num2;
const divide = (num1, num2) => num1 / num2;

const operate = (operator, num1, num2) => {
  if (operator === 'add') {
    return add(num1, num2);
  } else if (operator === 'subtract') {
    return subtract(num1, num2);
  } else if (operator === 'multiply') {
    return multiply(num1, num2);
  } else if (operator === 'divide') {
    return divide(num1, num2);
  }
};
let firstValue = 0;
let secondValue;
let solution;
let operator;
//link AC button.
const clearBtn = document.querySelector('.clearBtn');
clearBtn.addEventListener('click', function () {
  displayBox.textContent = '';
});
const numbers = document.querySelectorAll('.number');
numbers.forEach((numEl) => {
  numEl.addEventListener('click', function () {
    //if clicked, display box will update.
    displayBox.textContent += numEl.textContent;
    //we change firstValue
    if (firstValue === 0) {
      firstValue = Number(displayBox.textContent);
    } else secondValue = Number(displayBox.textContent);
  });
});
const operators = document.querySelectorAll('.operator');
operators.forEach((opEl) => {
  opEl.addEventListener('click', function () {
    operator = opEl.id;
    displayBox.textContent = '';
  });
});
const equals = document.querySelector('#equals');
equals.addEventListener('click', function () {
  // console.log('pressed equals');
  solution = operate(operator, firstValue, secondValue);
  displayBox.textContent = solution;
});
