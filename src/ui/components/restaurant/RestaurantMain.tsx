import ClipboardCopy from "@/hooks/ClipBoardCopy";
import useSelectedRestaurant from "@/hooks/restaurant/useSelectedRestaurant.hook";
import Icon from "@/ui/view/atom/Icon";
import { css } from "@styled-system/css";
import { useOutletContext } from "react-router-dom";

const RestaurantMain = () => {
  const restaurantId = useOutletContext<number>();
  const { restaurantDetail } = useSelectedRestaurant(restaurantId);

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <Icon
          iconName="MapPinIcon"
          library="hero-solid"
          size={24}
          fill="#ff8700"
        />
        <div className={styles.content}>
          {restaurantDetail && restaurantDetail.address}
        </div>
      </div>
      <div className={styles.wrapper}>
        <Icon
          iconName="ClockIcon"
          library="hero-solid"
          size={24}
          fill="#ff8700"
        />
        <div className={styles.content}>
          {restaurantDetail && restaurantDetail.hours}
        </div>
      </div>
      <div className={styles.wrapper}>
        <Icon
          iconName="PhoneIcon"
          library="hero-solid"
          size={24}
          fill="#ff8700"
        />
        <div className={styles.content}>
          {restaurantDetail && restaurantDetail.phone}
          {restaurantDetail && <ClipboardCopy text={restaurantDetail.phone} />}
        </div>
      </div>
    </div>
  );
};

export default RestaurantMain;

const styles = {
  container: css({
    width: "100%",
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    padding: "15px 0px 0px 0px",
  }),
  wrapper: css({
    display: "flex",
    width: "100%",
    gap: 20,
  }),
  content: css({
    textStyle: "body2",
    display: "flex",
    alignItems: "center",
    whiteSpace: "pre-wrap",
    width: "250px",
  }),
};
