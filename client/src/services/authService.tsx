import axios from 'axios';

const base_url = window.location.hostname === 'localhost' ? 'http://localhost:3800/api' : 'https://role-based-auth.herokuapp.com/api';

// Auth service modules

export const signup = (user) => {
  return axios.post(`${base_url}/auth/signup`, user)
}

export const login = (user) => {
  return axios.post(`${base_url}/auth/login`, user)
}

export const logout = (history) => {
  localStorage.removeItem('token');
  history.push('/login');
}
