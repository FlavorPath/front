import { useRestaurantNavigationStore } from "@/store/stores/restaurantNavigation.store";
import { css } from "@styled-system/css";

const navigationItems = [{ Name: "홈" }, { Name: "메뉴" }, { Name: "리뷰" }];

const RestaurantNavigation = () => {
  const { activeTab, setActiveTab } = useRestaurantNavigationStore();
  return (
    <div className={styles.Wrapper}>
      {navigationItems.map((item, index) => (
        <div
          key={item.Name}
          className={styles.Item}
          onClick={() => setActiveTab(item.Name)}
        >
          {item.Name}
        </div>
      ))}
    </div>
  );
};

export default RestaurantNavigation;

const styles = {
  Wrapper: css({
    backgroundColor: "primary.main",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    width: "100%",
    height: "50px",
    margin: "0",
    position: "fixed",
    left: 0,
    marginTop: 290,
    padding: "0px 20px 0px 20px",
  }),
  Item: css({
    fontWeight: "bold",
    color: "white",
  }),
};
