import { useStores } from '@/hooks/useStores';
import SearchInput from '@/ui/view/atom/SearchInput';
import Toggle from '@/ui/view/atom/Toggle';
import Header from '@/ui/view/molecule/Header';
import StoreListTemplate from '@/ui/view/templates/StoreListTemplate';
import { css } from '@styled-system/css';
import { center, flex } from '@styled-system/patterns';

const SearchPage = () => {
	const { isToggleOn, searchValue, setSearchValue, onSubmit, isSearchLoading } = useStores();

	const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.nativeEvent.isComposing) {
      onSubmit();
    }
  };

	return (
    <div>
      <Header headerText='탐색' />
      <div className={styles.input_box}>
        <SearchInput
          icon='MagnifyingGlassIcon'
          placeholder={isToggleOn ? '키워드로 검색해보세요' : '식당을 탐색해보세요'}
          value={searchValue}
          onValueChange={setSearchValue}
          onKeyDown={handleKeyDown}
        />
      </div>
      <div className={styles.toggle_wrap}>
        <div className={styles.toggle_text}>키워드로 검색</div>
        <Toggle />
      </div>
      <StoreListTemplate />
      {isSearchLoading && (
        <div className={styles.blur}>
          <div className={styles.loading}>
            <span>Loading...</span>
          </div>
        </div>
      )}
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
	}),
	blur: css({
		position: 'absolute',
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
	}),
	loading: center({
		width: '120px',
		height: '120px',
		position: 'absolute',
		top: '50%',
		left: '50%',
		transform: 'translate(-50%, -50%)',
		textStyle: 'heading1'
	})
};