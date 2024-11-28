import { cva } from '@styled-system/css';

export const modal = cva({
	base: {
		width: '100dvw',
		height: '100dvh',
		position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
		zIndex: 1000,
		backgroundColor: 'rgba(0, 0, 0, 0.3)',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center'
  },
});

export const modalContent = cva({
  base: {
    backgroundColor: 'white',
    borderRadius: '16px',
    border: '1px solid #ff8700',
    padding: '25px 30px',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',

    '& h3': {
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: '33px',
    },
    '& .button_grp': {
      display: 'flex',
      width: '100%',
      gap: '6px',
      marginTop: 'auto',
    },
  },
  variants: {
    size: {
      large: {
        width: '400px',
        height: '235px',
        
        '& h3': { textStyle: 'heading1' },
        '& span': { textStyle: 'body1' },
        '& .cancel_btn': {
          flex: '0 0 120px',
          height: '45px',
        },
        '& .save_btn': {
          flex: 1,
          height: '45px',
        },
      },
      small: {
        width: '298px',
        height: '186px',
        
        '& h3': { fontSize: '20px' },
        '& .cancel_btn': { flex: '0 0 80px' },
        '& .save_btn': { flex: 1 },
      },
    },
  },
  defaultVariants: {
    size: 'small',
  },
});