import Header from '@/ui/view/molecule/Header';
import StoreListTemplate from '@/ui/view/templates/StoreListTemplate';

const ScrapPage = () => {
	return (
    <div>
      <Header
        headerText='내 스크랩'
        hideArrow
      />
      <StoreListTemplate />
    </div>
  );
};

export default ScrapPage;