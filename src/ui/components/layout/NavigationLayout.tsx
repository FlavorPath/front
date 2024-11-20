import { Outlet } from "react-router-dom";
import { css } from "@styled-system/css";
import Navigation from "@/ui/view/molecule/Navigation/Navigation";

const NavigationLayout = () => {
  return (
    <div
      className={css({
        position: "relative",
        minHeight: "100vh",
        paddingBottom: "60px",
        overflow: "hidden",
      })}
    >
      <Outlet />
      <Navigation />
    </div>
  );
};

export default NavigationLayout;
