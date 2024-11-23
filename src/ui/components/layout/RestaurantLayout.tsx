import Icon from "@/ui/view/atom/Icon";
import ButtonGroup from "@/ui/view/molecule/ButtonGroup";
import { css } from "@styled-system/css";
import { useState } from "react";
import { Outlet } from "react-router-dom";

const RestaurantLayout = () => {
  const [activeBookMarker, setActiveBookMarker] = useState(false);
  return (
    <div style={{ height: "100%", position: "relative" }}>
      <div className={styles.container}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "30px",
            paddingTop: "10px",
            paddingBottom: "none",
          }}
        >
          <h1 className={css({ textStyle: "heading1" })}>홀짝집</h1>
          <Icon
            iconName="BookmarkIcon"
            library="hero-solid"
            onClick={() => setActiveBookMarker(true)}
            className={css({
              stroke: "primary.main",
            })}
          />
        </div>
        <ButtonGroup />
      </div>
      <Outlet />
    </div>
  );
};

export default RestaurantLayout;

const styles = {
  container: css({
    height: "420px",
    width: "100%",
  }),
};
