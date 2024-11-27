'use strict';

// Implement function `rangeOdd(start: number, end: number)` returning
// array with all odd numbers from the range [15, 30] including endpoints

const isOdd = (a) => a % 2;

const rangeOdd = (start, end) => {
  const arr = [];

  for (let i = start; i <= end; i++) {
    if (isOdd(i)) arr.push(i);
  }

  return arr;
};

module.exports = { rangeOdd };
