import axios from 'axios';

import { AUTH_USER } from '../constants/Auth';

const api = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL,
});

// Add a 401 response interceptor
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.status === 401) {
      localStorage.removeItem(AUTH_USER);
    }
  },
);

export default api;
