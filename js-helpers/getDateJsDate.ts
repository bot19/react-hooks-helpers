/**
 * pass in the "date time string format" of new Date() (1)
 * and get out [day, month, year] array
 *
 * (1) https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date#date_time_string_format
 * looks like: YYYY-MM-DDTHH:mm:ss.sssZ (ISO 8601)
 */
export const getDateJsDate = (
  dateTime: Date,
  fullYear: boolean = false
): [number, number, number] => {
  const dateTimeObj = new Date(dateTime);

  const year = dateTimeObj.getFullYear();

  return [
    dateTimeObj.getDate(),
    dateTimeObj.getMonth() + 1, // since it is 0-based
    fullYear ? year : Number(String(year).slice(2, 4)),
  ];
};
