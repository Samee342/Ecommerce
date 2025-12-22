import axios from "axios";
import config from "../config";

async function getproducts() {
  const response = await axios.get(`${config.apiURL}/api/products`);
  return response.data;
}
export { getproducts };
