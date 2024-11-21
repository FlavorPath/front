import useSearchStore from '@/store/stores/search.store';
import useToggleStore from '@/store/stores/toggle.store';
import SearchInput from '@/ui/view/atom/SearchInput';
import Toggle from '@/ui/view/atom/Toggle';
import Header from '@/ui/view/molecule/Header';
import StoreListTemplate from '@/ui/view/templates/StoreListTemplate';
import { css } from '@styled-system/css';
import { flex } from '@styled-system/patterns';

const SearchPage = () => {
	const isToggleOn = useToggleStore(state => state.isOn);
	const { searchValue, setSearchValue } = useSearchStore();

	return (
    <div>
      <Header headerText='탐색' />
      <div className={styles.input_box}>
        <SearchInput
          icon='MagnifyingGlassIcon'
          placeholder={isToggleOn ? '키워드로 검색해보세요' : '식당을 탐색해보세요'}
          value={searchValue}
					onValueChange={setSearchValue}
        />
      </div>
      <div className={styles.toggle_wrap}>
        <div className={styles.toggle_text}>키워드로 검색</div>
        <Toggle />
      </div>
      <StoreListTemplate />
    </div>
  );
};

export default SearchPage;

const styles = {
  toggle_wrap: flex({
    padding: '0px 30px',
    alignItems: 'center',
    gap: '8px',
    fontFamily: 'Gmarket Sans',
  }),
  toggle_text: css({
		textStyle: 'body2',
  }),
	input_box: css({
		padding: '8px 30px'
	})
};