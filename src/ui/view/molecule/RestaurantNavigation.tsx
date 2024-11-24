import { css } from "@styled-system/css";
import { useLocation, useNavigate, useParams } from "react-router-dom";

const navigationItems = [
  { Name: "홈", path: "" },
  { Name: "메뉴", path: "menu" },
  { Name: "리뷰", path: "review" },
];

const RestaurantNavigation = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const location = useLocation();

  const handleNavigation = (item: { Name: string; path: string }) => {
    navigate(`/restaurant/${id}/${item.path}`);
  };

  const isSelected = (path: string) =>
    location.pathname === `/restaurant/${id}/${path}` ||
    (path === "" && location.pathname === `/restaurant/${id}`);

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        {navigationItems.map((item) => (
          <div
            key={item.Name}
            className={styles.Item}
            onClick={() => handleNavigation(item)}
          >
            {item.Name}
            {isSelected(item.path) && <div className={styles.Indicator} />}
          </div>
        ))}
      </div>
    </div>
  );
};

export default RestaurantNavigation;

const styles = {
  container: css({
    backgroundColor: "primary.main",
    width: "100%",
    height: "50px",
    position: "absolute",
    left: 0,
    padding: "0 20px",
    marginTop: 290,
  }),
  wrapper: css({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    height: "100%",
  }),
  Item: css({
    position: "relative",
    fontWeight: "bold",
    color: "white",
    cursor: "pointer",
  }),
  Indicator: css({
    position: "absolute",
    bottom: "-22px",
    left: "50%",
    transform: "translateX(-50%)",
    width: "20px",
    height: "10px",
    backgroundColor: "white",
    borderRadius: "50%",
  }),
};
