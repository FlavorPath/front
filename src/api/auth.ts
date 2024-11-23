import axios from 'axios';

export const checkId = async (id: string) => {
	const response = await axios.post('/user/check-id', { id });
	return response.data
};


export const login = async (username: string, password: string) => {
  const response = await axios.post('/user/login', { username, password });
  return response.data;
};

export const signup = async (username: string, password: string, nickname: string) => {
  const response = await axios.post('/user/register', { username, password, nickname });
  return response.data;
};