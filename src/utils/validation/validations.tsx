// import { checkId } from '@/api/auth';

export const idValidation = (userId: string) => {
  if (!userId) {
    return '아이디를 입력해 주세요.';
  }

  if (!userId.match(/^[a-z0-9]+$/)) {
    return '영문 소문자, 숫자를 제외만 입력할 수 있습니다.';
  }

  // try {
  //   checkId(userId).catch(err => {
  //     if (err.status === 409) {
  //       return '이미 사용중인 아이디입니다.';
  //     }
  //   });
  // } catch (error) {
  //   return '아이디 중복 확인 중 오류가 발생했습니다.';
  // }

  return '';
};


export const nicknameValidation = (nickname: string) => {
  return '';
};

export const passwordValidation = (password: string) => {
  if (!password) {
    return '비밀번호를 입력해 주세요.';
  }

  if (!password.match(/^[A-Za-z0-9]+$/)) {
    return '영문, 숫자만 입력할 수 있습니다.';
  }

  if (password.length < 6) {
    return '비밀번호는 6자 이상 가능합니다.'
  }

  return '';
};