import useAuth from '@/store/stores/auth.store';
import axios from 'axios';

axios.defaults.baseURL = '';

const axiosInstance = axios.create({
	withCredentials: true
})

axiosInstance.interceptors.request.use(config => {
	const token = useAuth.getState().accessToken;

	if (token) {
		config.headers.Authorization = `Bearer ${token}`
	}

	return config
})

export default axiosInstance;