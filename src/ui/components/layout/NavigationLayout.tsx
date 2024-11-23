import { Outlet } from "react-router-dom";
import { css } from "@styled-system/css";
import Navigation from "@/ui/view/molecule/Navigation/Navigation";
import CustomBottomSheet from "@/ui/view/molecule/CustomBottomSheet";
import RestaurantPage from "@/pages/RestaurantPage";
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
        minHeight: "100vh",
        paddingBottom: "60px",
        overflow: "hidden",
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
