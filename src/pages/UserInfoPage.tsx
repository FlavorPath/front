import useUserReview from "@/hooks/userInfo/useUserReview.hook";
import UserInfo from "@/ui/components/userInfo/UserInfo";
import Header from "@/ui/view/molecule/Header";
import Icon from "@/ui/view/atom/Icon";
import { css } from "@styled-system/css";
import { useNavigate } from "react-router-dom";

const UserInfoPage = () => {
  // const {
  //   reviews,
  //   isFetching,
  //   isFetchingNextPage,
  //   observerTarget,
  //   handleDeleteReview,
  // } = useUserReview();
  const navigate = useNavigate();

  const handleEdit = (reviewId: number) => {
    console.log(`Edit review ID: ${reviewId}`);
    navigate(`/review/${reviewId}?type=edit`);
  };

  return (
    <div className={styles.container}>
      <div className={styles.userWrapper}>
        <Header headerText="내 정보" />
        <UserInfo />
      </div>
      {/* <div className={styles.reviewWrapper}>
        {reviews.map((review) => (
          <div key={review.id} className={styles.reviewItem}>
            <div className={styles.reviewHeader}>
              <p className={styles.restaurantName}>
                식당 ID: {review.restaurant_id}
              </p>
              <div className={styles.iconWrapper}>
                <Icon
                  iconName="PencilSquareIcon"
                  library="hero-solid"
                  fill="#4caf50"
                  onClick={() => handleEdit(review.id)}
                  className={styles.icon}
                />
                <Icon
                  iconName="TrashIcon"
                  library="hero-solid"
                  fill="#f44336"
                  onClick={() => handleDeleteReview(review.id)}
                  className={styles.icon}
                />
              </div>
            </div>
            <p className={styles.reviewContent}>{review.content}</p>
            <p className={styles.reviewDate}>
              작성일: {new Date(review.created_at).toLocaleString()}
            </p>
          </div>
        ))}
        <div ref={observerTarget} className={styles.observerTarget}>
          {isFetchingNextPage && <p>리뷰 로딩중</p>}
        </div>
        {isFetching && !isFetchingNextPage && <p>리뷰 패칭중...</p>}
      </div> */}
    </div>
  );
};

export default UserInfoPage;

const styles = {
  container: css({
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
  }),
  userWrapper: css({
    display: "flex",
    flexDirection: "column",
    width: "100%",
    height: "300px",
  }),
  reviewWrapper: css({
    width: "100%",
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    padding: "10px 20px",
    overflowY: "auto",
  }),
  reviewItem: css({
    padding: "10px",
    border: "1px solid #ddd",
    borderRadius: "8px",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    position: "relative",
  }),
  reviewHeader: css({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  }),
  restaurantName: css({
    textStyle: "body2",
    fontWeight: "bold",
  }),
  iconWrapper: css({
    display: "flex",
    gap: "10px",
  }),
  icon: css({
    cursor: "pointer",
    width: "20px",
    height: "20px",
  }),
  reviewContent: css({
    textStyle: "body3",
    color: "#333",
  }),
  reviewDate: css({
    textStyle: "body4",
    color: "#777",
  }),
  observerTarget: css({
    height: "50px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }),
};
