const httpGetContent = async (key: any) => {
  return localStorage.getItem(key)
};
const httpSubmitContent = async (val: any) => {
  localStorage.setItem("items", JSON.stringify(val));
};

export { httpGetContent, httpSubmitContent };
