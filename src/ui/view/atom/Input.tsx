import { css, cx } from '@styled-system/css';
import { InputHTMLAttributes, useState } from 'react';
import Icon from './Icon';

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
	className?: string
}

const Input = ({ className, ...props }: IProps) => {
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
        className={cx(styles.input, className)}
      />
      {props.type === 'password' && (
        <Icon
          iconName={showPassword ? 'HiEye' : 'HiEyeOff'}
          onClick={toggle}
					className={styles.eye_icon}
					color="#444"
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
    borderBottomColor: 'background.gray',
    borderBottomWidth: '1px',
    outline: 'none',
    '&::placeholder': {
      color: 'background.gray',
    },
  }),
	eye_icon: css({
		position: 'absolute',
		right: '10px',
		top: '50%',
		transform: 'translateY(-50%)'
	})
};