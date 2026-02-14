import axios from "axios";
import config from "../config";
import api from "./api";

async function getproducts(searchParams) {
  return await axios.get(`${config.apiURL}/api/products?${searchParams}`);
}
async function createproducts(data) {
  return await api.post(`/api/products`, data);
}
async function getproductById(id) {
  return await axios.get(`${config.apiURL}/api/products/${id}`);
}
async function updateproduct(id, data) {
  return await api.put(`/api/products/${id}`, data);
}
async function deleteproduct(id) {
  return await api.delete(`/api/products/${id}`);
}
export {
  getproducts,
  createproducts,
  getproductById,
  updateproduct,
  deleteproduct,
};
