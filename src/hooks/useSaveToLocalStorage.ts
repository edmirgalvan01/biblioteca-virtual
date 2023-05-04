export const useSaveToLocalStorage = () => {
  const saveData = (item: string, data: any) => {
    localStorage.setItem(item, JSON.stringify(data));
  };

  return { saveData };
};
