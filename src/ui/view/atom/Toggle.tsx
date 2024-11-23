import { useToggle } from '@/hooks/useToggle';
import { css, cx } from '@styled-system/css';

interface ToggleProps {
	defaultValue?: boolean;
}

const Toggle = ({ defaultValue = false }: ToggleProps) => {
	const { isOn, toggle } = useToggle({defaultValue})

  return (
    <button
      onClick={toggle}
      className={cx(
        styles.toggle_container,
        css({ backgroundColor: isOn ? 'primary.main' : 'background.gray' })
      )}
      role='switch'
      aria-checked={isOn}
    >
      <div
        className={cx(
          styles.toggle,
          css({ transform: isOn ? 'translateX(32px)' : 'translateX(0)' })
        )}
      />
    </button>
  );
};

export default Toggle;

const styles = {
  toggle_container: css({
    width: '56px',
    height: '25px',
    borderRadius: '50px',
    display: 'flex',
    alignItems: 'center',
    paddingLeft: '2px',
    position: 'relative',
    transition: 'background-color 0.5s ease',
  }),
  toggle: css({
    backgroundColor: 'white',
    width: '20px',
    height: '20px',
    borderRadius: '100%',
    position: 'absolute',
    transition: 'transform 0.5s ease',
  }),
};