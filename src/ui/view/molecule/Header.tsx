import { center, flex } from '@styled-system/patterns';
import { css } from '@styled-system/css';
import Icon from '../atom/Icon';
import { useNavigate } from 'react-router-dom';

interface IProps {
  headerText?: string;
}

const Header = ({ headerText }: IProps) => {
  const navigate = useNavigate();
  const canGoBack = window.history.length > 1;

  return (
    <header className={styles.header}>
      <div className={styles.text}>{headerText}</div>
      {canGoBack && (
        <Icon
          iconName='HiOutlineArrowLeft'
          size={24}
          onClick={() => navigate(-1)}
          className={styles.back_btn}
        />
      )}
    </header>
  );
};

export default Header;

const styles = {
  header: flex({
    width: '100%',
    height: '58px',
    position: 'relative',
  }),
  back_btn: css({
    position: 'absolute',
    left: '30px',
    top: '50%',
    transform: 'translateY(-50%)',
  }),
  text: center({
    width: '100%',
    paddingTop: '4px',
    textStyle: 'heading2',
    fontFamily: 'Gmarket Sans',
  }),
};