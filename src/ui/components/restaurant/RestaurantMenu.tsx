import useSelectedRestaurant from "@/hooks/restaurant/useSelectedRestaurant.hook";
import MenuItem from "@/ui/view/molecule/RestaurantMenu/MenuItem";
import { css } from "@styled-system/css";
import { useOutletContext } from "react-router-dom";

const RestaurantMenu = () => {
  const restaurantId = useOutletContext<number>();
  const { restaurantDetail } = useSelectedRestaurant(restaurantId);
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        {restaurantDetail &&
          restaurantDetail.menu.map((item, index) => (
            <MenuItem
              key={index}
              image={item.photo_url}
              name={item.name}
              price={item.price}
            />
          ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;

const styles = {
  container: css({
    width: "100%",
    display: "flex",
    flexDirection: "column",
    gap: "5px",
    padding: "20px 20px 0px 20px",
  }),
  wrapper: css({
    display: "flex",
    flexWrap: "wrap",
    gap: "40px",
  }),
};
