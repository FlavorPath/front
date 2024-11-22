// import { login } from '@/api/auth';
import { useForm } from '@/hooks/useForm';
import { useFetchLogin } from '@/store/queries/auth.query';
import { validation } from '@/utils/validation/index';

export interface LoginFormData {
  userId: string;
  password: string;
}

export const useLogin = () => {
  const { mutate } = useFetchLogin();

  const getErrorMessage = (key: string) => errors[key as keyof LoginFormData];

  const submitHandler = async () => {
    mutate({
      username: inputs.userId,
      password: inputs.password,
    });
  };

  const { inputs, errors, handleChange, handleSubmit } = useForm<LoginFormData>({
    initialValues: {
      userId: '',
      password: '',
    },
    validates: validation,
    submitHandler: submitHandler,
  });

  return {
    inputs,
    onChange: handleChange,
    onSubmit: handleSubmit,
    getErrorMessage,
  };
};
