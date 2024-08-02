/**
 * Use filter method to remove all falsy values (ES6)
 * https://stackoverflow.com/a/52529695/512353
 */
export const arrayRemoveFalsies = (array: unknown[]): unknown[] => {
  return [...array].filter((x) => x);
};
