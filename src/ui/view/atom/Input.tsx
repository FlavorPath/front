import { css, cx } from '@styled-system/css';
import { InputHTMLAttributes, useState } from 'react';
import Icon from './Icon';

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
	className?: string
	error?: boolean
}

const Input = ({ className, error, ...props }: IProps) => {
	const [showPassword, setShowPassword] = useState(false);

	const toggle = () => setShowPassword(prev => !prev)

	const getInputType = () => {
		if (props.type !== 'password' || showPassword) return 'text'
		return 'password'
	}

	return (
    <div className={styles.input_wrap}>
      <input
        {...props}
        type={getInputType()}
        className={cx(styles.input, error ? styles.error : styles.default, className)}
      />
      {props.type === 'password' && (
        <Icon
          iconName={showPassword ? 'HiEye' : 'HiEyeOff'}
          onClick={toggle}
          className={styles.eye_icon}
          color='#444'
        />
      )}
    </div>
  );
};

export default Input;

const styles = {
  input_wrap: css({
    position: 'relative',
  }),
  input: css({
    width: '100%',
    height: '58px',
    padding: '0 3px 0 10px',
    alignItems: 'center',
    textStyle: 'body1',
    outline: 'none',
    '&::placeholder': {
      color: 'background.gray',
    },
  }),
  eye_icon: css({
    position: 'absolute',
    right: '10px',
    top: '50%',
    transform: 'translateY(-50%)',
	}),
	default: css({
		borderBottomColor: 'background.gray',
    borderBottomWidth: '1px',
	}), 
	error: css({
		borderBottomColor: 'secondary.red',
		borderBottomWidth: '1px',
		color: 'secondary.red'
	})
};