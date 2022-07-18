import axios from 'axios';

const base_url = window.location.hostname === 'localhost' ? 'http://localhost:3800/api' : 'https://my-employees-2020.herokuapp.com/api';

export const getUsersList = () => {
  return axios.get(`${base_url}/users/list`)
}

export const createUser = (user) => {
  return axios.post(`${base_url}/users/create`, user)
}