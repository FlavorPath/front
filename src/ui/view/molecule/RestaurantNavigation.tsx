import { css } from "@styled-system/css";

const RestaurantNavigation = () => {
  return <div className={styles.Wrapper}>RestaurantNavigation</div>;
};

export default RestaurantNavigation;

const styles = {
  Wrapper: css({
    backgroundColor: "primary.main",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    height: "50px",
    margin: "0",
  }),
};
