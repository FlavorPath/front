import { useForm } from '@/hooks/useForm';
import { useFetchRegister } from '@/store/queries/auth.query';
import { validation } from '@/utils/validation/index';
import { useEffect } from 'react';

export interface SignupFormData {
  userId: string;
  nickname: string;
  password: string;
  confirm_password: string;
}

export const useSignup = () => {
  const { mutate } = useFetchRegister();

  const submitHandler = () => {
    if (inputs.password !== inputs.confirm_password) {
      setErrors({ ...errors, password: '비밀번호가 일치하지 않습니다.', confirm_password: '비밀번호가 일치하지 않습니다.' })
      return;
    }

    mutate({
      username: inputs.userId,
      password: inputs.password,
      nickname: inputs.nickname,
    });
  }

  const { inputs, errors, setErrors, handleChange, handleSubmit } = useForm<SignupFormData>({
    initialValues: {
      userId: '',
      nickname: '',
      password: '',
      confirm_password: '',
    },
    validates: validation,
    submitHandler: submitHandler,
  });

  useEffect(() => {
    if (inputs.password && inputs.confirm_password && inputs.password !== inputs.confirm_password) {
      setErrors({ ...errors, password: '비밀번호가 일치하지 않습니다.', confirm_password: '비밀번호가 일치하지 않습니다.'});
    } else {
      setErrors({...errors, password: '', confirm_password: ''})
    }
  }, [inputs])

  const getErrorMessage = (key: string) => errors[key as keyof SignupFormData];
  
  const getPlaceholder = (key: string) => {
    switch (key) {
      case 'userId':
        return '아이디를 입력해 주세요.';
      case 'password':
        return '비밀번호를 입력해 주세요.';
      case 'nickname':
        return '닉네임을 입력해 주세요.';
      case 'confirm_password':
        return '확인용 비밀번호를 입력해 주세요.';
    }
  }

  return {
    inputs,
    onChange: handleChange,
    onSubmit: handleSubmit,
    getErrorMessage,
    getPlaceholder,
  };
};
