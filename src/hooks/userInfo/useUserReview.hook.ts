import { useInfiniteUserReviews } from "@/store/queries/userReview.query";
import { useEffect, useRef } from "react";

const useUserReview = () => {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isFetching } =
    useInfiniteUserReviews();

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

  return {
    reviews,
    isFetching,
    isFetchingNextPage,
    hasNextPage,
    observerTarget,
  };
};

export default useUserReview;
