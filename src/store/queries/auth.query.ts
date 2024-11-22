import { login, signup } from '@/api/auth'
import { useMutation } from '@tanstack/react-query'
import useAuth from '../stores/auth.store';
import { useNavigate } from 'react-router-dom';

interface User {
  username: string;
  password: string;
  nickname?: string;
	confirmPassword?: string;
}

export const useFetchLogin = () => {
	const navigate = useNavigate();
	const { setAccessToken } = useAuth();

	return useMutation({
    mutationFn: ({ username, password }: User) => login(username, password),
    onSuccess: data => {
      setAccessToken(data.token);
      navigate('/');
    },
  });
}

export const useFetchRegister = () => {
	const navigate = useNavigate();

	return useMutation({
		mutationFn: ({ username, password, nickname }: User) => signup(username, password, nickname!),
		onSuccess: () => navigate('/auth/login')
  });
}