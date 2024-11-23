import Icon from "@/ui/view/atom/Icon";
import SimpleSlider from "@/ui/view/molecule/ImgSlide";
import LabelGroup from "@/ui/view/molecule/LabelGroup";
import RestaurantNavigation from "@/ui/view/molecule/RestaurantNavigation";
import { css } from "@styled-system/css";
import { useState } from "react";

const RestaurantLayout = () => {
  const [activeBookMarker, setActiveBookMarker] = useState(false);
  const LabelItem = ["한식", "고기"];
  return (
    <div
      style={{
        position: "relative",
      }}
    >
      <div className={styles.container}>
        <div className={styles.header}>
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
        <div className={styles.main}>
          <LabelGroup labelItems={LabelItem} />
          <SimpleSlider />
        </div>
        <RestaurantNavigation />
      </div>
    </div>
  );
};

export default RestaurantLayout;

const styles = {
  container: css({
    height: "420px",
    width: "100%",
    paddingTop: "10px",
    display: "flex",
    flexDirection: "column",
    gap: "7px",
  }),
  header: css({
    display: "flex",
    justifyContent: "space-between",
    padding: "10px 30px 0px 30px",
  }),
  main: css({
    padding: "0px 30px 0px 30px",
    display: "flex",
    flexDirection: "column",
    gap: "7px",
  }),
};
