// all the data types that can be returned from localStorage, pls update
type GetLocalStorageReturnData =
  | AppPersistState
  | DataUserScores
  | RecoveryObj
  | SeasonData
  | void
  | WordAnswersState;

export const getLocalStorage = (key: string): GetLocalStorageReturnData => {
  // for app builds/server-side rendering where localStorage is not available
  const storedData =
    typeof window !== "undefined" ? localStorage.getItem(key) : null;

  if (storedData) return JSON.parse(storedData);

  // no key in localStorage, no such key set yet
  console.warn(`Failed to get local storage data: no such key`);
};
