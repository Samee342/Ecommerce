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

async function forgotPassword(data) {
  return axios.post(`${config.apiURL}/api/auth/forgot-password`, data);
}
async function resetPassword(token, userId, data) {
  return axios.post(
    `${config.apiURL}/api/auth/reset-password?token=${token}&userId=${userId}`,
    data,
  );
}
export { login, signup, forgotPassword, resetPassword };
