import KaKaoMap from "@/ui/components/map/KaKaoMap";
import SearchInput from "@/ui/view/atom/SearchInput";
import ButtonGroup from "@/ui/view/molecule/ButtonGroup";
import { css } from "@styled-system/css";
import { useState } from "react";

const HomePage = () => {
  const [searchValue, setSearchValue] = useState("");

  const handleSearchChange = (value: string) => {
    setSearchValue(value);
    console.log("검색어:", value);
  };

  return (
    <div className={styles.container}>
      <SearchInput
        icon="MagnifyingGlassIcon"
        placeholder="식당을 탐색해보세요"
        value={searchValue}
        onValueChange={handleSearchChange}
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
    zIndex: 1000,
  }),
};
