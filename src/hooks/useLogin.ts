// import { login } from '@/api/auth';
import { useForm } from '@/hooks/useForm';
import { validation } from '@/utils/validation/index';

export interface LoginFormData {
  userId: string;
  password: string;
}

export const useLogin = () => {
	const submitHandler = async () => {
    try {
			// login(inputs.userId, inputs.password);
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  const { inputs, errors, handleChange, handleSubmit } = useForm<LoginFormData>({
    initialValues: {
      userId: '',
      password: '',
    },
    validates: validation,
    submitHandler: submitHandler,
  });

  const getErrorMessage = (key: string) => errors[key as keyof LoginFormData];

  return {
    inputs,
    onChange: handleChange,
    onSubmit: handleSubmit,
    getErrorMessage,
  };
};
