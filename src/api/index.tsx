import useAuth from "@/store/stores/auth.store";
import axios from "axios";

axios.defaults.baseURL = import.meta.env.VITE_BASE_URL;

const axiosInstance = axios.create({
  withCredentials: true,
});

axiosInstance.interceptors.request.use((config) => {
  console.log(config)
  const token = useAuth.getState().accessToken;

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

axiosInstance.interceptors.response.use(
  response => response,
  async error => {
    console.log(error?.response)
    if (error.response?.status === 401) {
      alert('토큰이 만료되었습니다.')
      useAuth.getState().logout();
      window.location.href = '/'
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
