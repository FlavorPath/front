import Header from '@/ui/view/molecule/Header';
import StoreListTemplate from '@/ui/view/templates/StoreListTemplate';
import { css } from '@styled-system/css';

const ScrapPage = () => {
	return (
    <div className={css({ height: '100dvh' })}>
      <Header
        headerText='내 스크랩'
        hideArrow
      />
      <StoreListTemplate />
    </div>
  );
};

export default ScrapPage;