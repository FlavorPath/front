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
    if (location.pathname.includes("restaurant")) {
      navigate(`/restaurant/${id}/${item.path}`);
    }
  };
  return (
    <div className={styles.Wrapper}>
      {navigationItems.map((item) => (
        <div
          key={item.Name}
          className={styles.Item}
          onClick={() => handleNavigation(item)}
          style={{
            cursor: location.pathname.includes("restaurant")
              ? "pointer"
              : "not-allowed",
            opacity: location.pathname.includes("restaurant") ? 1 : 0.5,
          }}
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
    position: "absolute",
    left: 0,
    marginTop: 290,
    padding: "0px 20px 0px 20px",
  }),
  Item: css({
    fontWeight: "bold",
    color: "white",
  }),
};
