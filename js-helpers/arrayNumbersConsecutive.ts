/**
 * check if an array of numbers is consecutive
 *
 * @param numArr an array of SORTED numbers, compare index 0 upwards
 * @param positive TRUE consecutive count up, FALSE count down
 * @returns TRUE if consectuive, FALSE if not
 *
 * TEST - PASS: ([1, 2, 3, 4, 5]) => TRUE (positive consecutive)
 * TEST - PASS: ([1, 2, 33, 4, 5]) => FALSE (positive NOT consecutive)
 * TEST - PASS: ([1, 2, 33, 4, 5], false) => FALSE (negative NOT consecutive)
 * TEST - PASS: ([10, 9, 8, 7, 6, 5], false) => TRUE (negative consecutive)
 * TEST - PASS: ([10, 9, 8, 7, 66, 5], false) => FALSE (negative NOT consecutive)
 */
export const calcNumbersConsecutive = (
  numArr: number[],
  positive: boolean = true
) => {
  if (numArr.length === 0) {
    console.log("calcNumbersConsecutive: numArr.length === 0");
    return false;
  }

  // get first element as item to compare
  let prevNum = numArr[0];

  // loop through array to compare, starting at 2nd element
  for (let i = 1; i < numArr.length; i++) {
    // positive count up
    if (positive) {
      if (numArr[i] !== prevNum + 1) {
        console.log("calcNumbersConsecutive: positive count up FALSE");
        return false;
      }
    } else {
      if (numArr[i] !== prevNum - 1) {
        console.log("calcNumbersConsecutive: negative count down FALSE");
        return false;
      }
    }

    // set current number as previous for next iteration
    prevNum = numArr[i];
  }

  // made it through loop, all numbers are consecutive
  console.log("calcNumbersConsecutive: all numbers consecutive TRUE");
  return true;
};
