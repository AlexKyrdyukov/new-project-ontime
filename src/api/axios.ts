import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://dummyjson.com/products',
});

export default axiosInstance;
