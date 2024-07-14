import jwtDecode from "jwt-decode";

export const decodeToken = (token) => {
  return jwtDecode(token);
};

export const isAuthenticated = () => {
  return Boolean(localStorage.getItem("token"));
};
