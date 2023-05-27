import axios from "axios";

const api = axios.create({
    baseURL: process.env.NEXT_API_BASE_URL,
  headers: {
    Authorization: `Bearer ${process.env.NEXT_BACKEND_API_KEY}`,
  },
  
});

export default api;

//! Products fetch URL
export const fetchProducts = async () => api.get("/api/products?populate=*");
