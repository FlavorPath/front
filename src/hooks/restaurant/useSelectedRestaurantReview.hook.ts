import { useInfiniteReviews } from "@/store/queries/restaurantReview.query";

const useSelectedRestaurantReview = (restaurantId: number) => {
  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
  } = useInfiniteReviews(restaurantId);

  const reviews = data ? data.pages.flatMap((page) => page.reviews) : [];

  return {
    reviews,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
    error,
  };
};

export default useSelectedRestaurantReview;
