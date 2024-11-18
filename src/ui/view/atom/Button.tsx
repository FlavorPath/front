import { button } from '@/styles/commonStyle/button';
import { ChildrenWithProps } from '@/utils/ChildrenWithProps';
import { cx } from '@styled-system/css';
import { ButtonHTMLAttributes } from 'react';

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  variant?: 'filled' | 'outlined';
  size?: 'large' | 'small';
}

const Button = ({ variant, size, className, children, ...props }: ChildrenWithProps<IProps>) => {
  return (
    <button
      className={cx(button({ variant, size }), className)}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;