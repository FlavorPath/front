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
    onError: (error: any) => {
      if (error.response?.status === 404) {
        alert('사용자를 찾을 수 없습니다.');
      }
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