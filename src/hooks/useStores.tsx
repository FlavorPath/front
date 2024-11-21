import useStoreState, { Store } from '@/store/stores/stores.store';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export interface StoreData {
	stores: Store[];
	noResultText: string;
}

export const useStores = () => {
	const {pathname} = useLocation();
  const isSearchPage = pathname === '/search';
  const isBookmarkPage = pathname === '/bookmark';

	const { stores, setStores, noResultText, setNoResultText } = useStoreState();

	useEffect(() => {
		if (isSearchPage) {
			setStores(stores)
			setNoResultText('검색 결과가 없습니다.')
		} else if (isBookmarkPage) {
			setStores(stores);
      setNoResultText('스크랩된 스토어가 없습니다.');
		}
	}, [])

	return { stores, noResultText };
}