// all the data types that can be set to localStorage, pls update
type SetLocalStorageData =
  | AppPersistState
  | DataUserScores
  | RecoveryObj
  | SeasonData
  | WordAnswersState;

export const setLocalStorage = (
  key: string,
  data: SetLocalStorageData
): void => {
  try {
    const stringifiedData = JSON.stringify(data);
    localStorage.setItem(key, stringifiedData);
  } catch (error) {
    console.error(`Failed to set local storage data: ${error}`);
  }
};
