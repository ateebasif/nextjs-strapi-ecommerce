import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  headers: {
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_BACKEND_API_KEY}`,
  },
});

export default api;

//! fetch all Products
export const fetchProducts = async () => api.get("/api/products?populate=*");

//!  fetch single product
export const fetchProduct = async (queryString) =>
  api.get(`/api/products?${queryString}`);

export const createOrder = async (data) =>
  api.post(`/api/order/pretransaction`, data);
