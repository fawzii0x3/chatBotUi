const httpGetContent = async (key: any) => {
  return await localStorage.getItem(key)
};
const httpSubmitContent = async (val: any) => {
  await localStorage.setItem("items", JSON.stringify(val));
};

export { httpGetContent, httpSubmitContent };
