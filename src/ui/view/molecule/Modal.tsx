import { useModalStore } from '@/store/stores/modal.store';
import { modal, modalContent } from '@/styles/commonStyle/modal';
import Button from '../atom/Button';
import { useMobileDevice } from '@/utils/hooks/useMobileDevice';
import { center } from '@styled-system/patterns';

interface IProps {
	size?: 'small' | 'large'
}

const Modal = ({ size }: IProps) => {
  const { closeModal, title, subtitle, buttons } = useModalStore();
	const isMobileScreen = useMobileDevice();
	const responsiveSize = isMobileScreen ? 'small' : 'large';

  return (
    <div
      className={modal()}
      onClick={closeModal}
    >
      <div className={modalContent({ size: size || responsiveSize })}>
        <h3>{title}</h3>
        <div className={center()}>
          <span>{subtitle}</span>
        </div>
        <div className='button_grp'>
          {buttons.length === 2 && (
            <Button
							variant='outlined'
							className="cancel_btn"
              size={responsiveSize}
              onClick={() => buttons[0].fn()}
            >
              {buttons[0].text}
            </Button>
          )}
          <Button
						size={responsiveSize}
            onClick={() => buttons[1]?.fn()}
            className='save_btn'
          >
            {buttons[1]?.text}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Modal;