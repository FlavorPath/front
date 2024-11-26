import { center } from '@styled-system/patterns';
import StoreCard from '../molecule/StoreCard';
import { useStores } from '@/hooks/useStores';

const StoreListTemplate = () => {
  const { stores, noResultText, searchValue, isSearchLoading } = useStores();

  return (
    <div>
      {stores && (
        stores?.map(item => (
          <StoreCard
            key={item.name}
            {...item}
            searchText={searchValue}
          />
        ))
      )}
      {!stores && !isSearchLoading && <div className={styles.no_result}>{noResultText}</div>}
    </div>
  );
};

export default StoreListTemplate;

const styles = {
  no_result: center({
    textStyle: 'body3',
    paddingBottom: '30px',
    paddingTop: '120px',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  }),
};