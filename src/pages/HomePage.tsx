import useDynamicBottomSheetHeight from "@/hooks/useDynamicBottomSheetHeight";
import RestaurantLayout from "@/ui/components/layout/RestaurantLayout";
import KaKaoMap from "@/ui/components/map/KaKaoMap";
import SearchInput from "@/ui/view/atom/SearchInput";
import ButtonGroup from "@/ui/view/molecule/ButtonGroup";
import CustomBottomSheet from "@/ui/view/molecule/CustomBottomSheet";
import { css } from "@styled-system/css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();
  const { containerRef, dynamicMinHeight, dynamicMaxHeight } =
    useDynamicBottomSheetHeight();
  const [restarauntId, setRestarauntId] = useState<number>(1);
  return (
    <div className={styles.container} ref={containerRef}>
      <SearchInput
        icon="MagnifyingGlassIcon"
        placeholder="식당을 탐색해보세요"
        defaultValue=""
        readOnly
        className={styles.input}
        onClick={() => navigate("/search")}
      />
      <ButtonGroup />
      <KaKaoMap setRestarauntId={setRestarauntId} />
      <CustomBottomSheet
        dynamicMinHeight={dynamicMinHeight}
        dynamicMaxHeight={dynamicMaxHeight}
      >
        <RestaurantLayout restarauntId={restarauntId} />
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
