import { ChangeEvent, SyntheticEvent, useState } from 'react';

interface Props<T> {
  initialValues: T;
  validates: (input: T) => T;
  submitHandler: () => void;
}

export const useForm = <T extends { [key: string]: any }>({
  initialValues,
  validates,
  submitHandler,
}: Props<T>) => {
  const [inputs, setInputs] = useState<T>(initialValues as T);
  const [errors, setErrors] = useState<T>(initialValues as T);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
    setErrors({ ...errors, [name]: '' });
  };

  const handleSubmit = (e: SyntheticEvent) => {
    setIsLoading(true);
    e.preventDefault();
    const validationErrors = validates(inputs);
    setErrors(validationErrors);

    if (Object.values(validationErrors).every(error => !error)) {
      submitHandler();
      setIsLoading(false)
    }
  };

  return {
    inputs,
    errors,
    isLoading,
    handleChange,
    handleSubmit,
    setErrors
  };
};
