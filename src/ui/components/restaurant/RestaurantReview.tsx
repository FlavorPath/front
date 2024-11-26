import Icon from "@/ui/view/atom/Icon";
import RestaurantReviewItem from "@/ui/view/molecule/RestaurantReview";
import { css } from "@styled-system/css";

import { useNavigate, useOutletContext } from "react-router-dom";

const RestaurantReview = () => {
  const restaurantId = useOutletContext<number>();
  console.log("리뷰 페이지에서  " + restaurantId);
  const navigate = useNavigate();

  const NavigateToWrite = () => {
    console.log("아이콘 눌림");
    navigate(`/review?type=create&targetId=${restaurantId}`);
  };

  return (
    <div className={styles.container}>
      <div className={styles.reviewWrapper}>
        <div
          className={css({
            textStyle: "button1",
          })}
        >
          리뷰를 작성해주세요
        </div>
        <Icon
          iconName={"PencilSquareIcon"}
          library={"hero-solid"}
          fill="#ff8700"
          onClick={() => {
            NavigateToWrite;
          }}
        />
      </div>
      <RestaurantReviewItem />
    </div>
  );
};

export default RestaurantReview;

const styles = {
  container: css({
    width: "100%",
    display: "flex",
    flexDirection: "column",
    gap: "5px",
    padding: "5px 20px 0px 20px",
    overflow: "scroll",
  }),
  reviewWrapper: css({
    height: "70px",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  }),
  wrapper: css({
    width: "335px",
    display: "flex",
    flexDir: "column",
    gap: "8px",
  }),
  userWrapper: css({
    display: "flex",
    gap: "8px",
  }),
  userImg: css({
    width: "20px",
    height: "20px",
    borderRadius: "50%",
  }),
  // reviewWrapper: css({
  //   whiteSpace: "pre-wrap",
  // }),
};
