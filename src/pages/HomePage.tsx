import KaKaoMap from "@/ui/components/map/KaKaoMap";
import SearchInput from "@/ui/view/atom/SearchInput";
import ButtonGroup from "@/ui/view/molecule/ButtonGroup";
import { css } from "@styled-system/css";

const HomePage = () => {
  return (
    <div className={styles.container}>
      <SearchInput
        icon="MagnifyingGlassIcon"
        placeholder="식당을 탐색해보세요"
        className={styles.input}
      />
      <ButtonGroup />
      <KaKaoMap />
    </div>
  );
};

export default HomePage;

const styles = {
  container: css({
    position: "relative",
  }),
  input: css({
    position: "fixed",
    marginLeft: 30,
    marginTop: 30,
    zIndex: 700,
  }),
};
