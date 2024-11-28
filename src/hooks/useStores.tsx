import { Store } from '@/mocks/mock-data/stores.mock';
import { useGetBookmarks } from '@/store/queries/bookmarks.query';
import { useGetSearchStores } from '@/store/queries/search.query';
import useSearchStore from '@/store/stores/search.store';
import useStoreState from '@/store/stores/stores.store';
import useToggleStore from '@/store/stores/toggle.store';
import useDebounce from '@/utils/hooks/useDebounce';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export interface StoreData {
	stores: Store[];
	noResultText: string;
}

export const useStores = () => {
	const { pathname } = useLocation();
  const isSearchPage = pathname === '/search';
  const isBookmarkPage = pathname === '/bookmarks';

	const { stores, noResultText, setStores, setNoResultText } = useStoreState();
	const { searchValue, setSearchValue } = useSearchStore();
	const isToggleOn = useToggleStore(state => state.isOn);

	const { data: bookmarks } = useGetBookmarks()
	const debouncedSearchValue = useDebounce(searchValue, 150); 

	const { data: searchResult, isLoading: isSearchLoading } = useGetSearchStores(
    {
      searchText: debouncedSearchValue,
      isToggleOn,
    },
	);
	
	useEffect(() => {
		if (isSearchPage) {
			if (!searchValue) {
				setStores([]);
				setNoResultText('검색어를 입력해 주세요!')
				return;
			}
			if (searchResult) {
				setStores(searchResult);
        setNoResultText('검색 결과가 없습니다.');
			}
		} else if (isBookmarkPage) {
			if (!bookmarks?.length) {
				setStores([]);
			} else {
				setStores(bookmarks.map(item => ({
					...item,
					photo_url: item.photos[0],
					isBookmarked: true
				})))
			}
			setNoResultText('스크랩된 스토어가 없습니다.');
		}
	}, [isSearchPage, isBookmarkPage, searchResult, bookmarks, searchValue]); 

	return {
    stores,
    noResultText,
    isToggleOn,
    searchValue,
    setSearchValue,
    isSearchLoading,
  };
}