/**
 * https://stackoverflow.com/a/16751601/512353
 */
export const arraySumNumbers = (numbersArray: number[]): number => {
  return [...numbersArray].reduce(
    (partialSum, arrayNumber) => partialSum + arrayNumber,
    0
  );
};
