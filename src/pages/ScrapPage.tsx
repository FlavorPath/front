import useStoreState from '@/store/stores/stores.store';
import Header from '@/ui/view/molecule/Header';
import StoreListTemplate from '@/ui/view/templates/StoreListTemplate';
import { useEffect } from 'react';

const ScrapPage = () => {
  const { setStores, setNoResultText } = useStoreState();
  
  useEffect(() => {
    setNoResultText('스크랩된 음식점이 없습니다.')
  }, [])

	return (
    <div>
      <Header headerText='내 스크랩' />
      <StoreListTemplate/>
    </div>
  );
};

export default ScrapPage;