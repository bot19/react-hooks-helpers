// simple debounce

// params: callback to debounce, delay time
export const simpleDebounce = (
  debouncedFunc: (...args: any[]) => void,
  delay = 500
) => {
  // in outer scope to keep track
  let timeoutId: ReturnType<typeof setTimeout>;

  return (...args: any[]) => {
    // execute this if this func keeps getting called
    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    timeoutId = setTimeout(() => {
      debouncedFunc(...args);
    }, delay);
  };
};
