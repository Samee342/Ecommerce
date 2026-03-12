const { default: api } = require("./api");

async function createOrder(data) {
  return await api.post(`/api/orders`, data);
}
async function getOrders() {
  return await api.get(`/api/orders`);
}
async function getOrdersByUser(status) {
  return await api.get(`/api/orders/user?status=${status}`);
}
async function deleteOrder(id) {
  return await api.delete(`/api/orders/${id}`);
}
async function updateOrder(id, data) {
  return await api.put(`/api/orders/${id}`, data);
}
async function payViaKhalti(orderId) {
  return await api.post(`/api/orders/${orderId}/payment`);
}
async function payViaStripe(orderId) {
  return await api.post(`/api/orders/${orderId}/payment/stripe`);
}
async function confirmPayment(orderId, data) {
  return await api.put(`/api/orders/${orderId}/payment/confirm`, data);
}
export {
  createOrder,
  getOrders,
  getOrdersByUser,
  deleteOrder,
  updateOrder,
  payViaKhalti,
  payViaStripe,
  confirmPayment,
};
