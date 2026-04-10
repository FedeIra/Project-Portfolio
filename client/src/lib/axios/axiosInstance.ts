import axios from 'axios';

const baseURL = import.meta.env.VITE_PRODUCTION_URL || import.meta.env.VITE_DEVELOPMENT_URL;

const axiosInstance = axios.create({
  baseURL,
  withCredentials: false,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;
