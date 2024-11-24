import useSelectedRestaurant from "@/hooks/restaurant/useSelectedRestaurant.hook";
import MenuItem from "@/ui/view/molecule/Restaurant/MenuItem";
import { css } from "@styled-system/css";
import { useOutletContext } from "react-router-dom";

const RestaurantMenu = () => {
  const restaurantId = useOutletContext<number>();
  const { restaurantDetail } = useSelectedRestaurant(restaurantId);
  return <div className={styles.container}></div>;
};

export default RestaurantMenu;

const styles = {
  container: css({
    width: "100%",
    display: "flex",
    flexDirection: "column",
    gap: "5px",
    padding: "10px 20px 0px 20px",
    overflow: "scroll",
  }),
};
