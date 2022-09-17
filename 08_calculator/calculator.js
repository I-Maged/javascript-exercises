const add = function (num1, num2) {
  return num1 + num2;
};

const subtract = function (num1, num2) {
  return num1 - num2;
};

const sum = function (numArray) {
  let sum = 0;

  numArray.forEach((number) => (sum += number));

  return sum;
};

const multiply = function (numArray) {
  let sum = 1;

  numArray.forEach((number) => (sum *= number));

  return sum;
};

const power = function (num1, num2) {
  return num1 ** num2;
};

const factorial = function (num) {
  let fact = 1;
  if (num == 0 || num == 1) {
    return fact;
  } else {
    for (let i = num; i > 1; i--) {
      fact *= i;
    }
    return fact;
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
