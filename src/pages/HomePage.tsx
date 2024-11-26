import KaKaoMap from "@/ui/components/map/KaKaoMap";
import Restaurant from "@/ui/components/restaurant/Restaurant";
import SearchInput from "@/ui/view/atom/SearchInput";
import ButtonGroup from "@/ui/view/molecule/ButtonGroup";
import CustomBottomSheet from "@/ui/view/molecule/CustomBottomSheet";
import { css } from "@styled-system/css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();
  const [restarauntId, setRestarauntId] = useState<number>(1);
  console.log("restarauntId in 홈페이지" + restarauntId);
  const [activeLabel, setActiveLabel] = useState<string>("");

  const navigateToRestaurant = (restarauntId: number) => {
    navigate(`/restaurant/${restarauntId}`);
  };

  return (
    <div className={styles.container}>
      <SearchInput
        icon="MagnifyingGlassIcon"
        placeholder="식당을 탐색해보세요"
        readOnly
        className={styles.input}
        onClick={() => navigate("/search")}
      />
      <ButtonGroup activeLabel={activeLabel} setActiveLabel={setActiveLabel} />
      <KaKaoMap setRestarauntId={setRestarauntId} activeLabel={activeLabel} />
      <CustomBottomSheet
        restarauntId={restarauntId}
        navigateToRestaurant={navigateToRestaurant}
      >
        <Restaurant restarauntId={restarauntId} />
      </CustomBottomSheet>
    </div>
  );
};

export default HomePage;

const styles = {
  container: css({
    position: "relative",
    width: "100%-60px",
    height: "100%",
  }),
  input: css({
    position: "fixed",
    marginLeft: 30,
    marginTop: 30,
    zIndex: 700,
    cursor: "pointer",
    "& input": {
      cursor: "pointer",
    },
  }),
};
