import axios from 'axios';
import { API_PATH } from './api-path';

export const checkId = async (id: string) => {
	const response = await axios.post('/user/check-id', { id });
	return response.data
};


export const login = async (username: string, password: string) => {
  const response = await axios.post(`${API_PATH.user}/login`, { username, password });
  return response.data;
};

export const signup = async (username: string, password: string, nickname: string) => {
  const response = await axios.post(`${API_PATH.user}/register`, { username, password, nickname });
  return response.data;
};