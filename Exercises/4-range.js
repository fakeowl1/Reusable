'use strict';

// Implement function `range(start: number, end: number): array` returning
// array with all numbers from the range [15, 30] including endpoints

const range = (start, number) => {
  const arr = [];

  for (let i = start; i <= number; i++) {
    arr.push(i);
  }

  return arr;
};

module.exports = { range };
