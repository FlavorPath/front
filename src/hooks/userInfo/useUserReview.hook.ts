import { useDeleteReview } from "@/store/queries/restaurantReview.query";
import { useInfiniteUserReviews } from "@/store/queries/userReview.query";
import { useEffect, useRef } from "react";

const useUserReview = () => {
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isFetching,
    refetch,
  } = useInfiniteUserReviews();

  const { mutate: deleteReview } = useDeleteReview();

  const observerTarget = useRef<HTMLDivElement | null>(null);

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

  const reviews = data ? data.pages.flatMap((page) => page.reviews) : [];

  const handleDeleteReview = (reviewId: number) => {
    if (window.confirm("정말로 이 리뷰를 삭제하시겠습니까?")) {
      deleteReview(reviewId, {
        onSuccess: () => {
          console.log(`리뷰 ${reviewId} 삭제 성공`);
          refetch();
        },
        onError: (error) => {
          console.error(`리뷰 ${reviewId} 삭제 실패:`, error);
        },
      });
    }
  };

  return {
    reviews,
    isFetching,
    isFetchingNextPage,
    hasNextPage,
    observerTarget,
    handleDeleteReview,
    refetch,
  };
};

export default useUserReview;
