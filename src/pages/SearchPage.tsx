import useSearchStore from '@/store/stores/search.store';
import useStoreState from '@/store/stores/stores.store';
import useToggleStore from '@/store/stores/toggle.store';
import SearchInput from '@/ui/view/atom/SearchInput';
import Toggle from '@/ui/view/atom/Toggle';
import Header from '@/ui/view/molecule/Header';
import StoreListTemplate from '@/ui/view/templates/StoreListTemplate';
import { css } from '@styled-system/css';
import { center, flex } from '@styled-system/patterns';
import { useEffect } from 'react';

const SearchPage = () => {
	const { isOn } = useToggleStore();
	const { setStores, setNoResultText } = useStoreState();
	const { searchValue, setSearchValue } = useSearchStore();

	useEffect(() => {
    const fetchedStores = [{storeName: '테스트', storeAddress: '테스트주소'}];
		setStores(fetchedStores);
		setNoResultText('검색 결과가 없습니다.')
  }, [setStores]);

	return (
    <div>
      <Header headerText='탐색' />
      <div className={styles.input_box}>
        <SearchInput
          icon='MagnifyingGlassIcon'
          placeholder='식당을 탐색해보세요'
          value={searchValue}
					onValueChange={setSearchValue}
					autoFocus
        />
      </div>
      <div className={styles.toggle_wrap}>
        <div className={styles.toggle_text}>음식</div>
        <Toggle />
      </div>
      <StoreListTemplate />
    </div>
  );
};

export default SearchPage;

const styles = {
  toggle_wrap: flex({
    padding: '8px 30px',
    alignItems: 'center',
    gap: '8px',
    fontFamily: 'Gmarket Sans',
  }),
  toggle_text: css({
    textStyle: 'body1',
  }),
	input_box: center({
		padding: '8px 0'
	}),
};