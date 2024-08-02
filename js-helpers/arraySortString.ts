/**
 * sort alphabetical, "undefined" = local/country, "base" = lower case
 *
 * best for sorting smaller arrays, see:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/localeCompare
 */
export const arraySortString = (stringArray: string[]): string[] => {
  return [...stringArray].sort((a, b) =>
    a.localeCompare(b, undefined, { sensitivity: "base" })
  );
};
