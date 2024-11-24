import useSelectedRestaurant from "@/hooks/restaurant/useSelectedRestaurant.hook";
import Icon from "@/ui/view/atom/Icon";
import LabelGroup from "@/ui/view/molecule/LabelGroup";
import RestaurantNavigation from "@/ui/view/molecule/RestaurantNavigation";
import Slider from "@/ui/view/molecule/Slider";
import { css } from "@styled-system/css";

type RestaurantLayoutProps = {
  restarauntId: number;
};

const Restaurant = ({ restarauntId }: RestaurantLayoutProps) => {
  const { restaurantDetail, handleUpdateScrape, isScrapePending } =
    useSelectedRestaurant(restarauntId);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={css({ textStyle: "heading1" })}>
          {restaurantDetail?.name || "로딩중..."}
        </h1>
        <Icon
          iconName="BookmarkIcon"
          library={"hero-outline"}
          onClick={handleUpdateScrape}
          className={css({
            stroke: "primary.main",
            strokeWidth: "2px",
            fill: "none",
          })}
          fill={restaurantDetail?.isScraped ? "#ff8700" : "white"}
        />
      </div>

      <div className={styles.main}>
        {restaurantDetail ? (
          <>
            <LabelGroup labelItems={restaurantDetail.labels} />
            <Slider images={restaurantDetail.images} />
          </>
        ) : (
          <p>로딩중...</p>
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
