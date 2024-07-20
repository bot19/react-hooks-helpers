/**
 * from: https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript
 * can also output min & max numbers themselves
 */
export const randomIntFromInterval = (min: number, max: number) => {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
};
