import axios from "axios";
import config from "../config";
import api from "./api";
import formatparams from "../helpers/formatparams";

async function getproducts(searchParams) {
  const query = formatparams(searchParams);

  return await axios.get(`${config.apiURL}/api/products?${query}`);
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
