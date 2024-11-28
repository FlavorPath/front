import useUserReview from "@/hooks/userInfo/useUserReview.hook";
import UserInfo from "@/ui/components/userInfo/UserInfo";
import Header from "@/ui/view/molecule/Header";
import UserReviewItem from '@/ui/view/molecule/UserReviewItem';
import { css } from "@styled-system/css";

import { useNavigate } from "react-router-dom";

const UserInfoPage = () => {
  const {
    reviews,
    // isFetching,
    // isFetchingNextPage,
    // observerTarget,
    handleDeleteReview,
  } = useUserReview();
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
      <div className={styles.reviewWrapper}>
        {reviews.map((review) => (
          <UserReviewItem
            key={review.id}
            label={review.label}
            content={review.content}
            reviewId={review.id}
            name={review.restaurant_name}
            onEdit={handleEdit}
            onDelete={handleDeleteReview}
          />
        ))}
        {/* <div ref={observerTarget} className={styles.observerTarget}>
          {isFetchingNextPage && <p>리뷰 로딩중</p>}
        </div>
        {isFetching && !isFetchingNextPage && <p>리뷰 패칭중...</p>} */}
      </div>
    </div>
  );
};

export default UserInfoPage;

const styles = {
  container: css({
    width: "100%",
    height: "100dvh",
    display: "flex",
    flexDirection: "column",
    position: "relative",
  }),
  userWrapper: css({
    display: "flex",
    flexDirection: "column",
    width: "100%",
    height: "250px",
  }),
  line: css({
    position: "absolute",
    top: "280px",
    left: 0,
    height: "5px",
    width: "100%",
    backgroundColor: "background.gray",
  }),
  reviewWrapper: css({
    width: "100%",
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    padding: "10px 20px",
    overflowY: "auto",
  }),
  observerTarget: css({
    height: "50px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }),
};
