import axios from 'axios';

export const checkId = async (id: string) => {
	const response = await axios.post('/user/check-id', { id });
	return response.data
};


export const login = async (id: string, password: string) => {
	const response = await axios.post('/user/login', { id, password });
	return response.data
}

export const signup = async (id: string, password: string, nickname: string) => {
	const response = await axios.post('/user/register', { id, password, nickname });
	return response.data;
}