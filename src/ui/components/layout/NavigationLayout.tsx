import { Outlet } from "react-router-dom";
import { css } from "@styled-system/css";
import Navigation from "@/ui/view/molecule/Navigation/Navigation";

const NavigationLayout = () => {
  return (
    <div
      className={css({
        position: "relative",
        height: "100%",
        width: "100%",
      })}
    >
      <Outlet />
      <Navigation />
    </div>
  );
};

export default NavigationLayout;
