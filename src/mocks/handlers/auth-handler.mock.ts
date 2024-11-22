import { API_PATH } from '@/api/api-path';
import { http, HttpResponse } from 'msw';
import { delayForDevelopment } from '.';
import { idValidation, nicknameValidation, passwordValidation } from '@/utils/validation/validations';

export const authHandlers = [
  http.post(API_PATH.login, async ({ request }) => {
    const body = (await request.json()) as { username: string; password: string };
    const { username, password } = body;

    if (idValidation(username)) {
      return HttpResponse.json({
        success: false,
        message: idValidation(username),
      });
    }

    if (passwordValidation(password)) {
      return HttpResponse.json({
        success: false,
        message: '비밀번호를 입력해주세요.',
      });
    }

    await delayForDevelopment();
    return HttpResponse.json({
      success: true,
      message: '로그인 성공',
      token:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IlRlc3QgVXNlciIsImlhdCI6MTUxNjIzOTAyMn0.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c',
    });
  }),
  http.post(API_PATH.register, async ({ request }) => {
    const body = (await request.json()) as { username: string; password: string; nickname: string };
		const { username, password, nickname } = body;
		
		if (idValidation(username)) {
      return HttpResponse.json({
        success: false,
        message: idValidation(username),
      });
		}
		
		if (nicknameValidation(nickname)) {
			return HttpResponse.json({
        success: false,
        message: nicknameValidation(nickname),
      });
		}

    if (passwordValidation(password)) {
      return HttpResponse.json({
        success: false,
        message: '비밀번호를 입력해주세요.',
      });
		}
		
		await delayForDevelopment();
    return HttpResponse.json({
      success: true,
      message: '회원가입 성공',
      data: {username, nickname, tag: '#1'}
    });
  }),
];
