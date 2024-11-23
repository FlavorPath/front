import { Outlet } from "react-router-dom";
import { css } from "@styled-system/css";
import Navigation from "@/ui/view/molecule/Navigation/Navigation";
import CustomBottomSheet from "@/ui/view/molecule/CustomBottomSheet";
import useDynamicBottomSheetHeight from "@/hooks/useDynamicBottomSheetHeight";
import RestaurantLayout from "./RestaurantLayout";

const NavigationLayout = () => {
  const { containerRef, dynamicMinHeight, dynamicMaxHeight } =
    useDynamicBottomSheetHeight();
  return (
    <div
      ref={containerRef}
      className={css({
        position: "relative",
        height: "100%",
        width: "100%",
      })}
    >
      <Outlet />
      <CustomBottomSheet
        dynamicMinHeight={dynamicMinHeight}
        dynamicMaxHeight={dynamicMaxHeight}
      >
        <RestaurantLayout />
      </CustomBottomSheet>
      <Navigation />
    </div>
  );
};

export default NavigationLayout;
