import { useLogin } from '@/hooks/useLogin';
import Button from '@/ui/view/atom/Button';
import Input from '@/ui/view/atom/Input';
import { css } from '@styled-system/css';
import { center, flex } from '@styled-system/patterns';
import { Link } from 'react-router-dom';

export interface FormData {
  userId: string;
  password: string;
}

const LoginPage = () => {
  const { inputs, onChange, onSubmit, getErrorMessage } = useLogin();

  return (
    <>
      <div className={styles.logo_box}></div>
      <form
        onSubmit={onSubmit}
        className={styles.form}
      >
        {Object.keys(inputs).map(key => (
          <div key={key}>
            <Input
              name={key}
              type={key === 'password' ? 'password' : 'text'}
              value={inputs[key as keyof FormData]}
              onChange={onChange}
              className={getErrorMessage(key) ? styles.error : ''}
              placeholder={`${key === 'userId' ? '아이디' : '비밀번호'}를 입력해 주세요.`}
            />
            <p className={styles.error_text}>{getErrorMessage(key)}</p>
          </div>
        ))}

        <div className={styles.button_grp}>
          <Button
            type='submit'
            size='large'
            variant='filled'
            className={css({ width: '100%' })}
          >
            로그인하기
          </Button>
          <p className={styles.link_text}>
            회원이 아니라면?{' '}
            <Link
              to='/signup'
              className={css({ fontWeight: 'medium' })}
            >
              회원가입하기
            </Link>
          </p>
        </div>
      </form>
    </>
  );
};

export default LoginPage;

const styles = {
  logo_box: center({
    width: '375px',
    height: '214px',
    marginBottom: '30px',
  }),
  error: css({
    borderBottomColor: 'secondary.red',
    borderBottomWidth: '1px',
  }),
  error_text: css({
    color: 'secondary.red',
    textStyle: 'body2',
    marginTop: '8px',
  }),
  form: css({
    display: 'flex',
    flexDir: 'column',
    margin: '0 30px',
    gap: '46px',
  }),
  link_text: css({
    textAlign: 'center',
    textStyle: 'caption1',
    fontWeight: 'light',
    marginTop: '16px',
  }),
  button_grp: css({
    width: 'calc(100% - 60px)',
    position: 'absolute',
    bottom: '128px',
    left: 0,
    margin: '0 30px'
  }),
  input_wrap: flex({
    flexDirection: 'column',
    gap: '54px',
    margin: '0 30px'
  })
};