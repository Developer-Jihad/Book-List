export const getDataFromLocalStorage = () => {
  const data = localStorage.getItem("book");
  if (data) {
    return JSON.parse(data);
  }
  return [];
};
