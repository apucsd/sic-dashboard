export const setAccessToken = (token) => {
  return localStorage.setItem("accessToken", token);
};
export const getAccessToken = () => {
  return localStorage.getItem("accessToken");
};
