import { useMutation } from "@tanstack/react-query";
import { queryClient } from "@/App";
import {
  updateScrape,
  useRestaurantDetail,
} from "@/store/queries/restaurant.query";

const useSelectedRestaurant = (id: number) => {
  const { data: restaurantDetail, isLoading, error } = useRestaurantDetail(id);

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

  return {
    restaurantDetail,
    isLoading,
    error,
    handleUpdateScrape,
    isScrapePending: scrapeMutation.isPending,
    scrapeError: scrapeMutation.error,
  };
};

export default useSelectedRestaurant;
