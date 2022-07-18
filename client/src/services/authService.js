import axios from "axios";

const base_url =
  window.location.hostname === "localhost"
    ? "http://localhost:3800/api"
    : "https://role-based-auth.herokuapp.com/api";

// Auth service modules

export const signup = (user) => {
  return axios.post(`${base_url}/auth/signup`, user);
};

export const login = (user) => {
  return axios.post(`${base_url}/auth/login`, user);
};

export const logout = (navigate) => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
  navigate("/login");
};

export const isLoggedIn = async (navigate) => {
  const token = localStorage.getItem("token");
  try {
    await axios.get(`${base_url}/auth/loggedin`, {
      headers: { "x-access-token": token },
    });
  } catch (error) {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  }
};
