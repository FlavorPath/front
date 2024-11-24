import { useMutation } from "@tanstack/react-query";
import { queryClient } from "@/App";
import {
  updateScrape,
  useRestaurantDetail,
  useRestaurantReviews,
} from "@/store/queries/restaurant.query";

const useSelectedRestaurant = (id: number) => {
  const {
    data: restaurantDetail,
    isLoading,
    error: restaurantDetailError,
  } = useRestaurantDetail(id);

  const scrapeMutation = useMutation({
    mutationFn: (id: number) => updateScrape(id),
    onSettled: async () => {
      await queryClient.invalidateQueries({ queryKey: ["restaurant", id] });
    },
  });

  const handleUpdateScrape = () => {
    if (restaurantDetail) {
      scrapeMutation.mutate(id);
    }
  };

  const {
    data: restaurantReviews,
    fetchNextPage,
    hasNextPage,
  } = useRestaurantReviews(id);

  return {
    restaurantDetail,
    isLoading,
    restaurantDetailError,
    handleUpdateScrape,
    isScrapePending: scrapeMutation.isPending,
    scrapeError: scrapeMutation.error,
    restaurantReviews,
    fetchNextPage,
    hasNextPage,
  };
};

export default useSelectedRestaurant;
