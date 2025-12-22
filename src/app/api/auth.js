import config from "../config";
import axios from "axios";

async function login({ email, password }) {
  return axios.post(`${config.apiURL}/api/auth/login`, {
    email,
    password,
  });
}

async function signup(data) {
  return axios.post(`${config.apiURL}/api/auth/register`, data);
}
export { login, signup };
