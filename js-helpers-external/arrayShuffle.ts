/**
 * from: https://stackoverflow.com/a/2450976/512353
 * "The de-facto unbiased shuffle algorithm is the Fisher–Yates (aka Knuth) Shuffle."
 *
 * apparently a good unbiased shuffle algorithm
 */
export const arrayShuffle = (array: unknown[]): unknown[] => {
  const arrayInstance = [...array];
  let currentIndex = arrayInstance.length;

  // While there remain elements to shuffle...
  while (currentIndex !== 0) {
    // Pick a remaining element...
    const randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [arrayInstance[currentIndex], arrayInstance[randomIndex]] = [
      arrayInstance[randomIndex],
      arrayInstance[currentIndex],
    ];
  }

  return arrayInstance;
};
