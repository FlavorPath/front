import { Outlet } from "react-router-dom";
import { css } from "../../../styled-system/css";

const Bottom = () => {
  return (
    <div
      className={css({
        position: "relative",
        minHeight: "100vh",
      })}
    >
      <Outlet />
      <div
        className={css({
          position: "absolute",
          bottom: 0,
          width: "100%",
          height: "60px",
        })}
      >
        네비게이션
      </div>
    </div>
  );
};

export default Bottom;
