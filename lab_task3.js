"use strict";

const n = 0;
const m = 100;

const minNum = Math.min(m, n);
const maxNum = Math.max(m, n);

const randomValue =
  Math.trunc(Math.random() * maxNum - minNum + minNum) * 2 - 1;

console.log("Результат:", randomValue);
