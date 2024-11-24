import { useLogin } from "@/hooks/useLogin";
import Button from "@/ui/view/atom/Button";
import Input from "@/ui/view/atom/Input";
import { css } from "@styled-system/css";
import { center } from "@styled-system/patterns";
import { Link } from "react-router-dom";
import { authStyles } from '@/styles/auth.styles';

export interface FormData {
  userId: string;
  password: string;
}

const LoginPage = () => {
  const { inputs, onChange, onSubmit, getErrorMessage } = useLogin();

  return (
    <div className={css({ height: 'calc(100dvh - 60px)' })}>
      <div className={styles.logo_box}></div>
      <form
        onSubmit={onSubmit}
        className={authStyles.form}
      >
        {Object.keys(inputs).map(key => (
          <div key={key}>
            <Input
              name={key}
              type={key === 'password' ? 'password' : 'text'}
              value={inputs[key as keyof FormData]}
              onChange={onChange}
              className={getErrorMessage(key) ? authStyles.error : ''}
              placeholder={`${key === 'userId' ? '아이디' : '비밀번호'}를 입력해 주세요.`}
              error={!!getErrorMessage(key)}
            />
            <p className={authStyles.error_text}>{getErrorMessage(key)}</p>
          </div>
        ))}

        <div className={authStyles.button_grp}>
          <Button
            type='submit'
            size='large'
            variant='filled'
            className={css({ width: '100%' })}
          >
            로그인하기
          </Button>
          <p className={authStyles.link_text}>
            회원이 아니라면?{' '}
            <Link
              to='/auth/signup'
              className={css({ fontWeight: 'medium' })}
            >
              회원가입하기
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;

const styles = {
  logo_box: center({
    width: "375px",
    height: "214px",
    marginBottom: "30px",
  }),
};
