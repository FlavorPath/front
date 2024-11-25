import useSelectedRestaurant from "@/hooks/restaurant/useSelectedRestaurant.hook";
import Icon from "@/ui/view/atom/Icon";
import LabelGroup from "@/ui/view/molecule/LabelGroup";
import RestaurantNavigation from "@/ui/view/molecule/RestaurantNavigation";
import Slider from "@/ui/view/molecule/Slider";
import { css } from "@styled-system/css";
import { useState } from "react";

type RestaurantLayoutProps = {
  restarauntId: number;
};

const Restaurant = ({ restarauntId }: RestaurantLayoutProps) => {
  console.log(restarauntId);
  const { restaurantDetail } = useSelectedRestaurant(restarauntId);
  console.log("restaurantDetail: " + restaurantDetail);
  const [activeBookMarker, setActiveBookMarker] = useState(false);
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={css({ textStyle: "heading1" })}>
          {restaurantDetail ? restaurantDetail.name : "로딩중..."}
        </h1>
        <Icon
          iconName="BookmarkIcon"
          library="hero-solid"
          onClick={() => setActiveBookMarker(true)}
          className={css({
            stroke: "primary.main",
            strokeWidth: "2px",
          })}
        />
      </div>
      <div className={styles.main}>
        {restaurantDetail && (
          <>
            <LabelGroup labelItems={restaurantDetail.labels} />
            {/* <Slider images={restaurantDetail.images} /> */}
          </>
        )}
      </div>
      <RestaurantNavigation />
    </div>
  );
};

export default Restaurant;

const styles = {
  container: css({
    width: "375px",
    margin: "0 auto",
    height: "350px",
    paddingTop: "10px",
    display: "flex",
    flexDirection: "column",
    gap: "7px",
  }),
  header: css({
    display: "flex",
    justifyContent: "space-between",
    padding: "10px 20px 0px 20px",
  }),
  main: css({
    padding: "0px 20px 0px 20px",
    display: "flex",
    flexDirection: "column",
    gap: "7px",
  }),
};
