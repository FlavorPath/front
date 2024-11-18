import { idValidation, nicknameValidation, passwordValidation } from './validations';

const validations = {
	userId: idValidation,
	password: passwordValidation,
	nickname: nicknameValidation
};

export const validation = <T extends Record<string, any>>(props: T): T => {
  const errors: T = {} as T;

  Object.keys(props).forEach(key => {
    const typedKey = key as keyof typeof validations;
    const validator = validations[typedKey];
    if (validator) {
      (errors[key as keyof T] as string) = validator(props[key as keyof T]);
    }
  });

  return errors;
};
