import { Outlet } from "react-router-dom";
import { css } from "@styled-system/css";
import Navigation from "@/ui/view/molecule/Navigation/Navigation";

const NavigationLayout = () => {
  return (
    <div
      className={css({
        position: "relative",
        minHeight: "100vh",
        paddingBottom: "60px", // 네비게이션 높이만큼 콘텐츠 영역 확보
        overflow: "hidden", // 콘텐츠가 영역 밖으로 나가지 않도록 설정
      })}
    >
      <Outlet />
      <Navigation />
    </div>
  );
};

export default NavigationLayout;
