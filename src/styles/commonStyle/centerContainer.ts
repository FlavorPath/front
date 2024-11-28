import { cva } from '@styled-system/css';

export const centerContainer = cva({
  base: {
    width: '100%',
    height: '100dvh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: '100px',
  },
  variants: {
    direction: {
      row: { flexDirection: 'row' },
      column: { flexDirection: 'column' },
    },
  },
  defaultVariants: {
    direction: 'row',
  },
});
