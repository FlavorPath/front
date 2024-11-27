import useSelectedRestaurantReview from "@/hooks/restaurant/useSelectedRestaurantReview.hook";
import Icon from "@/ui/view/atom/Icon";
import RestaurantReviewItem from "@/ui/view/molecule/RestaurantReviewItem";
import { css } from "@styled-system/css";
import { useNavigate, useOutletContext } from "react-router-dom";
import { useRef, useEffect } from "react";

const RestaurantReview = () => {
  const restaurantId = useOutletContext<number>();
  const navigate = useNavigate();
  const { reviews, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useSelectedRestaurantReview(restaurantId);

  const observerTarget = useRef<HTMLDivElement | null>(null);

  const handleNavigateToWrite = () => {
    console.log("아이콘 눌림");
    navigate(`/review?targetId=${restaurantId}`);
  };

  useEffect(() => {
    if (!hasNextPage || isFetchingNextPage) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          fetchNextPage();
        }
      },
      { threshold: 1.0 }
    );

    if (observerTarget.current) {
      observer.observe(observerTarget.current);
    }

    return () => {
      if (observerTarget.current) {
        observer.unobserve(observerTarget.current);
      }
    };
  }, [fetchNextPage, hasNextPage, isFetchingNextPage]);

  return (
    <div className={styles.container}>
      <div className={styles.reviewContainer}>
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
          onClick={handleNavigateToWrite}
        />
      </div>

      {reviews.map((review) => (
        <RestaurantReviewItem
          key={review.id}
          nickname={review.nickname}
          profileIcon={review.profileIcon}
          content={review.content}
        />
      ))}

      <div ref={observerTarget} className={styles.observerTarget}>
        {isFetchingNextPage && <p>리뷰 로딩중...</p>}
      </div>
    </div>
  );
};

export default RestaurantReview;

const styles = {
  container: css({
    width: "100%",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    padding: "10px 20px",
    overflowY: "auto",
  }),
  reviewContainer: css({
    height: "70px",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  }),
  observerTarget: css({
    height: "50px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }),
};
