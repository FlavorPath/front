import {
  useInfiniteReviews,
  useDeleteReview,
} from "@/store/queries/restaurantReview.query";

const useSelectedRestaurantReview = (restaurantId: number) => {
  // Fetch reviews using infinite query
  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
  } = useInfiniteReviews(restaurantId);

  // Delete review mutation
  const { mutate: deleteReviewMutate } = useDeleteReview();

  // Flatten reviews from all pages
  const reviews = data ? data.pages.flatMap((page) => page.reviews) : [];

  // Delete handler
  const handleDeleteReview = (reviewId: number) => {
    if (window.confirm("정말로 이 리뷰를 삭제하시겠습니까?")) {
      deleteReviewMutate(reviewId, {
        onSuccess: () => {
          console.log(`리뷰 ${reviewId} 삭제 성공`);
        },
        onError: (error) => {
          console.error(`리뷰 ${reviewId} 삭제 실패:`, error);
        },
      });
    }
  };

  return {
    reviews,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
    error,
    handleDeleteReview, // 삭제 핸들러 추가
  };
};

export default useSelectedRestaurantReview;
