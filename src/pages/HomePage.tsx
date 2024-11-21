import KaKaoMap from "@/ui/components/map/KaKaoMap";
import SearchInput from "@/ui/view/atom/SearchInput";
import ButtonGroup from "@/ui/view/molecule/ButtonGroup";
import { css } from "@styled-system/css";
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <SearchInput
        icon='MagnifyingGlassIcon'
        placeholder='식당을 탐색해보세요'
        defaultValue=''
        readOnly
        className={styles.input}
        onClick={() => navigate('/search')}
      />
      <ButtonGroup />
      <KaKaoMap />
    </div>
  );
};

export default HomePage;

const styles = {
  container: css({
    position: 'relative',
  }),
  input: css({
    position: 'fixed',
    marginLeft: 30,
    marginTop: 30,
    zIndex: 700,
    cursor: 'pointer',
    '& input': {
      cursor: 'pointer',
    },
  }),
};
