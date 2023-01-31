// Задание №2
"use strict";

const a = 13.890123;
const b = 2.891564;
const n = 2;

const firstValue = Math.trunc((a % 1) * 10 ** n);
const secondValue = Math.trunc((b % 1) * 10 ** n);

console.log("Результат:", firstValue, secondValue);
console.log(
  firstValue > secondValue,
  "\n",
  firstValue < secondValue,
  "\n",
  firstValue <= secondValue,
  "\n",
  firstValue >= secondValue,
  "\n",
  firstValue === secondValue,
  "\n",
  firstValue != secondValue,
  "\n"
);
