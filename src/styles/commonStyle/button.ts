import { cva } from '@styled-system/css';

export const button = cva({
  base: {
    display: 'flex',
    flexDir: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '6px',
  },
  variants: {
    variant: {
      filled: {
        bg: 'primary.main',
        color: 'white',
        '&:hover': {
          bg: 'primary.hover',
        },
      },
      outlined: {
        bg: 'white',
        color: 'primary.main',
        borderColor: 'primary.main',
        borderWidth: '1px',
      },
    },
    size: {
      large: { height: '54px', textStyle: 'button1' },
      small: { height: '36px', textStyle: 'button2' },
    },
  },
  defaultVariants: {
    variant: 'filled',
    size: 'large',
  },
});
